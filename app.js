const STORAGE_KEY = "shadowTeacherQualityDemoV2";
const EXPERIENCE_FEEDBACK_KEY = "shadowTeacherExperienceFeedbackV1";

const DEFAULT_STATE = {
  teachers: [
    {
      id: "lin-xiaoya",
      name: "林晓雅",
      initials: "林",
      color: "#2f7659",
      certified: true,
      title: "融合教育影子老师 · 6年",
      tags: ["自闭症谱系", "社交沟通"],
      price: 680,
      graduationCount: 12,
      supervisionHours: 126,
      verifyRate: 98,
      description: "关注课堂参与、同伴互动和支持逐步撤离。服务计划会与家庭、学校和督导共同复盘。",
      cases: [
        { type: "自闭症谱系", duration: "14个月", result: "完全独立", note: "已连续两个学期独立完成课堂与课间活动。" },
        { type: "社交沟通困难", duration: "9个月", result: "降级过渡", note: "由全日陪伴过渡为每周两次重点课程支持。" },
        { type: "注意力困难", duration: "11个月", result: "阶段性毕业", note: "低年级课堂目标达成，升学后重新评估支持需求。" }
      ]
    },
    {
      id: "fang-min",
      name: "方敏",
      initials: "方",
      color: "#315f73",
      certified: true,
      title: "儿童行为支持师 · 5年",
      tags: ["多动症", "执行功能"],
      price: 590,
      graduationCount: 9,
      supervisionHours: 104,
      verifyRate: 96,
      description: "擅长任务拆分、课堂规则建立与执行功能支持，强调可量化目标和跨场景迁移。",
      cases: [
        { type: "多动症", duration: "10个月", result: "完全独立", note: "可独立使用任务清单并完成课堂转换。" },
        { type: "执行功能困难", duration: "8个月", result: "降级过渡", note: "撤除主要视觉提示，仅保留周计划复盘。" }
      ]
    },
    {
      id: "chen-yuhang",
      name: "陈宇航",
      initials: "陈",
      color: "#a26149",
      certified: true,
      title: "融合教育影子老师 · 4年",
      tags: ["情绪调节", "课堂适应"],
      price: 520,
      graduationCount: 8,
      supervisionHours: 84,
      verifyRate: 95,
      description: "以情绪识别、课堂转换和主动求助为重点，重视与班主任共同制定支持策略。",
      cases: [
        { type: "情绪行为困难", duration: "12个月", result: "降级过渡", note: "高压力课程保留支持，其余课程已独立。" },
        { type: "课堂适应困难", duration: "7个月", result: "阶段性毕业", note: "本学期适应目标达成，下一阶段继续观察。" }
      ]
    },
    {
      id: "zhou-kexin",
      name: "周可欣",
      initials: "周",
      color: "#8b702f",
      certified: false,
      title: "影子老师 · 3年",
      tags: ["学习困难", "课堂常规"],
      price: 460,
      graduationCount: 5,
      supervisionHours: 48,
      verifyRate: 93,
      description: "侧重低年级课堂常规和学习任务支持，当前正在完成平台进阶认证。",
      cases: [
        { type: "学习困难", duration: "15个月", result: "阶段性毕业", note: "识字与作业组织目标达成。" }
      ]
    }
  ],
  child: {
    alias: "小宇",
    grade: "小学三年级",
    teacherId: "lin-xiaoya",
    monthlyProgress: [
      { label: "课堂参与", value: 82, delta: "+9" },
      { label: "独立完成", value: 74, delta: "+12" },
      { label: "同伴互动", value: 68, delta: "+6" },
      { label: "情绪调节", value: 79, delta: "+4" }
    ]
  },
  timetable: {
    term: "2026-2027学年第一学期",
    updatedAt: "2026-09-01",
    days: ["周一", "周二", "周三", "周四", "周五"],
    rows: [
      { time: "08:10-08:50", subjects: ["晨间准备", "晨间准备", "晨间准备", "晨间准备", "晨间准备"] },
      { time: "09:00-09:40", subjects: ["语文", "数学", "语文", "数学", "语文"] },
      { time: "10:20-11:00", subjects: ["数学", "语文", "数学", "语文", "数学"] },
      { time: "11:10-11:50", subjects: ["英语", "体育", "英语", "体育", "英语"] },
      { time: "14:00-14:40", subjects: ["综合实践", "英语", "体育", "综合实践", "体育"] },
      { time: "14:50-15:30", subjects: ["体育", "综合实践", "班会", "英语", "综合实践"] }
    ]
  },
  interventionPlan: {
    term: "2026-2027学年第一学期",
    updatedAt: "2026-09-01",
    items: [
      { id: "sep-oct", months: "9月-10月", focus: "社交问题", goal: "提升同伴互动与轮流等待，减少课堂抢拿行为，每周两次同伴合作活动。", status: "进行中" },
      { id: "nov-dec", months: "11月-12月", focus: "课堂问题", goal: "稳定课堂参与，逐步撤除全程口头提示，在语文与综合实践课试行远距离支持。", status: "待开始" }
    ]
  },
  lessons: [
    {
      id: "morning",
      time: "08:10",
      subject: "晨间准备",
      originalSubject: "晨间准备",
      subjectNote: "",
      status: "recorded",
      dbr: { academicEngagement: 8, disruptive: 1, socialRule: 9, emotionRegulation: 8 },
      frequencyCount: 0,
      note: "进入教室比上周更从容。",
      summary: [
        { category: "社交情况", tone: "progress", text: "主动与同桌打招呼，等待老师安排时没有催促。" },
        { category: "学习习惯", tone: "progress", text: "按视觉清单完成书包整理，第二项需要一次手势提示，随后独立进入教室。" },
        { category: "情绪控制", tone: "progress", text: "进入教室情绪平稳，未出现抗拒或退缩。" }
      ],
      strategies: ["先等待 5 秒，再使用最小手势提示。", "进教室前在门口预告今天第一项任务。"],
      media: "assets/feedback-reading.svg",
      schoolTeacher: "王老师",
      schoolComment: "记录属实。今天进入教室比上周更从容。",
      updatedAt: "08:42"
    },
    {
      id: "chinese",
      time: "10:20",
      subject: "语文课",
      originalSubject: "语文课",
      subjectNote: "",
      status: "recorded",
      dbr: { academicEngagement: 7, disruptive: 4, socialRule: 8, emotionRegulation: 5 },
      frequencyCount: 1,
      note: "",
      summary: [
        { category: "社交情况", tone: "progress", text: "主动举手回答1次，小组合读时能轮流等待发言。" },
        { category: "学习习惯", tone: "progress", text: "小组朗读持续参与12分钟，中途自行使用暂停卡1次。" },
        { category: "情绪控制", tone: "serious", text: "分组变化时出现一次烦躁，短暂离座，经口头提示后回到座位。" }
      ],
      strategies: ["将朗读任务分成两段，完成第一段后给出同伴强化。", "提供可视化任务单，完成一项勾一项。", "分组变化当天安排固定座位并提前告知。"],
      media: "assets/feedback-reading.svg",
      schoolTeacher: "张老师",
      schoolComment: "属实。暂停后能回到任务，恢复速度有进步。",
      updatedAt: "11:06"
    },
    {
      id: "activity",
      time: "14:00",
      subject: "综合实践",
      originalSubject: "综合实践",
      subjectNote: "",
      status: "recorded",
      dbr: { academicEngagement: 6, disruptive: 5, socialRule: 7, emotionRegulation: 6 },
      frequencyCount: 2,
      note: "",
      summary: [
        { category: "社交情况", tone: "serious", text: "与同伴共同完成材料分类时出现一次抢拿，经口头提示后归还并等待轮次。" },
        { category: "学习习惯", tone: "progress", text: "能按步骤完成分类任务，保持专注约18分钟。" },
        { category: "情绪控制", tone: "progress", text: "轮候等待期间情绪平稳，能接受同伴先完成。" }
      ],
      strategies: ["使用轮次卡，并在等待成功后立即给予具体表扬。", "活动转换前 2 分钟给出倒计时提醒。"],
      media: "assets/feedback-math.svg",
      schoolTeacher: "王老师",
      schoolComment: "",
      updatedAt: "14:48"
    },
    {
      id: "math",
      time: "15:05",
      subject: "数学课",
      originalSubject: "数学课",
      subjectNote: "",
      status: "draft",
      dbr: { academicEngagement: null, disruptive: null, socialRule: null, emotionRegulation: null },
      frequencyCount: 0,
      note: "",
      summary: [
        { category: "社交情况", tone: "progress", text: "" },
        { category: "学习习惯", tone: "progress", text: "" },
        { category: "情绪控制", tone: "progress", text: "" }
      ],
      strategies: [],
      media: "assets/feedback-math.svg",
      schoolTeacher: "李老师",
      schoolComment: "",
      updatedAt: ""
    }
  ],
  goals: [
    { id: "g-01", text: "上课举手发言 3 次", active: true },
    { id: "g-02", text: "等待轮次，不抢拿物品", active: true },
    { id: "g-03", text: "独立完成课堂任务单", active: true }
  ],
  abcEvents: [
    { id: "abc-101", lessonId: "chinese", time: "10:20", subject: "语文课", antecedent: "转换/被打断", behavior: "分组变化时短暂离座", consequence: "给予关注/安抚", intensity: "轻", otherText: "" },
    { id: "abc-102", lessonId: "activity", time: "14:00", subject: "综合实践", antecedent: "等待（排队/轮流）", behavior: "抢拿同伴材料一次", consequence: "撤销要求/任务暂停", intensity: "中", otherText: "" }
  ],
  dailyRecords: [
    {
      date: "2026-09-01",
      goalChecks: [ { goalId: "g-01", done: true }, { goalId: "g-02", done: false }, { goalId: "g-03", done: true } ],
      promptLevels: { "g-01": "V", "g-02": "G", "g-03": "M" },
      highlights: "轮到值日生时主动站了起来，全班只有他记得。",
      confusions: "",
      tomorrowPlan: "数学课前先预告任务步骤。",
      aiAsked: false
    }
  ],
  graduation: {
    childAlias: "小宇",
    teacherId: "lin-xiaoya",
    result: "降级过渡",
    status: 0,
    counted: false,
    notes: {}
  },
  consultedTeacherIds: []
};

