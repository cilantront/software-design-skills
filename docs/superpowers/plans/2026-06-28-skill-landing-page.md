# Skill 产品落地页 — 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个暗色科技风静态单页面落地页，展示 2 个 Skill 产品 + 17 个案例的 URS/PRD/UI原型预览

**Architecture:** 纯静态 HTML + CSS + Vanilla JS，marked.js CDN 渲染 Markdown，demos-data.js 手动维护案例索引，所有资源走相对路径

**Tech Stack:** HTML5, CSS3 (Grid, Flexbox, backdrop-filter, CSS animations), Vanilla JS (ES6+), marked.js (CDN)

## Global Constraints

- 纯静态单页面，零构建，零框架
- 所有文档、原型走站内相对路径
- 卡片封面用缩小版 iframe（transform: scale + pointer-events: none）模拟缩略图
- 弹窗预览用 iframe 嵌入原型 HTML
- 案例数据在 demos-data.js 手动维护，新增案例只需加一条记录
- 暗色科技风：深色背景 + 渐变光效 + 玻璃拟态卡片

---

## 文件结构

```
landing-page/
├── index.html              # 入口，加载所有资源
├── css/
│   └── style.css           # 全部样式
├── js/
│   ├── demos-data.js       # 案例索引数据
│   └── app.js              # 页面逻辑
```

---

### Task 1: 创建项目结构和 index.html

**Files:**
- Create: `landing-page/index.html`
- Create: `landing-page/css/` (directory)
- Create: `landing-page/js/` (directory)

**Interfaces:**
- Produces: `index.html` 加载 `css/style.css`, `js/demos-data.js`, `js/app.js`, marked.js CDN

- [ ] **Step 1: 创建目录结构**

```bash
mkdir -p landing-page/css landing-page/js
```

- [ ] **Step 2: 创建 index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>优特云 Skill — AI 驱动的需求分析与产品设计</title>
  <meta name="description" content="优特云 Skill 平台：需求文档分析 Skill + 产品文档及UI原型分析 Skill，AI 驱动的需求分析与产品设计工具">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>">
</head>
<body>

  <!-- Hero -->
  <section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="gradient-text">优特云 Skill</span>
      </h1>
      <p class="hero-subtitle">AI 驱动的需求分析与产品设计，从想法到原型，一步到位</p>
      <div class="hero-skills">
        <div class="hero-skill-card">
          <div class="hero-skill-icon">📋</div>
          <h3>需求文档分析 Skill</h3>
          <p>将模糊的用户想法转化为结构化的需求文档（URS），自动梳理用户画像、业务场景、功能优先级</p>
        </div>
        <div class="hero-skill-card">
          <div class="hero-skill-icon">🎨</div>
          <h3>产品文档及UI原型分析 Skill</h3>
          <p>基于需求文档自动生成产品文档（PRD）和可交互的 UI 原型，覆盖管理后台、移动端、小程序等多端</p>
        </div>
      </div>
      <a href="#gallery" class="cta-btn">查看案例展示</a>
    </div>
  </section>

  <!-- Features -->
  <section class="features" id="features">
    <h2 class="section-title">核心能力</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🔍</div>
        <h3>智能需求分析</h3>
        <p>自动识别用户画像、业务场景、功能需求，生成结构化的 URS 文档</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📐</div>
        <h3>产品方案设计</h3>
        <p>基于五层架构思想，输出完整的产品文档（PRD），覆盖体验层到数据层</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🖼️</div>
        <h3>UI 原型生成</h3>
        <p>自动生成可交互的 HTML 原型，支持管理后台、移动 H5、小程序等多端</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🏷️</div>
        <h3>多行业覆盖</h3>
        <p>覆盖保险、教育、医疗、物业、零售、知识付费等 10+ 行业场景</p>
      </div>
    </div>
  </section>

  <!-- Gallery -->
  <section class="gallery" id="gallery">
    <h2 class="section-title">案例展示</h2>
    <div class="filter-bar" id="filterBar"></div>
    <div class="gallery-grid" id="galleryGrid"></div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2026 优特云 Skill. All rights reserved.</p>
  </footer>

  <!-- Modal -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal-container">
      <button class="modal-close" id="modalClose">&times;</button>
      <div class="modal-body">
        <div class="modal-sidebar" id="modalSidebar"></div>
        <div class="modal-content">
          <div class="modal-tabs" id="modalTabs"></div>
          <div class="modal-panel" id="modalPanel"></div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="js/demos-data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

