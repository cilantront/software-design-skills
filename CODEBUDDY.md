# CODEBUDDY.md This file provides guidance to CodeBuddy when working with code in this repository.

## 项目简介

本仓库是「优特云 Skills 推广与运营」物料库：用「需求文档 / PRD / 原型」系列 Skill 生成的 AI 产品案例（每个 demo = 一份 URS + PRD + HTML 原型），通过落地页对外展示与推广。

## 目录结构（关键）

- `demos-meta.md`（仓库根）：案例筛选信息总表，是审查状态的唯一事实来源。列：`Demo名`(链接)、`通过粗筛`、`通过精选`、`包括端类型`。
- `demos/<name>/`：原始/未入选案例资料库。入选失败的案例回到这里。
- `landing-page/index.html`：单文件静态展示页（Tailwind CDN，无构建步骤）。案例卡片由 `CASES_DEMOS` 数组渲染，约 63 条。
- `landing-page/demos/<name>/`：已入选、对外展示的案例资料（URS md、PRD md、原型 html）。`index.html` 中的路径相对于 `landing-page/`。
- `docs/superpowers/`：落地页自身的 plan / spec（如 `2026-06-28-skill-landing-page*.md`）。

## 两阶段审查漏斗（demos-meta.md）

- **通过粗筛**：✅ = `landing-page/demos/<name>` 与原始 `demos/<name>` 内容一致（已移除原始文件夹）；❌ = 不一致（保留原始文件夹待处理）。
- **通过精选**：留空 = 待精选；❌ = 精选未通过；✅ = 精选通过。
- **包括端类型**：依据各 demo 的 URS 第 2 章「功能原型/对应端」表 + 实际 `assets/prototypes` 原型文件综合判定，归一化为 `web` / `mobile` / `mini-program`。仅规划未落地（第二期/无原型）及 widget 不计入。

## ⭐ 核心操作规则：精选不通过的 Demo 如何处理

当某 demo 在 `demos-meta.md` 的「通过精选」列被判定为 ❌（精选不通过），必须同步执行以下三步，缺一不可：

1. **登记 meta**：在 `demos-meta.md` 对应行的「通过精选」列写入 `❌`（emoji，与既有记录一致；**不要改动**「通过粗筛」列，其原值保留）。并把该行 Markdown 链接路径从 `landing-page/demos/<name>` 改回原始 `demos/<name>`。
2. **移除卡片**：在 `landing-page/index.html` 中
   - 从 `CASES_DEMOS` 数组删除该 demo 的对象（含 `id/name/description/tags/thumbnail/urs/prd/prototypes`），注意保留合法的 JS 数组逗号结构（删除后上下对象用 `},` 衔接）；
   - 从 `ENDS_BY_ID` 删除该 `id` 对应的端映射条目；
   - 把顶部静态文案的「N 个案例」数字改为移除后的新总数。
3. **移回资料**：把 `landing-page/demos/<name>/` 整个文件夹移回 `demos/<name>/`（PowerShell：`Move-Item -Path "..." -Destination "..."`）。

> 逆向即「精选通过」流程：把 `demos/<name>` 移入 `landing-page/demos/`，在 `CASES_DEMOS` 与 `ENDS_BY_ID` 补回条目，meta 表「通过精选」记 ✅、链接指向 `landing-page/demos/`，并 +1 更新案例总数。

## ⭐ 原型「宫格展示」重构规则（移动端 / 小程序）

当某 demo 的 URS/PRD 含「移动端（App/H5）」或「小程序」原型，且原型是**单页长滚 / 多页切换**形式时，应改造成「宫格展示」单文件：把该端所有核心页面并列摆在同一屏，方便一页看全、对比与演示。

**参考范例**：
- 移动端：`landing-page/demos/独立咖啡店原料损耗管理工具/咖损管家-移动端原型.html`（`title` 已标注「宫格展示」）
- 小程序：`demos/邻里拼车费用分摊助手/assets/prototypes/mini-program-prototype.html`（标题「小程序原型 - 宫格展示版」）

