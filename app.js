const STORAGE_KEY = "shadowTeacherQualityDemoV1";
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
  lessons: [
    {
      id: "morning",
      time: "08:10",
      subject: "晨间准备",
      status: "verified",
      behavior: "按视觉清单完成书包整理，第二项需要一次手势提示，随后独立进入教室。",
      strategy: "先等待5秒，再使用最小手势提示。",
      media: "assets/feedback-reading.svg",
      schoolTeacher: "王老师",
      schoolComment: "记录属实。今天进入教室比上周更从容。",
      updatedAt: "08:42"
    },
    {
      id: "chinese",
      time: "10:20",
      subject: "语文课",
      status: "verified",
      behavior: "主动举手回答1次，小组朗读持续参与12分钟，中途自行使用暂停卡1次。",
      strategy: "将朗读任务分成两段，完成第一段后给出同伴强化。",
      media: "assets/feedback-reading.svg",
      schoolTeacher: "张老师",
      schoolComment: "属实。暂停后能回到任务，恢复速度有进步。",
      updatedAt: "11:06"
    },
    {
      id: "activity",
      time: "14:00",
      subject: "综合实践",
      status: "pending",
      behavior: "与同伴共同完成材料分类，出现一次抢拿，经口头提示后归还并等待轮次。",
      strategy: "使用轮次卡，并在等待成功后立即给予具体表扬。",
      media: "assets/feedback-math.svg",
      schoolTeacher: "王老师",
      schoolComment: "",
      updatedAt: "14:48"
    },
    {
      id: "math",
      time: "15:05",
      subject: "数学课",
      status: "draft",
      behavior: "",
      strategy: "",
      media: "assets/feedback-math.svg",
      schoolTeacher: "李老师",
      schoolComment: "",
      updatedAt: ""
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
    defaultPage: "market",
    nav: [
      { id: "market", label: "找老师", icon: "⌕" },
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
  },
  specialist: {
    label: "专业审核端",
    name: "平台督导",
    defaultPage: "dashboard",
    nav: [
      { id: "dashboard", label: "工作台", icon: "▦" },
      { id: "certification", label: "认证审核", icon: "◇" },
      { id: "graduation", label: "毕业认证", icon: "✓" },
      { id: "exceptions", label: "异常记录", icon: "!" }
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
  toast: ""
};

const initialParams = new URLSearchParams(window.location.search);
const initialRole = initialParams.get("role");
const initialPage = initialParams.get("page");
if (initialRole && roleConfig[initialRole]) {
  ui.role = initialRole;
  ui.page = roleConfig[initialRole].nav.some((item) => item.id === initialPage)
    ? initialPage
    : roleConfig[initialRole].defaultPage;
}
let toastTimer;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
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
          <span class="brand-mark">质</span>
          <span>
            <strong>影子老师质量监督</strong>
            <small>演示数据</small>
          </span>
        </div>
        <div class="role-control">
          <label for="role-select">当前视角</label>
          <select id="role-select" class="select" aria-label="切换演示角色">
            ${Object.entries(roleConfig).map(([id, config]) => `<option value="${id}" ${id === ui.role ? "selected" : ""}>${config.label}</option>`).join("")}
          </select>
        </div>
      </header>
      <div class="layout">
        <aside class="sidebar">
          ${renderNav(role.nav)}
          <div class="sidebar-footer">
            <button class="feedback-button" type="button" data-experience-feedback>体验反馈${experienceFeedback.length ? ` · ${experienceFeedback.length}` : ""}</button>
            <button class="reset-button" type="button" data-reset>重置演示数据</button>
          </div>
        </aside>
        <main class="main">
          <div class="content">${renderPage()}</div>
        </main>
      </div>
      <nav class="mobile-nav" style="--nav-count:${role.nav.length}" aria-label="主导航">
        ${renderNav(role.nav)}
      </nav>
      <button class="feedback-fab" type="button" data-experience-feedback aria-label="提交体验反馈" title="提交体验反馈">✎</button>
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
  const key = `${ui.role}:${ui.page}`;
  const views = {
    "parent:market": renderMarket,
    "parent:today": renderToday,
    "parent:growth": renderGrowth,
    "parent:profile": renderParentProfile,
    "shadow:schedule": renderSchedule,
    "shadow:children": renderChildren,
    "shadow:credit": renderCredit,
    "shadow:supervision": renderSupervision,
    "school:review": renderReview,
    "school:history": renderReviewHistory,
    "specialist:dashboard": renderDashboard,
    "specialist:certification": renderCertification,
    "specialist:graduation": renderGraduation,
    "specialist:exceptions": renderExceptions
  };
  return (views[key] || renderMarket)();
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
        <div class="price">¥${teacher.price}<small>/天</small></div>
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
      <button class="button primary" type="button" data-consult="${teacher.id}" ${consulted ? "disabled" : ""}>${consulted ? "已申请咨询" : `申请咨询 · ¥${teacher.price}/天`}</button>
    </div>
    <p class="profile-copy">${teacher.description}</p>
    <section class="section">
      <div class="section-title"><h2>专业信用</h2><span>${teacher.certified ? "平台已认证" : "平台认证中"}</span></div>
      <div class="metrics">
        <div class="metric"><strong>${teacher.graduationCount}</strong><span>已确认毕业案例</span></div>
        <div class="metric"><strong>${teacher.supervisionHours}h</strong><span>累计专业督导</span></div>
        <div class="metric"><strong>${teacher.verifyRate}%</strong><span>校方反馈核验率</span></div>
        <div class="metric"><strong>${teacher.price}</strong><span>每日服务价格（元）</span></div>
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

function visibleTimelineLessons() {
  return state.lessons.filter((lesson) => ["pending", "verified", "correction"].includes(lesson.status));
}

function renderToday() {
  const verified = state.lessons.filter((lesson) => lesson.status === "verified").length;
  const pending = state.lessons.filter((lesson) => lesson.status === "pending").length;
  return `
    ${pageHeader(`${state.child.alias}的今天`, `${state.child.grade} · ${new Date().toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "long" })}`)}
    <div class="summary-grid">
      <div class="summary" style="--accent:var(--green)"><span>校方已确认</span><strong>${verified}</strong></div>
      <div class="summary" style="--accent:var(--amber)"><span>等待确认</span><strong>${pending}</strong></div>
      <div class="summary" style="--accent:var(--blue)"><span>主动参与</span><strong>3次</strong></div>
      <div class="summary" style="--accent:var(--coral)"><span>需要提示</span><strong>2次</strong></div>
    </div>
    <div class="timeline">${visibleTimelineLessons().map(renderTimelineItem).join("")}</div>
  `;
}

function renderTimelineItem(lesson) {
  const [label, tone] = statusLabel(lesson.status);
  return `
    <article class="timeline-item">
      <div class="timeline-head"><span class="timeline-time">${lesson.time} · ${lesson.subject}</span><span class="status ${tone}">${label}</span></div>
      <h3>课堂表现</h3>
      <p>${escapeHtml(lesson.behavior)}</p>
      <div class="evidence">
        <img src="${lesson.media}" alt="${lesson.subject}匿名化演示记录" />
        <div>
          <p><strong>支持策略：</strong>${escapeHtml(lesson.strategy)}</p>
          <div class="comment" style="margin-top:12px">${lesson.status === "verified" ? `<strong>${lesson.schoolTeacher}：</strong>${escapeHtml(lesson.schoolComment || "确认属实")}` : "等待校内老师确认"}</div>
        </div>
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
      <div class="section-title"><h2>毕业进度</h2><span class="status ${graduation.status === 4 ? "green" : "amber"}">${graduationLabel(graduation.status)}</span></div>
      ${renderGraduationSteps(graduation.status)}
      ${graduation.status === 3 ? `<button class="button primary" type="button" data-grad-action="confirm">确认降级过渡</button>` : ""}
      ${graduation.status < 3 ? `<div class="notice">当前结果意向：${graduation.result}。完成专业审核后由家长最终确认。</div>` : ""}
      ${graduation.status === 4 ? `<div class="notice">该案例已完成四方确认并计入影子老师专业信用。</div>` : ""}
    </section>
  `;
}

function renderParentProfile() {
  return `
    ${pageHeader("我的", "小宇家长 · 已实名认证")}
    <div class="list">
      <article class="list-card"><div><h3>当前服务</h3><p>林晓雅 · ¥680/天 · 服务中</p></div><span class="status green">正常</span></article>
      <article class="list-card"><div><h3>隐私授权</h3><p>儿童档案、校内记录与专业评估授权</p></div><button class="button ghost" type="button" data-toast="演示版暂不接真实授权">查看</button></article>
      <article class="list-card"><div><h3>咨询申请</h3><p>已提交 ${state.consultedTeacherIds.length} 位老师咨询</p></div><span>›</span></article>
    </div>
  `;
}

function renderSchedule() {
  const completed = state.lessons.filter((lesson) => lesson.status === "verified").length;
  const pendingReview = state.lessons.filter((lesson) => lesson.status === "pending").length;
  return `
    ${pageHeader("今日课表", `${state.child.alias} · 4节支持任务`)}
    <div class="summary-grid">
      <div class="summary"><span>已完成</span><strong>${completed}</strong></div>
      <div class="summary" style="--accent:var(--amber)"><span>待校方确认</span><strong>${pendingReview}</strong></div>
      <div class="summary" style="--accent:var(--blue)"><span>待填写</span><strong>${state.lessons.filter((lesson) => lesson.status === "draft").length}</strong></div>
      <div class="summary" style="--accent:var(--coral)"><span>需修正</span><strong>${state.lessons.filter((lesson) => lesson.status === "correction").length}</strong></div>
    </div>
    <div class="list">${state.lessons.map((lesson) => {
      const [label, tone] = statusLabel(lesson.status);
      const canEdit = ["draft", "correction"].includes(lesson.status);
      return `<article class="list-card"><div><div class="list-card-meta"><span>${lesson.time}</span><span class="status ${tone}">${label}</span></div><h3>${lesson.subject}</h3><p>${lesson.behavior || `课后向${lesson.schoolTeacher}提交反馈`}</p></div>${canEdit ? `<button class="button primary" type="button" data-feedback="${lesson.id}">${lesson.status === "correction" ? "修改反馈" : "填写反馈"}</button>` : `<button class="button ghost" type="button" data-toast="该记录当前不可修改">查看记录</button>`}</article>`;
    }).join("")}</div>
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
      ${g.status === 0 ? `<button class="button primary" type="button" data-grad-action="nominate">提名为${g.result}</button>` : ""}
      ${g.status > 0 && g.status < 4 ? `<div class="notice">提名已提交，后续结果只有完成心理观察、督导审核和家长确认后才计入专业信用。</div>` : ""}
    </section>
  `;
}

function renderSupervision() {
  return `
    ${pageHeader("在线督导", "累计 126 小时 · 本月 4 小时", `<button class="button primary" type="button" data-toast="已生成督导预约演示单">预约督导</button>`)}
    <div class="list">
      <article class="list-card"><div><div class="list-card-meta"><span>6月28日 19:30</span><span class="status green">已完成</span></div><h3>支持逐步撤离策略</h3><p>督导：苏老师 · 60分钟 · 记录已归档</p></div><button class="button ghost" type="button" data-toast="已打开督导记录摘要">查看记录</button></article>
      <article class="list-card"><div><div class="list-card-meta"><span>7月20日 19:30</span><span class="status amber">已预约</span></div><h3>同伴互动泛化</h3><p>督导：苏老师 · 60分钟</p></div><button class="button ghost" type="button" data-toast="演示预约不可变更">管理预约</button></article>
    </div>
  `;
}

function pendingLessons() {
  return state.lessons.filter((lesson) => lesson.status === "pending");
}

function renderReview() {
  const lessons = pendingLessons();
  return `
    ${pageHeader("待我确认", `王老师 · 今日 ${lessons.length} 条待确认`)}
    ${lessons.length ? `<div class="list">${lessons.map((lesson) => `<article class="list-card"><div><div class="list-card-meta"><span>${lesson.time} · ${lesson.subject}</span><span class="status amber">待确认</span></div><h3>${state.child.alias}的课堂反馈</h3><p>${escapeHtml(lesson.behavior)}</p></div><button class="button primary" type="button" data-review="${lesson.id}">确认反馈</button></article>`).join("")}</div>` : `<div class="empty"><div class="empty-mark">✓</div>今日反馈已全部确认</div>`}
  `;
}

function renderReviewHistory() {
  const lessons = state.lessons.filter((lesson) => lesson.status === "verified");
  return `
    ${pageHeader("确认记录", `共 ${lessons.length} 条已确认反馈`)}
    <div class="list">${lessons.map((lesson) => `<article class="list-card"><div><div class="list-card-meta"><span>${lesson.time} · ${lesson.subject}</span><span class="status green">已确认</span></div><h3>${state.child.alias}</h3><p>${escapeHtml(lesson.schoolComment || "确认属实")}</p></div><span>${lesson.updatedAt}</span></article>`).join("")}</div>
  `;
}

function renderDashboard() {
  const g = state.graduation;
  return `
    ${pageHeader("专业审核工作台", "平台督导 · 今日待办")}
    <div class="summary-grid">
      <div class="summary"><span>毕业审核</span><strong>${g.status === 1 || g.status === 2 ? 1 : 0}</strong></div>
      <div class="summary" style="--accent:var(--amber)"><span>老师认证</span><strong>3</strong></div>
      <div class="summary" style="--accent:var(--blue)"><span>督导预约</span><strong>5</strong></div>
      <div class="summary" style="--accent:var(--coral)"><span>异常记录</span><strong>1</strong></div>
    </div>
    <div class="list">
      ${g.status === 1 || g.status === 2 ? `<article class="list-card"><div><div class="list-card-meta"><span class="status amber">${graduationLabel(g.status)}</span></div><h3>${state.child.alias} · ${g.result}</h3><p>提名老师：林晓雅 · 当前服务14个月</p></div><button class="button primary" type="button" data-nav="graduation">处理</button></article>` : ""}
      <article class="list-card"><div><div class="list-card-meta"><span class="status amber">认证复核</span></div><h3>周可欣 · 进阶认证</h3><p>材料 6 份 · 督导时长 48 小时</p></div><button class="button ghost" type="button" data-nav="certification">查看</button></article>
    </div>
  `;
}

function renderCertification() {
  return `
    ${pageHeader("认证审核", "基于身份、培训、督导和已核验服务记录")}
    <div class="list">
      <article class="list-card"><div><div class="list-card-meta"><span class="status amber">待补充</span><span>进阶认证</span></div><h3>周可欣</h3><p>缺少最近一次督导总结 · 当前毕业案例 5 个</p></div><button class="button ghost" type="button" data-toast="已发送补充材料通知">通知补充</button></article>
      <article class="list-card"><div><div class="list-card-meta"><span class="status green">资料齐全</span><span>基础认证</span></div><h3>许安然</h3><p>身份、培训与服务记录已核验</p></div><button class="button primary" type="button" data-toast="认证审核演示已通过">审核</button></article>
    </div>
  `;
}

function renderGraduation() {
  const g = state.graduation;
  const teacher = state.teachers.find((item) => item.id === g.teacherId);
  return `
    ${pageHeader("毕业认证", `${g.childAlias} · 提名结果：${g.result}`)}
    <div class="profile-head" style="grid-template-columns:58px minmax(0,1fr) auto">
      <div class="avatar" style="--avatar:${teacher.color};width:58px;height:58px">${teacher.initials}</div>
      <div><div class="teacher-name"><h1 style="font-size:20px">${teacher.name}</h1><span class="verified">✓</span></div><div class="teacher-subtitle">服务14个月 · 最近三月校方核验率98%</div></div>
      <span class="status ${g.status === 4 ? "green" : "amber"}">${graduationLabel(g.status)}</span>
    </div>
    <section class="section">
      ${renderGraduationSteps(g.status)}
      ${g.status === 0 ? `<div class="notice">等待影子老师发起毕业提名。</div>` : ""}
      ${g.status === 1 ? `<button class="button primary" type="button" data-grad-action="observe">提交心理观察</button>` : ""}
      ${g.status === 2 ? `<button class="button primary" type="button" data-grad-action="approve">督导审核通过</button>` : ""}
      ${g.status === 3 ? `<div class="notice">专业审核已完成，等待家长确认。</div>` : ""}
      ${g.status === 4 ? `<div class="notice">认证完成。案例已归档并计入${teacher.name}的专业信用。</div>` : ""}
    </section>
    <section class="section">
      <div class="section-title"><h2>核心证据</h2><span>模拟数据</span></div>
      <div class="case-grid">
        <article class="case-card"><h3>独立参与</h3><span class="status green">连续8周稳定</span><p>普通课堂独立参与时长由22分钟提升至36分钟。</p></article>
        <article class="case-card"><h3>支持撤离</h3><span class="status green">目标达成</span><p>四类提示中已撤除视觉位置提示和全程口头提示。</p></article>
        <article class="case-card"><h3>跨场景表现</h3><span class="status amber">继续观察</span><p>语文、数学课稳定，综合实践仍保留远距离支持。</p></article>
      </div>
    </section>
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

function renderExceptions() {
  return `
    ${pageHeader("异常记录", "反馈修正、争议与隐私风险")}
    <div class="list">
      <article class="list-card"><div><div class="list-card-meta"><span class="status coral">隐私检查</span><span>今日 11:32</span></div><h3>图片可能包含其他学生</h3><p>系统已暂停向家长展示，等待影子老师重新提交脱敏材料。</p></div><button class="button ghost" type="button" data-toast="异常记录已打开">处理</button></article>
    </div>
  `;
}

function renderModal() {
  if (!ui.modal) return "";
  if (ui.modal.type === "feedback") return renderFeedbackModal(ui.modal.lessonId);
  if (ui.modal.type === "review") return renderReviewModal(ui.modal.lessonId);
  if (ui.modal.type === "graduation") return renderGraduationModal(ui.modal.action);
  if (ui.modal.type === "experience-feedback") return renderExperienceFeedbackModal();
  if (ui.modal.type === "confirm-reset") return renderResetModal();
  return "";
}

function modalFrame(title, body, actions) {
  return `<div class="modal-backdrop" data-modal-backdrop><section class="modal" role="dialog" aria-modal="true" aria-label="${title}"><div class="modal-head"><h2>${title}</h2><button class="icon-button" type="button" data-close-modal aria-label="关闭">×</button></div>${body}${actions}</section></div>`;
}

function renderFeedbackModal(lessonId) {
  const lesson = state.lessons.find((item) => item.id === lessonId);
  if (!lesson) return "";
  const body = `<form id="feedback-form"><div class="modal-body"><div class="form-grid">
    <div class="field"><label for="feedback-subject">课程</label><input class="input" id="feedback-subject" value="${lesson.subject}" disabled /></div>
    <div class="field"><label for="feedback-time">时间</label><input class="input" id="feedback-time" value="${lesson.time}" disabled /></div>
    <div class="field full"><label for="feedback-behavior">学生表现</label><textarea class="textarea" id="feedback-behavior" name="behavior" required placeholder="记录可观察到的行为">${escapeHtml(lesson.behavior)}</textarea></div>
    <div class="field full"><label for="feedback-strategy">支持策略</label><textarea class="textarea" id="feedback-strategy" name="strategy" required placeholder="记录使用的支持方式与结果">${escapeHtml(lesson.strategy)}</textarea></div>
    <div class="field full"><label>课堂凭证</label><div class="upload-mock">已选择 1 张匿名化课堂图片<br />演示版不上传真实文件</div></div>
  </div></div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">提交${lesson.schoolTeacher}确认</button></div></form>`;
  return modalFrame("填写逐课反馈", body, "");
}

function renderReviewModal(lessonId) {
  const lesson = state.lessons.find((item) => item.id === lessonId);
  if (!lesson) return "";
  const body = `<form id="review-form"><div class="modal-body">
    <div class="notice" style="margin-bottom:18px"><strong>${lesson.time} · ${lesson.subject}</strong><br />${escapeHtml(lesson.behavior)}</div>
    <div class="form-grid">
      <fieldset class="fieldset field full"><legend>是否属实</legend><div class="radio-row"><label class="radio"><input type="radio" name="truth" value="verified" checked /> 属实</label><label class="radio"><input type="radio" name="truth" value="correction" /> 需要修正</label></div></fieldset>
      <div class="field full"><label for="school-comment">补充评语（选填）</label><textarea class="textarea" id="school-comment" name="comment" placeholder="语音评语在演示版中以文字模拟"></textarea></div>
    </div>
  </div><div class="modal-actions"><button class="button ghost" type="button" data-close-modal>取消</button><button class="button primary" type="submit">提交确认</button></div></form>`;
  return modalFrame("确认课堂反馈", body, "");
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
  if (target.matches("[data-review]")) {
    ui.modal = { type: "review", lessonId: target.dataset.review };
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
  if (event.target.matches("#feedback-form")) {
    const lesson = state.lessons.find((item) => item.id === ui.modal.lessonId);
    const form = new FormData(event.target);
    lesson.behavior = form.get("behavior").trim();
    lesson.strategy = form.get("strategy").trim();
    lesson.status = "pending";
    lesson.updatedAt = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
    ui.modal = null;
    saveAndRender(`已提交${lesson.schoolTeacher}确认`);
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
