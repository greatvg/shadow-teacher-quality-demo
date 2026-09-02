/**
 * 记录端 v1.1 冒烟测试（jsdom, CJS）
 * 覆盖：角色切换 / 课级10秒打分 / ABC事件 / 放学收口 / AI对话(含危机转人工) / 其余端兼容
 * 运行：NODE_PATH=<workspace>/node_modules node smoke-test.cjs
 */
const { JSDOM, VirtualConsole } = require("jsdom");
const path = require("node:path");

const here = __dirname;
const results = [];
let dom;

function check(name, condition, detail = "") {
  results.push({ name, pass: !!condition });
  console.log(`${condition ? "PASS" : "FAIL"}  ${name}${detail ? "  — " + detail : ""}`);
}

function q(selector) { return dom.window.document.querySelector(selector); }
function qa(selector) { return [...dom.window.document.querySelectorAll(selector)]; }
function text() { return dom.window.document.body.textContent; }

function submitForm(form) {
  const event = new dom.window.Event("submit", { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
}

function switchRole(value) {
  const select = q("#role-select");
  select.value = value;
  select.dispatchEvent(new dom.window.Event("change", { bubbles: true }));
}

function clickBtn(el) {
  el.dispatchEvent(new dom.window.MouseEvent("click", { bubbles: true, cancelable: true }));
}

function loadState() {
  return JSON.parse(dom.window.localStorage.getItem("shadowTeacherQualityDemoV2") || "{}");
}

async function main() {
  const jsErrors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", (err) => jsErrors.push(String((err && err.message) || err)));
  virtualConsole.on("error", (...args) => jsErrors.push(args.map(String).join(" ")));

  dom = await JSDOM.fromFile(path.join(here, "index.html"), {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
    url: "http://localhost:8642/index.html",
    virtualConsole,
  });

  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("页面加载超时")), 15000);
    dom.window.addEventListener("load", () => { clearTimeout(timer); setTimeout(resolve, 300); });
  });

  // ---- 1. 默认家长端渲染 ----
  check("家长端默认渲染", text().includes("小宇的今天"), "title=" + dom.window.document.title);

  // ---- 2. 切换影子老师端（含微信授权门）----
  switchRole("shadow");
  const authBtn = q("[data-auth-shadow]");
  check("授权门出现", !!authBtn);
  if (authBtn) clickBtn(authBtn);
  check("影子老师端渲染·收口卡", text().includes("放学收口"));
  check("影子老师端渲染·课表头", text().includes("课间 10 秒打分"));
  check("课卡片含打分/ABC按钮", qa("[data-dbr]").length >= 4 && qa("[data-abc]").length >= 4, `dbr=${qa("[data-dbr]").length} abc=${qa("[data-abc]").length}`);

  // ---- 3. 课级 10 秒打分（数学课 draft → recorded）----
  const mathDbrBtn = qa("[data-dbr]").find((b) => b.dataset.dbr === "math");
  clickBtn(mathDbrBtn);
  const dbrForm = q("#dbr-form");
  check("打分弹窗打开", !!dbrForm);
  if (dbrForm) {
    const sliders = qa("#dbr-form input[type=range]");
    check("DBR滑条数量=4(三构念+可选情绪)", sliders.length === 4, `实际=${sliders.length}`);
    sliders.forEach((s) => { s.value = "6"; s.dispatchEvent(new dom.window.Event("input", { bubbles: true })); });
    submitForm(dbrForm);
    const math = (loadState().lessons || []).find((l) => l.id === "math");
    check("数学课打分已持久化", math && math.dbr && math.dbr.academicEngagement === 6, JSON.stringify((math && math.dbr) || {}));
    check("数学课状态draft→recorded", math && math.status === "recorded", "status=" + (math && math.status));
  }

  // ---- 4. ABC 事件记录 ----
  const mathAbcBtn = qa("[data-abc]").find((b) => b.dataset.abc === "math");
  clickBtn(mathAbcBtn);
  const abcForm = q("#abc-form");
  check("ABC弹窗打开", !!abcForm);
  if (abcForm) {
    const ant = abcForm.querySelector('input[name="antecedent"]');
    const con = abcForm.querySelector('input[name="consequence"]');
    if (ant) { ant.checked = true; ant.dispatchEvent(new dom.window.Event("change", { bubbles: true })); }
    if (con) { con.checked = true; con.dispatchEvent(new dom.window.Event("change", { bubbles: true })); }
    const behavior = abcForm.querySelector('input[name="behavior"]');
    if (behavior) behavior.value = "换同桌后离座拿别人文具";
    submitForm(abcForm);
    const saved = loadState();
    const evCount = (saved.abcEvents || []).length;
    check("ABC事件已持久化", evCount >= 1, `abcEvents=${evCount}`);
    const mathEv = (saved.abcEvents || []).find((e) => e.lessonId === "math" || e.subject === "数学课");
    check("ABC事件挂载lessonId", !!mathEv, mathEv ? `lessonId=${mathEv.lessonId || mathEv.subject}` : "未找到");
  }

  // ---- 5. 放学收口 ----
  clickBtn(q("[data-daily-close]"));
  const closeForm = q("#close-form");
  check("收口弹窗打开", !!closeForm);
  if (closeForm) {
    check("三问自动聚合提示存在", closeForm.textContent.includes("自动聚合"));
    const radio = closeForm.querySelector('input[type=radio][value="done"]');
    if (radio) { radio.checked = true; radio.dispatchEvent(new dom.window.Event("change", { bubbles: true })); }
    const hl = closeForm.querySelector("#close-highlights");
    if (hl) hl.value = "主动举手2次";
    const plan = closeForm.querySelector("#close-plan");
    if (plan) plan.value = "数学课前预告任务步骤";
    submitForm(closeForm);
    const closeArr = loadState().dailyRecords || [];
    check("收口记录已持久化", closeArr.length >= 1, closeArr.length ? `date=${closeArr[closeArr.length - 1].date} goals=${closeArr[closeArr.length - 1].goalChecks.length}` : "未找到dailyRecords");
  }

  // ---- 6. AI 对话：危机转人工 + 引用记录（入口在「在线督导」页）----
  const navSup = q('[data-nav="supervision"]');
  check("督导页导航存在", !!navSup);
  if (navSup) clickBtn(navSup);
  const aiEntry = q("[data-ai-chat]");
  check("AI对话入口存在", !!aiEntry);
  if (!aiEntry) {
    console.log("\n===== 中止：找不到AI对话入口 =====");
    dom.window.close();
    process.exit(1);
  }
  clickBtn(aiEntry);
  const chatForm = q("#ai-chat-form");
  check("AI对话弹窗打开", !!chatForm);
  if (chatForm) {
    const input = chatForm.querySelector("input[name=question]");
    input.value = "孩子今天情绪崩溃攻击了同学，我该怎么做";
    submitForm(chatForm);
    check("危机关键词触发转人工提示", text().includes("转人工"), text().includes("危机") ? "危机卡已显示" : "未见危机卡");
    const form2 = q("#ai-chat-form");
    const input2 = form2.querySelector("input[name=question]");
    input2.value = "孩子上课总是离座怎么办";
    submitForm(form2);
    const bodyText = text();
    check("AI回复引用具体记录", bodyText.includes("基于你的记录"), "");
    check("AI建议含观察指标", bodyText.includes("观察指标") || bodyText.includes("连续记"));
  }

  // ---- 7. 其余角色端兼容 ----
  switchRole("school");
  const schoolAuth = q("[data-auth-school]");
  if (schoolAuth) clickBtn(schoolAuth);
  check("校内老师端渲染", text().includes("小宇") && text().length > 200, `len=${text().length}`);
  switchRole("parent");
  check("家长端可切回", !!q("#role-select"));

  // ---- 8. 全程 JS 错误 ----
  check("无JS运行时错误", jsErrors.length === 0, jsErrors.slice(0, 3).join(" | "));

  const failed = results.filter((r) => !r.pass);
  console.log(`\n===== 结果：${results.length - failed.length}/${results.length} 通过 =====`);
  dom.window.close();
  process.exit(failed.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