### 共同规则（两端通用）
1. **一个 HTML 展示一端的全部核心页面**：每个页面 = 一台「手机」，用 CSS Grid 多列并排，纯静态无需 JS 即可浏览。
2. **屏幕尺寸统一**：每台手机屏幕固定 `width:375px; height:750px`，外层 `overflow:hidden`，内层内容区单独 `overflow-y:auto` 滚动（内容过多时**只在屏内滚动**，绝不撑高整页破坏网格）。
3. **页面标题标签**：每台手机配一个标签，含「序号 + 页面名 + emoji」（如 `🏠 1. 首页`）。
4. **直接在原文件上修改**：宫格展示是对原型的重构，**不另起新文件**，直接改原 HTML 即可。仅当原文件同时包含多个端（如移动端 + 小程序同文件）需要拆分时，才按 `<产品名>-xxx端原型.html` 方式新建对应文件。

### 移动端（App / H5）
- **手机外壳带边框**：`.phone { border-radius:40px; border:8px solid #1F2937; box-shadow:…; overflow:hidden; }` 模拟真机外观；内部 `display:flex; flex-direction:column`。
- **状态栏（iOS 风格）**：`background:#fff`，左时间（如 `9:41`）、右信号/电池图标，加粗小字。
- **导航**：`.nav-header`（左返回箭头 + 标题 + 右上信息，白底下边框）**或** 底部 `.tab-bar`（白底上边框，图标+文字，active 项高亮主色）。
- **标题标签放手机下方**：`.phone-wrap` 内先放 `.phone`、再放 `.phone-label` / `.phone-sublabel`。
- **网格布局**：`grid-template-columns: repeat(3, 375px); justify-content:center; gap:30px;`（固定 3 列居中，不随视口收窄折叠；页宽不足时出现横向滚动）。

### 小程序（WeChat Mini-Program）
- **手机外壳无厚边框**：`.phone-screen { width:375px; height:750px; border-radius:12px; overflow:hidden; }`，再套一层白色圆角卡片 `.phone-wrapper { background:#fff; border-radius:20px; padding:20px; box-shadow:…; }`。
- **状态栏 + 微信导航栏一体化**：`background:#07c160`（微信绿）；上方状态栏时间，下方 `.wechat-nav` 居中标题 + 左返回 `←` + 右 `···`。
- **标题标签放手机上方**：白卡内的 `.phone-label`（绿色小标签）。
- **底部 home-indicator**：模拟小程序底部「返回首页」手势条（黑底横条）。
- **网格布局**：响应式 `grid-template-columns: repeat(4, 1fr); max-width:1800px; margin:0 auto;`，断点 `1600/1200/800px` 依次降为 `3/2/1` 列。
- **主色统一微信绿 `#07c160`**（按钮、标签、激活态均用此色）。

> 改造要点：把原单页/多页原型里每个独立页面拆为独立的 `.phone` / `.phone-screen` 块，复制各自的 HTML 与样式到同一文件；状态栏/导航按上述两端规范补齐；内容超高的页面让内层滚动即可。

## 常用命令

- **本地预览**：直接用浏览器打开 `landing-page/index.html` 即可（无需构建）。若 `iframe` 原型因 `file://` 受限，可在 `landing-page/` 起静态服务：`python -m http.server 8080`，再访问 `http://localhost:8080`。
- **无 lint / test / build 流程**：本仓库是纯静态 HTML + Markdown，没有包管理与自动化测试。改动后人工在浏览器核对卡片渲染与案例总数即可。

## 改动校验清单（改动 index.html / demos 后）

- `CASES_DEMOS` 与 `ENDS_BY_ID` 删除条目后，全文搜索该 `id` 应再无残留（含数组对象与端映射）。
- 数组逗号结构完整，不破坏整页 JS（否则整页白屏）。
- `demos-meta.md` 的「通过精选」❌ 与链接路径已改回 `demos/...`。
- `landing-page/demos/<name>/` 已不在、且 `demos/<name>/` 已就位（用 `list_dir` 确认）。