- [ ] **Step 3: 提交**

```bash
git add landing-page/
git commit -m "feat: add landing page structure and index.html"
```

---

### Task 2: 创建案例数据索引 demos-data.js

**Files:**
- Create: `landing-page/js/demos-data.js`

**Interfaces:**
- Produces: 全局变量 `DEMOS` (Array)，每个元素包含 `{id, name, description, tags, thumbnail, urs, prd, prototypes: [{label, url}]}`

- [ ] **Step 1: 创建 demos-data.js** — 已写入 `landing-page/js/demos-data.js`，包含全部 17 个案例的完整数据

- [ ] **Step 2: 提交**

```bash
git add landing-page/js/demos-data.js
git commit -m "feat: add demo data index with 17 cases"
```

---

### Task 3: 创建样式文件 style.css

**Files:**
- Create: `landing-page/css/style.css`

**Interfaces:**
- Consumes: `index.html` 中的 class 命名
- Produces: 完整的暗色科技风样式系统

**样式覆盖范围：**
- CSS 变量：颜色体系（--bg-primary: #0a0a1a, --bg-card: rgba(255,255,255,0.04), --gradient-1: #6366f1, --gradient-2: #8b5cf6, --gradient-3: #ec4899）
- Reset & Base：box-sizing, smooth scroll, 字体栈
- Hero 区：全屏高度，动态渐变光效背景（@keyframes heroBgMove），居中内容，玻璃拟态卡片
- Features 区：4 列响应式网格，玻璃拟态卡片
- Gallery 区：筛选栏（filter-tag pill 按钮，active 渐变高亮），卡片网格（auto-fill, minmax(320px, 1fr)）
- Demo Card：iframe 缩略图（width/height: 333%, transform: scale(0.3), pointer-events: none），卡片信息区
- Footer：简洁居中
- Modal：全屏覆盖（backdrop-filter: blur(8px)），左右分栏（sidebar 300px + content flex），Tab 切换（active 底部紫色边框），Markdown 内容样式，iframe 原型全屏嵌入
- 响应式：@media 断点处理移动端（modal sidebar 隐藏/折叠，网格单列）
- 滚动动画：.fade-in 类 + Intersection Observer

- [ ] **Step 1: 创建 style.css** — 见文件 `landing-page/css/style.css`

- [ ] **Step 2: 提交**

```bash
git add landing-page/css/style.css
git commit -m "feat: add dark sci-fi theme styles"
```

---

### Task 4: 创建页面逻辑 app.js

**Files:**
- Create: `landing-page/js/app.js`

**Interfaces:**
- Consumes: `DEMOS` (from demos-data.js), `marked` (from CDN), DOM elements from index.html
- Produces: 筛选、卡片渲染、弹窗交互、Markdown 渲染、iframe 预览

**功能覆盖范围：**
- `initFilters()`: 从 DEMOS 收集所有标签，去重，渲染筛选按钮，绑定点击事件
- `renderCards(filterTag)`: 根据筛选标签过滤 DEMOS，生成卡片 HTML，插入 galleryGrid
- `createCard(demo)`: 生成单张卡片 DOM（缩略图 iframe + 名称 + 描述 + 标签）
- `openModal(demo)`: 打开弹窗，填充 sidebar 信息，生成 Tab（URS / PRD / 每个原型），默认激活第一个 Tab
- `switchTab(demo, tabType, tabIndex)`: 切换 Tab 内容 — URS/PRD 用 fetch + marked.parse() 渲染 Markdown，原型用 iframe 嵌入
- `closeModal()`: 关闭弹窗，清理 iframe 和内容
- `initScrollAnimation()`: Intersection Observer 监听卡片进入视口，添加 .visible 类触发 fadeInUp
- 键盘 ESC 关闭弹窗
- 点击 overlay 关闭弹窗

- [ ] **Step 1: 创建 app.js** — 见文件 `landing-page/js/app.js`

- [ ] **Step 2: 提交**

```bash
git add landing-page/js/app.js
git commit -m "feat: add gallery filtering, modal, and markdown rendering"
```