const roleConfig = {
  parent: {
    label: "家长端",
    name: "小宇家长",
    defaultPage: "today",
    nav: [
      { id: "today", label: "孩子今日", icon: "◷" },
      { id: "growth", label: "成长档案", icon: "↗" },
      { id: "profile", label: "我的", icon: "○" }
    ]
  },
  shadow: {
    label: "影子老师端",
    name: "林晓雅",
    defaultPage: "schedule",
    nav: [
      { id: "schedule", label: "今日课表", icon: "▦" },
      { id: "timetable", label: "学期课表", icon: "▤" },
      { id: "children", label: "服务儿童", icon: "◎" },
      { id: "credit", label: "专业信用", icon: "◇" },
      { id: "supervision", label: "在线督导", icon: "◉" }
    ]
  },
  school: {
    label: "校内老师端",
    name: "王老师",
    defaultPage: "review",
    nav: [
      { id: "review", label: "待我确认", icon: "✓" },
      { id: "history", label: "确认记录", icon: "≡" }
    ]
  }
};

let state = loadState();
let experienceFeedback = loadExperienceFeedback();
let ui = {
  role: "parent",
  page: "market",
  teacherId: null,
  filter: "全部",
  query: "",
  sort: "recommend",
  modal: null,
  toast: "",
  auth: loadAuth()
};

const initialParams = new URLSearchParams(window.location.search);
const initialRole = initialParams.get("role");
const initialPage = initialParams.get("page");
if (initialRole && initialRole !== "specialist" && roleConfig[initialRole]) {
  ui.role = initialRole;
  ui.page = roleConfig[initialRole].nav.some((item) => item.id === initialPage)
    ? initialPage
    : roleConfig[initialRole].defaultPage;
}
let toastTimer;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadAuth() {
  try {
    const v = JSON.parse(localStorage.getItem("shadowTeacherAuthV1"));
    if (v && typeof v === "object") return { shadow: !!v.shadow, school: !!v.school };
  } catch (e) {}
  return { shadow: false, school: false };
}

