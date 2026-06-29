# Skill 产品落地页 — 设计方案

> **日期**：2026-06-28  
> **状态**：已确认

---

## 1. 产品概述

为 2 个 Skill（需求文档分析 Skill + 产品文档及UI原型分析 Skill）制作产品落地页，用于展示 Skill 的分析能力，通过大量案例吸引用户使用。

参考站：https://gpt-image2.canghe.ai/

---

## 2. 技术选型

- **纯静态单页面**：HTML + CSS + Vanilla JS，零构建，零框架
- **Markdown 渲染**：marked.js（CDN 引入）
- **案例数据**：`demos-data.js` 手动维护索引，新增案例只需加一条记录
- **资源引用**：所有文档、原型走站内相对路径

### 目录结构

```
landing-page/
├── index.html              # 单页面入口
├── css/
│   └── style.css           # 全部样式
├── js/
│   ├── demos-data.js       # 案例索引数据（手动维护）
│   ├── markdown-render.js  # Markdown 渲染封装
│   └── app.js              # 页面逻辑：筛选、卡片渲染、弹窗
├── demos/                  # 案例资源（已有，相对路径引用）
└── assets/
    └── (logo, favicon 等)
```

---

## 3. 页面布局

页面分为 4 个区域，垂直滚动：

### 3.1 Hero 区
- 全屏高度
- 居中大标题 + 副标题介绍 2 个 Skill
- CTA 按钮
- 动态渐变光效背景（CSS animation）

### 3.2 产品介绍区
- 左右双栏布局
- 左栏：需求文档分析 Skill — 图标 + 核心能力列表
- 右栏：产品文档及UI原型分析 Skill — 图标 + 核心能力列表

### 3.3 案例展示区
- 顶部筛选栏：标签筛选（全部 / 需求分析 / 产品设计 / 特定行业等）
- 卡片网格布局（响应式：4列 → 3列 → 2列 → 1列）
- 每张卡片用首个全站 HTML 的缩略图做封面
- 卡片信息：案例名称、简短描述、标签

### 3.4 页脚
- 简洁的版权信息

---

## 4. 弹窗预览

点击卡片 → 全屏模态弹窗：

- **左侧**：案例元信息（名称、描述、标签、文档列表）
- **右侧**：Tab 切换区
  - Tab 1：URS（Markdown 渲染）
  - Tab 2：PRD（Markdown 渲染）
  - Tab 3：UI原型（iframe 嵌入全站 HTML）
  - Tab 4+：其他原型/Widget（如有多个）

---

## 5. 案例数据结构

每个案例在 `demos-data.js` 中的数据结构：

```js
{
  id: "pet-insurance",
  name: "宠物保险对比助手",
  description: "帮助宠物主人对比不同保险方案...",
  tags: ["需求分析", "产品设计", "金融保险"],
  thumbnail: "demos/宠物保险对比助手/assets/prototypes/xxx.html", // 首个全站 HTML
  urs: "demos/宠物保险对比助手/URS-宠物保险对比助手.md",
  prd: "demos/宠物保险对比助手/PRD-宠物保险对比助手.md",
  prototypes: [
    { label: "管理后台", url: "demos/宠物保险对比助手/assets/prototypes/admin.html" },
    { label: "用户端", url: "demos/宠物保险对比助手/assets/prototypes/user.html" }
  ]
}
```

---

## 6. 视觉风格

- **暗色科技风**：深色背景 + 渐变光效 + 玻璃拟态卡片
- 后续可调整

---

## 7. 筛选逻辑

- 标签筛选：点击标签过滤案例卡片
- 支持多选（AND 逻辑）或单选（OR 逻辑）
- 动画过渡

---

## 8. 后续扩展

- 案例数量从当前 18 个扩展到 50-100 个
- 新增案例只需在 `demos-data.js` 中添加一条记录
- 视觉风格可按需调整