function saveAuth() {
  try {
    localStorage.setItem("shadowTeacherAuthV1", JSON.stringify(ui.auth));
  } catch (e) {}
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : clone(DEFAULT_STATE);
  } catch {
    return clone(DEFAULT_STATE);
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadExperienceFeedback() {
  try {
    const stored = localStorage.getItem(EXPERIENCE_FEEDBACK_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function persistExperienceFeedback() {
  localStorage.setItem(EXPERIENCE_FEEDBACK_KEY, JSON.stringify(experienceFeedback));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function statusLabel(status) {
  return {
    draft: ["待填写", "amber"],
    recorded: ["已记录", "blue"],
    pending: ["待校方确认", "amber"],
    verified: ["校方已确认", "green"],
    correction: ["需修正", "coral"]
  }[status] || [status, "amber"];
}

function graduationLabel(status) {
  return ["待提名", "待心理观察", "待督导审核", "待家长确认", "已完成"][status];
}

function saveAndRender(message) {
  persist();
  render();
  if (message) showToast(message);
}

function showToast(message) {
  ui.toast = message;
  clearTimeout(toastTimer);
  render();
  toastTimer = setTimeout(() => {
    ui.toast = "";
    render();
  }, 2600);
}

function render() {
  const role = roleConfig[ui.role];
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="shell">
      <header class="topbar">
        <div class="brand">
          <span class="brand-mark">融</span>
          <span>
            <strong>影子陪读融合工具</strong>
            <small>演示数据</small>
          </span>
        </div>
        <div class="role-control">
          <select id="role-select" class="select" aria-label="切换演示角色">
            ${Object.entries(roleConfig).map(([id, config]) => `<option value="${id}" ${id === ui.role ? "selected" : ""}>${config.label}</option>`).join("")}
          </select>
        </div>
      </header>
      <div class="layout">
        <aside class="sidebar">
          ${ui.role === "school" && !ui.auth.school || ui.role === "shadow" && !ui.auth.shadow ? "" : `
          ${renderNav(role.nav)}
          <div class="sidebar-footer">
            <button class="feedback-button" type="button" data-experience-feedback>体验反馈${experienceFeedback.length ? ` · ${experienceFeedback.length}` : ""}</button>
            <button class="reset-button" type="button" data-reset>重置演示数据</button>
          </div>`}
        </aside>
        <main class="main">
          <div class="content">${renderPage()}</div>
        </main>
      </div>
      ${ui.role === "school" && !ui.auth.school || ui.role === "shadow" && !ui.auth.shadow ? "" : `<nav class="mobile-nav" style="--nav-count:${role.nav.length}" aria-label="主导航">
        ${renderNav(role.nav)}
      </nav>
      <button class="feedback-fab" type="button" data-experience-feedback aria-label="提交体验反馈" title="提交体验反馈">✎</button>`}
      ${renderModal()}
      ${ui.toast ? `<div class="toast" role="status">${escapeHtml(ui.toast)}</div>` : ""}
    </div>
  `;
}

function renderNav(items) {
  return `<div class="nav-list">${items.map((item) => `
    <button class="nav-item ${ui.page === item.id && !ui.teacherId ? "active" : ""}" type="button" data-nav="${item.id}">
      <span class="nav-icon" aria-hidden="true">${item.icon}</span>
      <span>${item.label}</span>
    </button>
  `).join("")}</div>`;
}

function renderPage() {
  if (ui.teacherId) return renderTeacherDetail(ui.teacherId);
  if (ui.role === "parent" && ui.page === "market") ui.page = "today";
  if (ui.role === "school" && !ui.auth.school) return renderAuthGate("school");
  if (ui.role === "shadow" && !ui.auth.shadow) return renderAuthGate("shadow");
  const key = `${ui.role}:${ui.page}`;
  const views = {
    "parent:market": renderMarket,
    "parent:today": renderToday,
    "parent:growth": renderGrowth,
    "parent:profile": renderParentProfile,
    "shadow:schedule": renderSchedule,
    "shadow:timetable": renderTimetable,
    "shadow:children": renderChildren,
    "shadow:credit": renderCredit,
    "shadow:supervision": renderSupervision,
    "school:review": renderReview,
    "school:history": renderReviewHistory
  };
  return (views[key] || renderToday)();
}

function renderAuthGate(role) {
  if (role === "shadow") {
    return `
      <div class="auth-gate">
        <div class="auth-gate-icon">🔒</div>
        <h1 class="auth-gate-title">影子老师身份授权</h1>
        <p class="auth-gate-desc">为保护儿童支持记录与专业干预计划，仅本儿童对应的影子老师可查看课表、服务档案与专业信用。请点击下方按钮使用微信身份授权。</p>
        <button class="auth-btn" type="button" data-auth-shadow>微信授权后查看</button>
      </div>
    `;
  }
  return `
    <div class="auth-gate">
      <div class="auth-gate-icon">🔒</div>
      <h1 class="auth-gate-title">校内老师身份授权</h1>
      <p class="auth-gate-desc">为保护课堂反馈记录，仅授权的校内老师可查看待确认与历史核验内容。请点击下方按钮使用微信身份授权。</p>
      <button class="auth-btn" type="button" data-auth-school>微信授权后查看</button>
    </div>
  `;
}

function pageHeader(title, subtitle, action = "") {
  return `<div class="page-header"><div><h1>${title}</h1><p>${subtitle}</p></div>${action}</div>`;
}

function renderMarket() {
  const tags = ["全部", ...new Set(state.teachers.flatMap((teacher) => teacher.tags))];
  const query = ui.query.trim().toLowerCase();
  const filtered = state.teachers
    .filter((teacher) => ui.filter === "全部" || teacher.tags.includes(ui.filter))
    .filter((teacher) => !query || `${teacher.name}${teacher.title}${teacher.tags.join("")}`.toLowerCase().includes(query))
    .sort((a, b) => {
      if (ui.sort === "graduation") return b.graduationCount - a.graduationCount;
      if (ui.sort === "price") return a.price - b.price;
      return Number(b.certified) - Number(a.certified) || b.graduationCount - a.graduationCount;
    });

  return `
    ${pageHeader("找影子老师", "认证状态、毕业案例和持续督导记录共同构成专业信用")}
    <div class="toolbar">
      <div class="search"><span class="search-icon">⌕</span><input class="input" id="teacher-search" value="${escapeHtml(ui.query)}" placeholder="搜索姓名或擅长方向" aria-label="搜索老师" /></div>
      <select class="select" id="teacher-sort" aria-label="老师排序">
        <option value="recommend" ${ui.sort === "recommend" ? "selected" : ""}>认证优先</option>
        <option value="graduation" ${ui.sort === "graduation" ? "selected" : ""}>毕业案例最多</option>
        <option value="price" ${ui.sort === "price" ? "selected" : ""}>价格从低到高</option>
      </select>
    </div>
    <div class="filter-row" aria-label="擅长方向筛选">
      ${tags.map((tag) => `<button class="chip ${ui.filter === tag ? "active" : ""}" type="button" data-filter="${tag}">${tag}</button>`).join("")}
    </div>
    ${filtered.length ? `<div class="teacher-grid">${filtered.map(renderTeacherCard).join("")}</div>` : `<div class="empty"><div class="empty-mark">⌕</div>没有匹配的老师</div>`}
  `;
}

function renderTeacherCard(teacher) {
  return `
    <article class="teacher-card">
      <div class="teacher-card-top">
        <div class="avatar" style="--avatar:${teacher.color}">${teacher.initials}</div>
        <div>
          <div class="teacher-name"><h2>${teacher.name}</h2>${teacher.certified ? `<span class="verified" title="平台认证">✓</span>` : ""}</div>
          <div class="teacher-subtitle">${teacher.title}</div>
        </div>
        <div class="price">面议</div>
      </div>
      <div class="tags">${teacher.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}${!teacher.certified ? `<span class="status amber">认证中</span>` : ""}</div>
      <div class="card-stats">
        <div class="card-stat"><strong>${teacher.graduationCount}</strong><span>毕业案例</span></div>
        <div class="card-stat"><strong>${teacher.supervisionHours}h</strong><span>督导时长</span></div>
        <div class="card-stat"><strong>${teacher.verifyRate}%</strong><span>校方核验率</span></div>
      </div>
      <div class="card-actions"><button class="button ghost" type="button" data-open-teacher="${teacher.id}">查看档案</button></div>
    </article>
  `;
}

function renderTeacherDetail(id) {
  const teacher = state.teachers.find((item) => item.id === id);
  if (!teacher) {
    ui.teacherId = null;
    return renderMarket();
  }
  const consulted = state.consultedTeacherIds.includes(id);
  return `
    <button class="back-button" type="button" data-back>← 返回老师列表</button>
    <div class="profile-head">
      <div class="avatar" style="--avatar:${teacher.color}">${teacher.initials}</div>
      <div>
        <div class="teacher-name"><h1>${teacher.name}</h1>${teacher.certified ? `<span class="verified" title="平台认证">✓</span>` : ""}</div>
        <div class="teacher-subtitle">${teacher.title}</div>
        <div class="tags">${teacher.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
      <button class="button primary" type="button" data-consult="${teacher.id}" ${consulted ? "disabled" : ""}>${consulted ? "已申请咨询" : "申请咨询"}</button>
    </div>
    <p class="profile-copy">${teacher.description}</p>
    <section class="section">
      <div class="section-title"><h2>专业信用</h2><span>${teacher.certified ? "平台已认证" : "平台认证中"}</span></div>
      <div class="metrics">
        <div class="metric"><strong>${teacher.graduationCount}</strong><span>已确认毕业案例</span></div>
        <div class="metric"><strong>${teacher.supervisionHours}h</strong><span>累计专业督导</span></div>
        <div class="metric"><strong>${teacher.verifyRate}%</strong><span>校方反馈核验率</span></div>
        <div class="metric"><strong>面议</strong><span>每日服务价格</span></div>
      </div>
    </section>
    <section class="section">
      <div class="section-title"><h2>代表性毕业案例</h2><span>均经多方确认</span></div>
      <div class="case-grid">${teacher.cases.map((item) => `
        <article class="case-card">
          <h3>${item.type}</h3>
          <span class="status ${item.result === "完全独立" ? "green" : "amber"}">${item.result}</span>
          <p>陪伴 ${item.duration}</p>
          <p>${item.note}</p>
        </article>
      `).join("")}</div>
    </section>
    <section class="section">
      <div class="notice">陪伴用时与儿童初始支持需求、学校环境及家庭配合共同展示，不单独作为老师优劣判断。</div>
    </section>
  `;
}

const SUMMARY_CATEGORIES = ["社交情况", "学习习惯", "情绪控制"];

// 学术来源标注（老师打分页与家长端均可见；未来家长日报导出直接复用）
const SOURCE_NOTES = {
  dbr: "量表来源：DBR-SIS 单条目直接行为评定量表，改编自美国康涅狄格大学（University of Connecticut）Neag 教育学院研究团队开发的标准量表（30+ 篇同行评审研究支持）；「情绪调节」为面向陪读场景的扩展维度。",
  abc: "记录结构来源：改编自弗吉尼亚联邦大学（VCU）自闭症卓越中心 FBA/BIP 手册（2017）与范德堡大学 TRIAD 结构化 ABC 分析表（Iwata 体系）。",
  daily: "工具来源：三问聚合 DBR-SIS（康涅狄格大学）｜目标打卡 DRC 每日报告卡（Fabiano，佛罗里达国际大学）｜辅助层级六档（BACB 行为分析师技术规范）。"
};

const DBR_DIMENSIONS = [
  { key: "academicEngagement", label: "学业投入", low: "全程未参与", high: "全程独立投入", good: "high", desc: "听讲、举手答问、跟做任务等主动参与学习的程度" },
  { key: "disruptive", label: "干扰行为", low: "无干扰", high: "持续严重干扰", good: "low", desc: "离座、喧哗、逗弄同伴等打断教学的行为多少——注意：分数越高越需要关注" },
  { key: "socialRule", label: "社交规则", low: "频繁违反", high: "完全遵守", good: "high", desc: "遵守课堂与校园规则、礼貌对待师生的程度" },
  { key: "emotionRegulation", label: "情绪调节", low: "多次失控行为", high: "情绪平稳", good: "high", optional: true, desc: "受挫后平复、活动转换时管理情绪的能力" }
];

const PROMPT_LEVELS = [
  { code: "I", label: "独立完成", short: "独立" },
  { code: "V", label: "语言提示", short: "语言" },
  { code: "G", label: "手势提示", short: "手势" },
  { code: "M", label: "示范", short: "示范" },
  { code: "PP", label: "部分肢体辅助", short: "部分肢体" },
  { code: "FP", label: "全肢体辅助", short: "全肢体" }
];

const ANTECEDENTS = [
  "被要求停止偏好活动", "提出要求被拒绝", "任务太难/不会做", "任务太长或重复",
  "转换/被打断", "环境刺激（噪音/拥挤）", "等待（排队/轮流）", "被批评或纠正",
  "注意力在他人身上", "想要但拿不到", "身体不适/疲惫/饥饿", "同伴冲突",
  "计划外变化", "其他（写一句话）"
];

const CONSEQUENCES = [
  "撤销要求/任务暂停", "给予关注/安抚", "给予偏好物", "口头提醒/批评",
  "移到安静区/暂离", "同伴让步或回应", "忽略（无反应）", "其他（写一句话）"
];

const INTENSITIES = ["轻", "中", "重"];

const CRISIS_KEYWORDS = ["自伤", "自杀", "咬", "撞头", "攻击", "打人", "伤人", "走失", "跑出", "受伤", "流血"];

function summaryToneLabel(tone) {
  return tone === "serious" ? "需关注" : "进步";
}

function hasDbr(lesson) {
  return lesson.dbr && DBR_DIMENSIONS.some((dim) => lesson.dbr[dim.key] !== null && lesson.dbr[dim.key] !== undefined);
}

function dbrBadgeRow(lesson) {
  const abcCount = state.abcEvents.filter((event) => event.lessonId === lesson.id).length;
  const chips = DBR_DIMENSIONS.map((dim) => {
    const value = lesson.dbr ? lesson.dbr[dim.key] : null;
    if (value === null || value === undefined) return "";
    const good = dim.good === "high" ? value >= 7 : value <= 3;
    const warn = dim.good === "high" ? value <= 4 : value >= 6;
    const tone = good ? "good" : warn ? "warn" : "mid";
    return `<span class="dbr-chip ${tone}">${dim.label} ${value}</span>`;
  }).join("");
  const abc = abcCount ? `<span class="dbr-chip abc">ABC ×${abcCount}</span>` : "";
  const freq = lesson.frequencyCount ? `<span class="dbr-chip mid">高频 ×${lesson.frequencyCount}</span>` : "";
  const note = lesson.note ? `<span class="dbr-note">${escapeHtml(lesson.note)}</span>` : "";
  return `${chips}${abc}${freq}${note}`;
}

function abcListFor(lessonId) {
  const events = state.abcEvents.filter((event) => event.lessonId === lessonId);
  if (!events.length) return "";
  return `<div class="abc-list">${events.map((event) => `<div class="abc-item"><span class="status coral">ABC</span><p><strong>前因：</strong>${escapeHtml(event.antecedent)}｜<strong>行为：</strong>${escapeHtml(event.behavior)}｜<strong>后果：</strong>${escapeHtml(event.consequence)}｜强度：${escapeHtml(event.intensity)}${event.otherText ? `｜${escapeHtml(event.otherText)}` : ""}</p></div>`).join("")}</div>`;
}

function summaryDetail(lesson) {
  if (hasDbr(lesson)) {
    return `<div class="summary-detail"><div class="dbr-row big">${dbrBadgeRow(lesson)}</div>${abcListFor(lesson.id)}</div>`;
  }
  const items = lesson.summary || [];
  if (!items.length) return "";
  return `<div class="summary-detail">${items.map((item) => `<div class="summary-item ${item.tone === "serious" ? "serious" : "progress"}"><div class="summary-cat">${item.category} · ${summaryToneLabel(item.tone)}</div><p class="summary-text">${escapeHtml(item.text || "暂无记录")}</p></div>`).join("")}</div>`;
}

function summaryCompact(lesson) {
  if (hasDbr(lesson)) {
    return `<div class="dbr-row">${dbrBadgeRow(lesson)}</div>`;
  }
  const items = lesson.summary || [];
  if (!items.some((item) => item.text && item.text.trim())) return `<p class="summary-empty">课后总结待填写</p>`;
  return `<div class="summary-lines">${items.map((item) => `<div class="summary-line ${item.tone === "serious" ? "serious" : "progress"}"><span class="dot"></span><span class="cat">${item.category}</span><span>${escapeHtml(item.text || "暂无记录")}</span></div>`).join("")}</div>`;
}

function planStatusTone(status) {
  return { "进行中": "green", "已完成": "blue", "待开始": "amber" }[status] || "amber";
}

function renderPlanItemCard(item, editable) {
  const tone = planStatusTone(item.status);
  return `
    <article class="plan-card">
      <div>
        <div class="plan-meta"><span class="plan-months">${item.months}</span><span class="status ${tone}">${item.status}</span></div>
        <div class="plan-focus">${item.focus}</div>
        <p>${escapeHtml(item.goal)}</p>
      </div>
      ${editable ? `<div class="list-actions"><button class="button ghost" type="button" data-edit-plan="${item.id}">编辑</button></div>` : ""}
    </article>
  `;
}

function visibleTimelineLessons() {
  return state.lessons.filter((lesson) => ["recorded", "pending", "verified", "correction"].includes(lesson.status));
}

function renderToday() {
  const verified = state.lessons.filter((lesson) => lesson.status === "verified").length;
  const recorded = state.lessons.filter((lesson) => ["recorded", "pending"].includes(lesson.status)).length;
  const abcToday = state.abcEvents.length;
  return `
    ${pageHeader(`${state.child.alias}的今天`, `${state.child.grade} · ${new Date().toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "long" })}`)}
    <div class="summary-grid">
      <div class="summary" style="--accent:var(--green)"><span>校方已确认</span><strong>${verified}</strong></div>
      <div class="summary" style="--accent:var(--blue)"><span>已记录</span><strong>${recorded}</strong></div>
      <div class="summary" style="--accent:var(--amber)"><span>ABC 事件</span><strong>${abcToday}</strong></div>
      <div class="summary" style="--accent:var(--coral)"><span>待填写</span><strong>${state.lessons.filter((lesson) => ["draft", "correction"].includes(lesson.status)).length}</strong></div>
    </div>
    <div class="timeline">${visibleTimelineLessons().map(renderTimelineItem).join("")}</div>
  `;
}

function strategyList(lesson) {
  const items = lesson.strategies || [lesson.strategy].filter(Boolean);
  if (!items.length) return "";
  return `<div class="strategy-block"><div class="strategy-title">支持策略 · ${items.length} 条</div><ul class="strategy-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`;
}

function renderTimelineItem(lesson) {
  const [label, tone] = statusLabel(lesson.status);
  return `
    <article class="timeline-item">
      <div class="timeline-head"><span class="timeline-time">${lesson.time} · ${lesson.subject}</span><span class="status ${tone}">${label}</span></div>
      ${summaryDetail(lesson)}
      <div class="evidence">
        <img src="${lesson.media}" alt="${lesson.subject}匿名化演示记录" />
        <div>${strategyList(lesson)}</div>
      </div>
    </article>
  `;
}

function renderGrowth() {
  const graduation = state.graduation;
  return `
    ${pageHeader("成长档案", "月度变化、季度评估与毕业进度")}
    <section class="section" style="padding-top:0">
      <div class="section-title"><h2>本月变化</h2><span>较上月</span></div>
      <div class="chart">${state.child.monthlyProgress.map((item) => `
        <div class="bar-row"><span>${item.label}</span><div class="bar-track"><div class="bar-fill" style="width:${item.value}%"></div></div><strong>${item.delta}</strong></div>
      `).join("")}</div>
    </section>
    <section class="section">
      <div class="section-title"><h2>季度心理评估</h2><span>2026年第二季度</span></div>
      <div class="assessment-grid">
        <div class="assessment-copy"><h3>综合观察</h3><p>课堂参与稳定提升，主动求助开始出现；同伴活动中的等待能力仍需在不同场景继续泛化。</p></div>
        <div class="assessment-copy"><h3>下阶段重点</h3><p>逐步撤除课前提醒，在语文与综合实践课试行远距离支持，每两周由心理老师复盘一次。</p></div>
      </div>
    </section>
    <section class="section">
      <div class="section-title"><h2>学期干预计划</h2><span>${state.interventionPlan.term}</span></div>
      <div class="plan-list">${state.interventionPlan.items.map((item) => renderPlanItemCard(item, false)).join("")}</div>
    </section>
    ${ui.role === "parent" ? "" : `<section class="section">
      <div class="section-title"><h2>毕业进度</h2><span class="status ${graduation.status === 4 ? "green" : "amber"}">${graduationLabel(graduation.status)}</span></div>
      ${renderGraduationSteps(graduation.status)}
      ${graduation.status === 3 ? `<button class="button primary" type="button" data-grad-action="confirm">确认降级过渡</button>` : ""}
      ${graduation.status < 3 ? `<div class="notice">当前结果意向：${graduation.result}。完成专业审核后由家长最终确认。</div>` : ""}
      ${graduation.status === 4 ? `<div class="notice">该案例已完成四方确认并计入影子老师专业信用。</div>` : ""}
    </section>`}
  `;
}

function renderParentProfile() {
  return `
    ${pageHeader("我的", "小宇家长 · 已实名认证")}
    <div class="list">
      <article class="list-card"><div><h3>当前服务</h3><p>林晓雅 · 服务中</p></div><span class="status green">正常</span></article>
      <article class="list-card"><div><h3>隐私授权</h3><p>儿童档案、校内记录与专业评估授权</p></div><button class="button ghost" type="button" data-toast="演示版暂不接真实授权">查看</button></article>
      <article class="list-card"><div><h3>咨询申请</h3><p>已提交 ${state.consultedTeacherIds.length} 位老师咨询</p></div><span>›</span></article>
    </div>
  `;
}

function todayCloseRecord() {
  const today = new Date().toISOString().slice(0, 10);
  return state.dailyRecords.find((record) => record.date === today) || null;
}

function renderSchedule() {
  const recorded = state.lessons.filter((lesson) => ["recorded", "pending", "verified"].includes(lesson.status)).length;
  const draft = state.lessons.filter((lesson) => ["draft", "correction"].includes(lesson.status)).length;
  const abcToday = state.abcEvents.length;
  const closeRecord = todayCloseRecord();
  const closeDone = closeRecord ? closeRecord.goalChecks.filter((check) => check.done).length : 0;
  const closeCard = `
    <article class="close-card">
      <div class="close-head">
        <div><h3>放学小结</h3><p>${closeRecord ? `今日已完成小结 · 目标达成 ${closeDone}/${closeRecord.goalChecks.length}${closeRecord.confusions ? " · 困惑待跟进" : ""}` : "目标打卡 + 辅助六档 + 亮点困惑 + 明日计划"}</p></div>
        <button class="button ${closeRecord ? "ghost" : "primary"}" type="button" data-daily-close>${closeRecord ? "查看 / 修改" : "开始小结 · 90 秒"}</button>
      </div>
      <p class="close-foot">已记录 ${recorded} 节课 · ABC 事件 ${abcToday} 条 · 三问分数自动聚合各课打分，无需重复填</p>
    </article>`;
  return `
    ${pageHeader("今日课表", `${state.child.alias} · 课间 10 秒打分，放学 90 秒小结`)}
    ${closeCard}
    <div class="summary-grid">
      <div class="summary"><span>已记录</span><strong>${recorded}</strong></div>
      <div class="summary" style="--accent:var(--amber)"><span>待填写</span><strong>${draft}</strong></div>
      <div class="summary" style="--accent:var(--blue)"><span>ABC 事件</span><strong>${abcToday}</strong></div>
      <div class="summary" style="--accent:var(--coral)"><span>小结</span><strong>${closeRecord ? "已完成" : "待进行"}</strong></div>
    </div>
    <p class="dbr-legend">打分说明：学业投入 / 社交规则 / 情绪调节，分高=表现好；<b>干扰行为，分高=需关注</b>。区间：1-3 低 · 4-7 中 · 8-10 高。</p>
    <p class="src-note">${SOURCE_NOTES.dbr}</p>
    <p class="src-note">${SOURCE_NOTES.abc}</p>
    <div class="list">${state.lessons.map((lesson) => {
      const [label, tone] = statusLabel(lesson.status);
      const adjusted = lesson.subject !== lesson.originalSubject;
      return `<article class="list-card"><div><div class="list-card-meta"><span>${lesson.time}</span><span class="status ${tone}">${label}</span>${adjusted ? `<span class="status blue">已调整</span>` : ""}</div><div class="course-title-row"><h3>${escapeHtml(lesson.subject)}</h3><button class="rename-link" type="button" data-rename="${lesson.id}">改课名</button></div>${adjusted ? `<p class="rename-note">原课：${escapeHtml(lesson.originalSubject)} · ${escapeHtml(lesson.subjectNote || "当日调整")}</p>` : ""}${summaryCompact(lesson)}</div><div class="list-actions"><button class="button primary" type="button" data-dbr="${lesson.id}">${hasDbr(lesson) ? "修改打分" : "10 秒打分"}</button><button class="button ghost" type="button" data-abc="${lesson.id}">记 ABC 事件</button></div></article>`;
    }).join("")}</div>
  `;
}

function renderTimetable() {
  const tt = state.timetable;
  const plan = state.interventionPlan;
  const totalLessons = tt.rows.reduce((sum, row) => sum + row.subjects.length, 0);
  return `
    ${pageHeader("学期课表", `${tt.term} · 一学期一更新`, `<button class="button primary" type="button" data-upload-timetable>上传更新课表</button>`)}
    <div class="notice" style="margin-bottom:18px">上传课程表照片后，系统会自动识别并数字化为课表；本学期内可替换更新，历史版本只读留存。</div>
    <div class="timetable-wrap">
      <table class="timetable">
        <thead>
          <tr><th>时间</th>${tt.days.map((day) => `<th>${day}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${tt.rows.map((row) => `<tr><td class="time">${row.time}</td>${row.subjects.map((subject) => `<td class="subject">${escapeHtml(subject)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p class="table-foot">已数字化 ${totalLessons} 节课 · 最近更新 ${tt.updatedAt}</p>
    <section class="section">
      <div class="section-title"><h2>学期干预计划</h2><span>${plan.term} · 家长端同步</span></div>
      <div class="plan-list">${plan.items.map((item) => renderPlanItemCard(item, true)).join("")}</div>
      <div style="margin-top:14px"><button class="button secondary" type="button" data-add-plan>新增阶段</button></div>
      <p class="table-foot">计划最近更新 ${plan.updatedAt}</p>
    </section>
  `;
}

function renderChildren() {
  return `
    ${pageHeader("服务儿童", "仅展示已授权且与当前老师建立服务关系的档案")}
    <article class="list-card"><div><div class="list-card-meta"><span class="status green">服务中</span><span>${state.child.grade}</span></div><h3>${state.child.alias}</h3><p>今日 4 节任务 · 本月校方核验率 98%</p></div><button class="button ghost" type="button" data-role-jump="parent:today">查看时间轴</button></article>
  `;
}

function renderCredit() {
  const teacher = state.teachers.find((item) => item.id === state.child.teacherId);
  const g = state.graduation;
  return `
    ${pageHeader("我的专业信用", "经平台、校方与服务家庭核验的专业记录")}
    <div class="metrics">
      <div class="metric"><strong>${teacher.graduationCount}</strong><span>毕业案例</span></div>
      <div class="metric"><strong>${teacher.supervisionHours}h</strong><span>督导时长</span></div>
      <div class="metric"><strong>${teacher.verifyRate}%</strong><span>校方核验率</span></div>
      <div class="metric"><strong>已认证</strong><span>平台认证状态</span></div>
    </div>
    <section class="section">
      <div class="section-title"><h2>${state.child.alias}毕业提名</h2><span class="status ${g.status === 4 ? "green" : "amber"}">${graduationLabel(g.status)}</span></div>
      ${renderGraduationSteps(g.status)}
      ${g.status === 0 ? `<button class="button primary" type="button" data-grad-action="nominate">毕业提名</button>` : ""}
      ${g.status > 0 && g.status < 4 ? `<div class="notice">提名已提交，后续结果只有完成心理观察、督导审核和家长确认后才计入专业信用。</div>` : ""}
    </section>
  `;
}

function renderSupervision() {
  return `
    ${pageHeader("在线督导", "AI 助理即时响应 · 人类督导预约保留")}
    <article class="ai-card">
      <div class="ai-head"><span class="ai-dot" aria-hidden="true"></span><div><h3>AI 督导助理</h3><p>7×24 即时响应 · 基于知识库与你的每日记录 · 建议引用具体记录，不泛泛而谈</p></div></div>
      <div class="list-actions"><button class="button primary" type="button" data-ai-chat>开始对话</button></div>
      <p class="ai-foot">危机情况（自伤 / 攻击 / 走失）会自动提示转人工与线下支持。</p>
    </article>
    <section class="section">
      <div class="section-title"><h2>人类督导预约</h2><span>累计 126 小时 · 本月 4 小时</span></div>
      <div class="list">
        <article class="list-card"><div><div class="list-card-meta"><span>6月28日 19:30</span><span class="status green">已完成</span></div><h3>支持逐步撤离策略</h3><p>督导：苏老师 · 60分钟 · 记录已归档</p></div><button class="button ghost" type="button" data-toast="已打开督导记录摘要">查看记录</button></article>
        <article class="list-card"><div><div class="list-card-meta"><span>7月20日 19:30</span><span class="status amber">已预约</span></div><h3>同伴互动泛化</h3><p>督导：苏老师 · 60分钟</p></div><button class="button ghost" type="button" data-toast="演示预约不可变更">管理预约</button></article>
      </div>
    </section>
  `;
}

function pendingLessons() {
  return state.lessons.filter((lesson) => ["recorded", "pending"].includes(lesson.status));
}

function renderReview() {
  const lessons = pendingLessons();
  return `
    ${pageHeader("待我确认", `王老师 · 今日 ${lessons.length} 条待确认`)}
    ${lessons.length ? `<div class="list">${lessons.map((lesson) => `<article class="list-card"><div><div class="list-card-meta"><span>${lesson.time} · ${escapeHtml(lesson.subject)}</span><span class="status amber">待确认</span></div><h3>${state.child.alias}的课堂反馈</h3>${summaryCompact(lesson)}</div><button class="button primary" type="button" data-review="${lesson.id}">确认反馈</button></article>`).join("")}</div>` : `<div class="empty"><div class="empty-mark">✓</div>今日反馈已全部确认</div>`}
  `;
}

function renderReviewHistory() {
  const lessons = state.lessons.filter((lesson) => lesson.status === "verified");
  return `
    ${pageHeader("确认记录", `共 ${lessons.length} 条已确认反馈`)}
    <div class="list">${lessons.map((lesson) => `<article class="list-card"><div><div class="list-card-meta"><span>${lesson.time} · ${lesson.subject}</span><span class="status green">已确认</span></div><h3>${state.child.alias}</h3><p>${escapeHtml(lesson.schoolComment || "确认属实")}</p></div><span>${lesson.updatedAt}</span></article>`).join("")}</div>
  `;
}


function renderGraduationSteps(status) {
  const labels = ["影子老师提名", "心理老师观察", "平台督导审核", "家长确认"];
  return `<div class="steps">${labels.map((label, index) => {
    const done = status > index;
    const current = status === index;
    return `<div class="step ${done ? "done" : current ? "current" : ""}"><span class="step-number">${done ? "✓" : index + 1}</span><strong>${label}</strong><small>${done ? "已完成" : current ? "当前环节" : "等待中"}</small></div>`;
  }).join("")}</div>`;
}


function renderModal() {
  if (!ui.modal) return "";
  if (ui.modal.type === "feedback") return renderFeedbackModal(ui.modal.lessonId);
  if (ui.modal.type === "dbr") return renderDbrModal(ui.modal.lessonId);
  if (ui.modal.type === "abc") return renderAbcModal(ui.modal.lessonId);
  if (ui.modal.type === "daily-close") return renderDailyCloseModal();
  if (ui.modal.type === "ai-chat") return renderAiChatModal();
  if (ui.modal.type === "review") return renderReviewModal(ui.modal.lessonId);
  if (ui.modal.type === "rename") return renderRenameModal(ui.modal.lessonId);
  if (ui.modal.type === "timetable-upload") return renderTimetableUploadModal();
  if (ui.modal.type === "plan-edit") return renderPlanEditModal(ui.modal.itemId);
  if (ui.modal.type === "graduation") return renderGraduationModal(ui.modal.action);
  if (ui.modal.type === "experience-feedback") return renderExperienceFeedbackModal();
  if (ui.modal.type === "confirm-reset") return renderResetModal();
  return "";
}

function modalFrame(title, body, actions) {
  return `<div class="modal-backdrop" data-modal-backdrop><section class="modal" role="dialog" aria-modal="true" aria-label="${title}"><div class="modal-head"><h2>${title}</h2><button class="icon-button" type="button" data-close-modal aria-label="关闭">×</button></div>${body}${actions}</section></div>`;
}

function renderSummaryFormFields(lesson) {
  return SUMMARY_CATEGORIES.map((category, index) => {
    const item = (lesson.summary || []).find((entry) => entry.category === category) || { tone: "progress", text: "" };
    const serious = item.tone === "serious";
    return `
      <div class="field full summary-field">
        <div class="summary-field-head">
          <label>${category}</label>
          <div class="radio-row">
            <label class="radio"><input type="radio" name="summary-tone-${index}" value="progress" ${serious ? "" : "checked"} /> 进步</label>
            <label class="radio"><input type="radio" name="summary-tone-${index}" value="serious" ${serious ? "checked" : ""} /> 需关注</label>
          </div>
        </div>
        <textarea class="textarea" name="summary-text-${index}" placeholder="记录可观察到的${category}表现">${escapeHtml(item.text)}</textarea>
      </div>`;
  }).join("");
}

function renderDbrModal(lessonId) {
  const lesson = state.lessons.find((item) => item.id === lessonId);
  if (!lesson) return "";
  const existing = hasDbr(lesson);
  const sliders = DBR_DIMENSIONS.map((dim) => {
    const current = lesson.dbr ? lesson.dbr[dim.key] : null;
    const value = current !== null && current !== undefined ? current : (dim.optional ? "" : 5);
    const dirty = current !== null && current !== undefined ? ' data-dirty="1"' : "";
    const dir = dim.good === "high" ? "分高=表现好" : "分高=需关注";
    return `
      <div class="slider-row">
        <div class="slider-label"><strong>${dim.label}${dim.optional ? "（可选）" : ""}</strong><span class="slider-dir">${dir}</span></div>
        <p class="slider-desc">${dim.desc}</p>
        <div class="slider-line"><input type="range" min="0" max="10" step="1" name="${dim.key}" value="${value}"${dirty} ${dim.optional ? "" : "required"} /><output class="slider-value">${value === "" ? "—" : value}</output></div>
        <p class="slider-anchor">0=完全没有 ｜ <b>1-3 低 · 4-7 中 · 8-10 高</b> ｜ 10=${dim.high}</p>
      </div>`;
  }).join("");
  const submitLabel = existing ? "保存打分" : "拉动 3 个滑条后保存";
  const body = `<form id="dbr-form"><div class="modal-body"><div class="form-grid">
    <div class="field"><label>课程</label><input class="input" value="${escapeHtml(lesson.subject)}" disabled /></div>
    <div class="field"><label>时间</label><input class="input" value="${lesson.time}" disabled /></div>
    <div class="field full">${sliders}</div>
    <div class="field full"><label>高频行为计数（每节数次的小动作，用计数不用 ABC）</label><div class="stepper"><button class="button ghost" type="button" data-step="-1">−</button><output id="freq-value">${lesson.frequencyCount || 0}</output><button class="button ghost" type="button" data-step="1">＋</button></div></div>
    <div class="field full"><label for="dbr-note">一句话备注（选填）</label><input class="input" id="dbr-note" name="note" value="${escapeHtml(lesson.note || "")}" placeholder="例如：换同桌后前 10 分钟坐不住" /></div>
    <div class="field full"><button class="link-button" type="button" data-switch-abc>发生了具体事件？记一条 ABC（30 秒）→</button></div>
    <div class="field full"><p class="src-note">${SOURCE_NOTES.dbr}</p></div>
  </div></div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit" id="dbr-submit" ${existing ? "" : "disabled"}>${submitLabel}</button></div></form>`;
  return modalFrame("下课打分 · 约 10 秒", body, "凭整节课的总体印象打分，没有标准答案；每个必填滑条都拉动后才能保存。");
}

function renderAbcModal(lessonId) {
  const lesson = state.lessons.find((item) => item.id === lessonId);
  if (!lesson) return "";
  const chips = (list, name) => list.map((item) => `<label class="chip"><input type="radio" name="${name}" value="${escapeHtml(item)}" /> ${escapeHtml(item)}</label>`).join("");
  const body = `<form id="abc-form"><div class="modal-body">
    <div class="notice">事件自动挂到：${escapeHtml(lesson.subject)} · ${lesson.time}。高频小动作请回打分页用计数器，不填 ABC。</div>
    <fieldset class="fieldset"><legend>前因 A（刚发生了什么）</legend><div class="chip-group">${chips(ANTECEDENTS, "antecedent")}</div><textarea class="textarea other-text" name="antecedentOther" placeholder="选「其他」时写一句话"></textarea></fieldset>
    <div class="field full" style="margin-top:12px"><label for="abc-behavior">行为 B（可观察的动作，一句话）</label><input class="input" id="abc-behavior" name="behavior" required placeholder="例如：拍桌并离开座位" /></div>
    <fieldset class="fieldset" style="margin-top:12px"><legend>后果 C（之后发生了什么）</legend><div class="chip-group">${chips(CONSEQUENCES, "consequence")}</div><textarea class="textarea other-text" name="consequenceOther" placeholder="选「其他」时写一句话"></textarea></fieldset>
    <fieldset class="fieldset" style="margin-top:12px"><legend>强度</legend><div class="chip-group">${INTENSITIES.map((item, index) => `<label class="chip"><input type="radio" name="intensity" value="${item}" ${index === 1 ? "checked" : ""} /> ${item}</label>`).join("")}</div></fieldset>
    <p class="src-note" style="margin-top:10px">${SOURCE_NOTES.abc}</p>
  </div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">保存事件</button></div></form>`;
  return modalFrame("记录 ABC 事件 · 约 30 秒", body, "");
}

function renderDailyCloseModal() {
  const existing = todayCloseRecord();
  const recorded = state.lessons.filter((lesson) => hasDbr(lesson));
  const avg = (key) => {
    const values = recorded.map((lesson) => lesson.dbr[key]).filter((value) => value !== null && value !== undefined);
    return values.length ? Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 10) / 10 : "—";
  };
  const aggregate = DBR_DIMENSIONS.map((dim) => `<div class="agg-item"><span>${dim.label}</span><strong>${avg(dim.key)}</strong></div>`).join("");
  const goalChecks = state.goals.filter((goal) => goal.active).map((goal) => {
    const check = existing ? existing.goalChecks.find((entry) => entry.goalId === goal.id) : null;
    return `
      <div class="goal-row">
        <span>${escapeHtml(goal.text)}</span>
        <div class="radio-row">
          <label class="radio"><input type="radio" name="goal-${goal.id}" value="done" ${check && check.done ? "checked" : ""} /> ✓ 达成</label>
          <label class="radio"><input type="radio" name="goal-${goal.id}" value="miss" ${check && !check.done ? "checked" : ""} /> ✗ 未达成</label>
        </div>
      </div>`;
  }).join("");
  const promptRow = state.goals.filter((goal) => goal.active).map((goal) => {
    const level = existing ? existing.promptLevels[goal.id] : "";
    return `<div class="goal-row"><span>${escapeHtml(goal.text)}</span><select class="select" name="prompt-${goal.id}">${PROMPT_LEVELS.map((item) => `<option value="${item.code}" ${level === item.code ? "selected" : ""}>${item.short}（${item.code}）</option>`).join("")}</select></div>`;
  }).join("");
  const body = `<form id="close-form"><div class="modal-body">
    <fieldset class="fieldset"><legend>今日三问（自动聚合 ${recorded.length} 节课打分）</legend><div class="agg-grid">${aggregate}</div><p class="agg-foot">无需重复填写；某课打分有偏差，回课表修改即自动更新。</p><p class="src-note">${SOURCE_NOTES.daily}</p></fieldset>
    <fieldset class="fieldset" style="margin-top:12px"><legend>目标打卡（正向目标，回家给奖励）</legend>${goalChecks}</fieldset>
    <fieldset class="fieldset" style="margin-top:12px"><legend>今日主要辅助层级（撤辅进度）</legend>${promptRow}<p class="agg-foot">参考规则：同一目标连续 2 次达成自动降一档辅助，连续 2 次未达成升一档。</p></fieldset>
    <div class="field full" style="margin-top:12px"><label for="close-highlights">今日亮点</label><textarea class="textarea" id="close-highlights" name="highlights" placeholder="值得记录的进步瞬间">${escapeHtml(existing ? existing.highlights : "")}</textarea></div>
    <div class="field full"><label for="close-confusions">今日困惑</label><textarea class="textarea" id="close-confusions" name="confusions" placeholder="写下今天没搞定的问题，可一键问 AI 助教">${escapeHtml(existing ? existing.confusions : "")}</textarea></div>
    <div class="field full"><button class="link-button" type="button" data-ask-ai>把困惑交给 AI 督导助理 →</button></div>
    <div class="field full"><label for="close-plan">明日计划（一句话）</label><input class="input" id="close-plan" name="tomorrowPlan" value="${escapeHtml(existing ? existing.tomorrowPlan : "")}" placeholder="例如：数学课前先预告任务步骤" /></div>
  </div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">完成小结</button></div></form>`;
  return modalFrame("放学小结 · 约 90 秒", body, "");
}

function aiContextSummary() {
  const lines = state.lessons.filter((lesson) => hasDbr(lesson)).map((lesson) => `${lesson.time} ${lesson.subject}：学业投入 ${lesson.dbr.academicEngagement} / 干扰 ${lesson.dbr.disruptive} / 社交规则 ${lesson.dbr.socialRule}${lesson.note ? `（${lesson.note}）` : ""}`);
  const abcLines = state.abcEvents.map((event) => `${event.subject}：前因「${event.antecedent}」→ 行为「${event.behavior}」→ 后果「${event.consequence}」（强度 ${event.intensity}）`);
  return { lines, abcLines };
}

function aiInitialMessage() {
  const { lines, abcLines } = aiContextSummary();
  const close = todayCloseRecord();
  const confusion = close && close.confusions ? close.confusions : "";
  const text = confusion
    ? `看到你今天的困惑：「${confusion}」。结合今天的记录——\n${lines.join("；\n")}。${abcLines.length ? `\nABC 事件：${abcLines.join("；")}。` : ""}\n建议：明天同一情境前先做 2 分钟预告，把任务拆成两段，第一段完成立即给具体表扬。观察指标：转换后 3 分钟内回到座位即算成功。连续记录 3 天后再判断模式。`
    : `今天已有 ${lines.length} 节课打分、${abcLines.length} 条 ABC 事件。${abcLines.length ? `值得注意的是「${abcLines[0]}」——前因指向等待与转换，建议下次提前 2 分钟预告转换，并准备轮次卡。` : "暂无 ABC 事件记录。"}\n你可以直接问我今天遇到的任何问题。`;
  return { role: "ai", text };
}

function aiReply(question) {
  if (CRISIS_KEYWORDS.some((word) => question.includes(word))) {
    return { role: "ai", crisis: true, text: "你描述的情况属于危机行为（自伤/攻击/走失类），已超出在线建议的边界：请立即确保孩子及周围人员安全，并第一时间联系你的机构督导或线下专业人员处理。处理完成后回来记录事件，我会帮你整理 ABC 与后续预防。" };
  }
  const { lines, abcLines } = aiContextSummary();
  const weak = state.lessons.filter((lesson) => hasDbr(lesson) && lesson.dbr.disruptive >= 5).map((lesson) => lesson.subject);
  const close = todayCloseRecord();
  const evidence = [lines[0], abcLines[0], close ? `昨日目标达成 ${close.goalChecks.filter((check) => check.done).length}/${close.goalChecks.length}` : ""].filter(Boolean).join("；");
  return { role: "ai", text: `基于你的记录（${evidence || "暂无记录"}）：\n建议步骤：1）相同情境出现前 2 分钟预告；2）把任务拆成两段，第一段完成立即给具体表扬；3）在放学小结里记录辅助层级，我帮你追踪褪降进度。观察指标：提示后 3 分钟内回到任务。目前样本还少，连续记 3 天后再下结论。${weak.length ? `今日「干扰行为」偏高的课：${weak.join("、")}。` : ""}` };
}

function renderAiChatModal() {
  if (!ui.aiMessages || !ui.aiMessages.length) ui.aiMessages = [aiInitialMessage()];
  const messages = ui.aiMessages.map((message) => `<div class="chat-row ${message.role}">${message.crisis ? `<div class="crisis-card">⚠️ 危机行为提醒 · 建议立即转人工</div>` : ""}<div class="chat-bubble ${message.role}">${escapeHtml(message.text).replaceAll("\n", "<br />")}</div></div>`).join("");
  const body = `<div class="modal-body chat-body"><div class="chat-list">${messages}</div></div><form id="ai-chat-form" class="chat-input-row"><input class="input" name="question" required placeholder="输入问题，AI 会引用你的记录回答" /><button class="button primary" type="submit">发送</button></form>`;
  return modalFrame("AI 督导助理 · 基于你的记录", body, "");
}

function renderReviewModal(lessonId) {
  const lesson = state.lessons.find((item) => item.id === lessonId);
  if (!lesson) return "";
  const body = `<form id="review-form"><div class="modal-body">
    <div class="review-subject">${lesson.time} · ${escapeHtml(lesson.subject)}</div>
    ${summaryDetail(lesson)}
    <div class="form-grid" style="margin-top:18px">
      <fieldset class="fieldset field full"><legend>是否属实</legend><div class="radio-row"><label class="radio"><input type="radio" name="truth" value="verified" checked /> 属实</label><label class="radio"><input type="radio" name="truth" value="correction" /> 需要修正</label></div></fieldset>
      <div class="field full"><label for="school-comment">补充评语（选填）</label><textarea class="textarea" id="school-comment" name="comment" placeholder="语音评语在演示版中以文字模拟"></textarea></div>
    </div>
  </div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">提交确认</button></div></form>`;
  return modalFrame("确认课堂反馈", body, "");
}

function renderRenameModal(lessonId) {
  const lesson = state.lessons.find((item) => item.id === lessonId);
  if (!lesson) return "";
  const body = `<form id="rename-form"><div class="modal-body"><div class="form-grid">
    <div class="field"><label for="rename-original">原课程</label><input class="input" id="rename-original" value="${escapeHtml(lesson.originalSubject)}" disabled /></div>
    <div class="field"><label for="rename-subject">修改为</label><input class="input" id="rename-subject" name="subject" value="${escapeHtml(lesson.subject)}" required placeholder="例如：语文课" /></div>
    <div class="field full"><label for="rename-note">调整原因（选填）</label><textarea class="textarea" id="rename-note" name="note" placeholder="例如：今天下雨，体育课改为语文课">${escapeHtml(lesson.subjectNote)}</textarea></div>
    <div class="field full"><div class="notice">仅修改当天的课程名称，不影响学期课表，也不影响已提交的校方确认记录。</div></div>
  </div></div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">保存课名</button></div></form>`;
  return modalFrame("修改当日课程名称", body, "");
}

function renderTimetableUploadModal() {
  const body = `<form id="timetable-upload-form"><div class="modal-body"><div class="form-grid">
    <div class="field full"><label>课程表照片</label><div class="upload-mock">演示版模拟上传课程表图片<br />点击下方按钮将自动识别并数字化</div></div>
    <div class="field full"><div class="notice">识别后系统会按「星期 × 节次」自动生成数字化课表，并作为本学期唯一有效课表保存。</div></div>
  </div></div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">开始识别并数字化</button></div></form>`;
  return modalFrame("上传并数字化课程表", body, "");
}

function renderPlanEditModal(itemId) {
  const plan = state.interventionPlan;
  const item = plan.items.find((entry) => entry.id === itemId) || { months: "", focus: "", goal: "", status: "待开始" };
  const statuses = ["待开始", "进行中", "已完成"];
  const body = `<form id="plan-edit-form"><div class="modal-body"><div class="form-grid">
    <div class="field"><label for="plan-months">月份</label><input class="input" id="plan-months" name="months" value="${escapeHtml(item.months)}" required placeholder="例如：9月-10月" /></div>
    <div class="field"><label for="plan-status">状态</label><select class="select" id="plan-status" name="status">${statuses.map((status) => `<option value="${status}" ${item.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></div>
    <div class="field full"><label for="plan-focus">干预重点</label><input class="input" id="plan-focus" name="focus" value="${escapeHtml(item.focus)}" required placeholder="例如：社交问题" /></div>
    <div class="field full"><label for="plan-goal">阶段目标</label><textarea class="textarea" id="plan-goal" name="goal" required placeholder="描述本阶段的具体干预目标">${escapeHtml(item.goal)}</textarea></div>
  </div></div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">保存阶段</button></div></form>`;
  return modalFrame(itemId === "new" ? "新增干预阶段" : "编辑干预阶段", body, "");
}

function renderGraduationModal(action) {
  const config = {
    nominate: { title: "发起毕业提名", label: "提名依据", placeholder: "说明儿童已达到降级过渡条件", button: "提交提名" },
    observe: { title: "提交心理观察", label: "观察结论", placeholder: "记录跨场景观察和量表结果", button: "提交观察" },
    approve: { title: "平台督导审核", label: "审核意见", placeholder: "说明证据完整性与支持撤离建议", button: "审核通过" },
    confirm: { title: "家长确认毕业结果", label: "家长意见", placeholder: "可补充家庭场景中的变化", button: "确认降级过渡" }
  }[action];
  if (!config) return "";
  const body = `<form id="graduation-form"><div class="modal-body"><div class="field"><label for="graduation-note">${config.label}</label><textarea class="textarea" id="graduation-note" name="note" required placeholder="${config.placeholder}"></textarea></div></div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">${config.button}</button></div></form>`;
  return modalFrame(config.title, body, "");
}

function renderResetModal() {
  const body = `<div class="modal-body"><p style="margin:0;line-height:1.7">老师反馈、校内核验、毕业认证和咨询状态都会恢复到初始演示数据。</p></div>`;
  const actions = `<div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button danger" type="button" data-confirm-reset>确认重置</button></div>`;
  return modalFrame("重置演示数据", body, actions);
}

function currentPageLabel() {
  if (ui.teacherId) return "老师详情";
  return roleConfig[ui.role].nav.find((item) => item.id === ui.page)?.label || ui.page;
}

function renderExperienceFeedbackModal() {
  const role = roleConfig[ui.role];
  const body = `<form id="experience-feedback-form"><div class="modal-body"><div class="form-grid">
    <div class="field"><label for="feedback-role">体验角色</label><input class="input" id="feedback-role" value="${role.label}" disabled /></div>
    <div class="field"><label for="feedback-page">当前页面</label><input class="input" id="feedback-page" value="${currentPageLabel()}" disabled /></div>
    <div class="field full"><label for="experience-category">反馈类型</label><select class="select" id="experience-category" name="category" required><option value="操作困难">操作困难</option><option value="信息不清楚">信息不清楚</option><option value="缺少内容">缺少内容</option><option value="业务规则问题">业务规则问题</option><option value="其他建议">其他建议</option></select></div>
    <fieldset class="fieldset field full"><legend>影响程度</legend><div class="radio-row"><label class="radio"><input type="radio" name="severity" value="阻塞" /> 无法继续</label><label class="radio"><input type="radio" name="severity" value="影响" checked /> 影响使用</label><label class="radio"><input type="radio" name="severity" value="轻微" /> 轻微问题</label></div></fieldset>
    <div class="field full"><label for="experience-details">问题或建议</label><textarea class="textarea" id="experience-details" name="details" required placeholder="请描述刚才发生了什么"></textarea></div>
    <div class="field full"><label for="experience-expectation">期望结果（选填）</label><textarea class="textarea" id="experience-expectation" name="expectation" placeholder="你希望它怎样工作"></textarea></div>
  </div></div><div class="modal-actions">${experienceFeedback.length ? `<button class="button ghost" type="button" data-export-feedback>导出已有反馈（${experienceFeedback.length}）</button>` : ""}<button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">保存反馈</button></div></form>`;
  return modalFrame("提交体验反馈", body, "");
}

function exportExperienceFeedback() {
  const payload = {
    exportedAt: new Date().toISOString(),
    version: "demo-v1",
    count: experienceFeedback.length,
    items: experienceFeedback
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `影子老师演示版反馈-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, [data-modal-backdrop]");
  if (!target) return;

  if (target.matches("[data-nav]")) {
    ui.page = target.dataset.nav;
    ui.teacherId = null;
    render();
    return;
  }
  if (target.matches("[data-filter]")) {
    ui.filter = target.dataset.filter;
    render();
    return;
  }
  if (target.matches("[data-open-teacher]")) {
    ui.teacherId = target.dataset.openTeacher;
    window.scrollTo({ top: 0 });
    render();
    return;
  }
  if (target.matches("[data-back]")) {
    ui.teacherId = null;
    render();
    return;
  }
  if (target.matches("[data-consult]")) {
    state.consultedTeacherIds.push(target.dataset.consult);
    saveAndRender("咨询申请已提交，演示版不产生真实订单");
    return;
  }
  if (target.matches("[data-feedback]")) {
    ui.modal = { type: "feedback", lessonId: target.dataset.feedback };
    render();
    return;
  }
  if (target.matches("[data-dbr]")) {
    ui.modal = { type: "dbr", lessonId: target.dataset.dbr };
    render();
    return;
  }
  if (target.matches("[data-abc]")) {
    ui.modal = { type: "abc", lessonId: target.dataset.abc };
    render();
    return;
  }
  if (target.matches("[data-switch-abc]")) {
    ui.modal = { type: "abc", lessonId: ui.modal.lessonId };
    render();
    return;
  }
  if (target.matches("[data-step]")) {
    const output = document.querySelector("#freq-value");
    if (output) output.textContent = Math.max(0, (parseInt(output.textContent, 10) || 0) + Number(target.dataset.step));
    return;
  }
  if (target.matches("[data-daily-close]")) {
    ui.modal = { type: "daily-close" };
    render();
    return;
  }
  if (target.matches("[data-ai-chat]")) {
    ui.aiMessages = [];
    ui.modal = { type: "ai-chat" };
    render();
    return;
  }
  if (target.matches("[data-ask-ai]")) {
    const textarea = document.querySelector("#close-confusions");
    const confusion = textarea ? textarea.value.trim() : "";
    ui.aiMessages = confusion ? [{ role: "user", text: confusion }, aiReply(confusion)] : [];
    ui.modal = { type: "ai-chat" };
    render();
    return;
  }
  if (target.matches("[data-review]")) {
    ui.modal = { type: "review", lessonId: target.dataset.review };
    render();
    return;
  }
  if (target.matches("[data-rename]")) {
    ui.modal = { type: "rename", lessonId: target.dataset.rename };
    render();
    return;
  }
  if (target.matches("[data-upload-timetable]")) {
    ui.modal = { type: "timetable-upload" };
    render();
    return;
  }
  if (target.matches("[data-add-plan]")) {
    ui.modal = { type: "plan-edit", itemId: "new" };
    render();
    return;
  }
  if (target.matches("[data-edit-plan]")) {
    ui.modal = { type: "plan-edit", itemId: target.dataset.editPlan };
    render();
    return;
  }
  if (target.matches("[data-grad-action]")) {
    ui.modal = { type: "graduation", action: target.dataset.gradAction };
    render();
    return;
  }
  if (target.matches("[data-experience-feedback]")) {
    ui.modal = { type: "experience-feedback" };
    render();
    return;
  }
  if (target.matches("[data-export-feedback]")) {
    exportExperienceFeedback();
    showToast(`已导出 ${experienceFeedback.length} 条反馈`);
    return;
  }
  if (target.matches("[data-close-modal]") || target.matches("[data-modal-backdrop]") && target === event.target) {
    ui.modal = null;
    render();
    return;
  }
  if (target.matches("[data-reset]")) {
    ui.modal = { type: "confirm-reset" };
    render();
    return;
  }
  if (target.matches("[data-confirm-reset]")) {
    state = clone(DEFAULT_STATE);
    ui.modal = null;
    persist();
    showToast("演示数据已重置");
    return;
  }
  if (target.matches("[data-auth-school]")) {
    ui.auth.school = true;
    saveAuth();
    showToast("已授权，正在加载内容");
    render();
    return;
  }
  if (target.matches("[data-auth-shadow]")) {
    ui.auth.shadow = true;
    saveAuth();
    showToast("已授权，正在加载内容");
    render();
    return;
  }
  if (target.matches("[data-toast]")) {
    showToast(target.dataset.toast);
    return;
  }
  if (target.matches("[data-role-jump]")) {
    const [role, page] = target.dataset.roleJump.split(":");
    ui.role = role;
    ui.page = page;
    ui.teacherId = null;
    render();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("#role-select")) {
    ui.role = event.target.value;
    ui.page = roleConfig[ui.role].defaultPage;
    ui.teacherId = null;
    ui.modal = null;
    render();
  }
  if (event.target.matches("#teacher-sort")) {
    ui.sort = event.target.value;
    render();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("#teacher-search")) {
    ui.query = event.target.value;
    const cursor = event.target.selectionStart;
    render();
    const input = document.querySelector("#teacher-search");
    input.focus();
    input.setSelectionRange(cursor, cursor);
  }
  if (event.target.matches('#dbr-form input[type="range"]')) {
    const output = event.target.parentElement.querySelector(".slider-value");
    if (output) output.textContent = event.target.value;
    event.target.dataset.dirty = "1";
    const requiredSliders = [...document.querySelectorAll('#dbr-form input[type="range"][required]')];
    const btn = document.querySelector("#dbr-submit");
    if (btn && requiredSliders.length && requiredSliders.every((el) => el.dataset.dirty)) {
      btn.disabled = false;
      btn.textContent = "保存打分";
    }
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.matches("#experience-feedback-form")) {
    const form = new FormData(event.target);
    experienceFeedback.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${experienceFeedback.length + 1}`,
      createdAt: new Date().toISOString(),
      role: ui.role,
      roleLabel: roleConfig[ui.role].label,
      page: ui.teacherId ? "teacher-detail" : ui.page,
      pageLabel: currentPageLabel(),
      category: form.get("category"),
      severity: form.get("severity"),
      details: form.get("details").trim(),
      expectation: form.get("expectation").trim()
    });
    persistExperienceFeedback();
    ui.modal = null;
    showToast("体验反馈已保存");
    return;
  }
  if (event.target.matches("#dbr-form")) {
    const requiredSliders = [...event.target.querySelectorAll('input[type="range"][required]')];
    if (!requiredSliders.every((el) => el.dataset.dirty)) {
      showToast("请先给 3 个必填项打分（拉动每个滑条）");
      return;
    }
    const lesson = state.lessons.find((item) => item.id === ui.modal.lessonId);
    const form = new FormData(event.target);
    lesson.dbr = {};
    DBR_DIMENSIONS.forEach((dim) => {
      const raw = form.get(dim.key);
      lesson.dbr[dim.key] = raw === null || raw === "" ? null : Number(raw);
    });
    const freqOutput = document.querySelector("#freq-value");
    lesson.frequencyCount = freqOutput ? parseInt(freqOutput.textContent, 10) || 0 : 0;
    lesson.note = (form.get("note") || "").trim();
    if (["draft", "correction"].includes(lesson.status)) lesson.status = "recorded";
    lesson.updatedAt = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
    ui.modal = null;
    saveAndRender(`已记录 · ${lesson.subject} 打分完成`);
    return;
  }
  if (event.target.matches("#abc-form")) {
    const lesson = state.lessons.find((item) => item.id === ui.modal.lessonId);
    const form = new FormData(event.target);
    const antecedent = form.get("antecedent");
    const consequence = form.get("consequence");
    if (!antecedent) {
      showToast("请选择前因 A");
      return;
    }
    if (!consequence) {
      showToast("请选择后果 C");
      return;
    }
    const otherText = [form.get("antecedentOther"), form.get("consequenceOther")].map((text) => (text || "").trim()).filter(Boolean).join(" / ");
    state.abcEvents.push({
      id: `abc-${Date.now()}`,
      lessonId: lesson.id,
      time: lesson.time,
      subject: lesson.subject,
      antecedent,
      behavior: form.get("behavior").trim(),
      consequence,
      intensity: form.get("intensity") || "中",
      otherText
    });
    ui.modal = null;
    saveAndRender(`ABC 事件已挂到「${lesson.subject}」`);
    return;
  }
  if (event.target.matches("#close-form")) {
    const form = new FormData(event.target);
    const today = new Date().toISOString().slice(0, 10);
    const activeGoals = state.goals.filter((goal) => goal.active);
    const record = {
      date: today,
      goalChecks: activeGoals.map((goal) => ({ goalId: goal.id, done: form.get(`goal-${goal.id}`) === "done" })),
      promptLevels: {},
      highlights: (form.get("highlights") || "").trim(),
      confusions: (form.get("confusions") || "").trim(),
      tomorrowPlan: (form.get("tomorrowPlan") || "").trim(),
      aiAsked: false
    };
    activeGoals.forEach((goal) => {
      record.promptLevels[goal.id] = form.get(`prompt-${goal.id}`) || "I";
    });
    const index = state.dailyRecords.findIndex((entry) => entry.date === today);
    if (index >= 0) state.dailyRecords[index] = record;
    else state.dailyRecords.push(record);
    ui.modal = null;
    saveAndRender("今日小结完成 · 明日计划已留存");
    return;
  }
  if (event.target.matches("#ai-chat-form")) {
    const form = new FormData(event.target);
    const question = (form.get("question") || "").trim();
    if (!question) return;
    ui.aiMessages.push({ role: "user", text: question });
    ui.aiMessages.push(aiReply(question));
    render();
    const list = document.querySelector(".chat-body");
    if (list) list.scrollTop = list.scrollHeight;
    return;
  }
  if (event.target.matches("#review-form")) {
    const lesson = state.lessons.find((item) => item.id === ui.modal.lessonId);
    const form = new FormData(event.target);
    lesson.status = form.get("truth");
    lesson.schoolComment = form.get("comment").trim() || (lesson.status === "verified" ? "确认记录属实。" : "请补充更具体的课堂行为描述。");
    lesson.updatedAt = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
    ui.modal = null;
    saveAndRender(lesson.status === "verified" ? "已确认，家长时间轴已更新" : "已退回影子老师修正");
    return;
  }
  if (event.target.matches("#rename-form")) {
    const lesson = state.lessons.find((item) => item.id === ui.modal.lessonId);
    const form = new FormData(event.target);
    const subject = form.get("subject").trim();
    const note = form.get("note").trim();
    if (!subject) return;
    if (!lesson.originalSubject) lesson.originalSubject = lesson.subject;
    lesson.subject = subject;
    lesson.subjectNote = note;
    ui.modal = null;
    saveAndRender(subject === lesson.originalSubject ? "课程名称已恢复" : "已更新当日课程名称");
    return;
  }
  if (event.target.matches("#timetable-upload-form")) {
    state.timetable.updatedAt = new Date().toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).replaceAll("/", "-");
    ui.modal = null;
    saveAndRender("课程表已自动识别并数字化");
    return;
  }
  if (event.target.matches("#plan-edit-form")) {
    const plan = state.interventionPlan;
    const form = new FormData(event.target);
    const itemId = ui.modal.itemId;
    const payload = {
      months: form.get("months").trim(),
      focus: form.get("focus").trim(),
      goal: form.get("goal").trim(),
      status: form.get("status")
    };
    if (itemId === "new") {
      plan.items.push({ id: `plan-${Date.now()}`, ...payload });
    } else {
      const item = plan.items.find((entry) => entry.id === itemId);
      if (item) Object.assign(item, payload);
    }
    plan.updatedAt = new Date().toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).replaceAll("/", "-");
    ui.modal = null;
    saveAndRender(itemId === "new" ? "已新增干预阶段" : "干预阶段已更新");
    return;
  }
  if (event.target.matches("#graduation-form")) {
    const action = ui.modal.action;
    const form = new FormData(event.target);
    const expected = { nominate: 0, observe: 1, approve: 2, confirm: 3 }[action];
    if (state.graduation.status !== expected) {
      ui.modal = null;
      showToast("该毕业流程状态已变化");
      return;
    }
    state.graduation.notes[action] = form.get("note").trim();
    state.graduation.status += 1;
    if (action === "confirm" && !state.graduation.counted) {
      const teacher = state.teachers.find((item) => item.id === state.graduation.teacherId);
      teacher.graduationCount += 1;
      state.graduation.counted = true;
    }
    ui.modal = null;
    saveAndRender({ nominate: "毕业提名已提交", observe: "心理观察已归档", approve: "督导审核通过，等待家长确认", confirm: "毕业认证完成，案例已计入专业信用" }[action]);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && ui.modal) {
    ui.modal = null;
    render();
  }
});

render();
