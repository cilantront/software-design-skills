// 案例数据索引 — 新增案例只需在此数组添加一条记录
// thumbnail: 首个全站 HTML 原型的相对路径，用作卡片封面
// prototypes: 全站 HTML 原型列表（非 widget），按展示顺序排列
// 路径均相对于 landing-page/index.html

const DEMOS = [
  {
    id: "pet-insurance",
    name: "宠物保险对比助手",
    description: "帮助宠物主人对比不同保险方案，支持 AI 智能推荐、理赔指引、多产品对比",
    tags: ["需求分析", "产品设计", "金融保险"],
    thumbnail: "../demos/宠物保险对比助手/assets/prototypes/product-admin-web-prototype.html",
    urs: "../demos/宠物保险对比助手/URS-宠物保险对比助手.md",
    prd: "../demos/宠物保险对比助手/PRD-宠物保险对比助手.md",
    prototypes: [
      { label: "产品管理后台", url: "../demos/宠物保险对比助手/assets/prototypes/product-admin-web-prototype.html" },
      { label: "运营管理后台", url: "../demos/宠物保险对比助手/assets/prototypes/admin-web-prototype.html" },
      { label: "C端小程序", url: "../demos/宠物保险对比助手/assets/prototypes/c-end-miniapp-prototype.html" },
      { label: "C端H5", url: "../demos/宠物保险对比助手/assets/prototypes/c-end-h5-prototype.html" }
    ]
  },
  {
    id: "children-class-shuttle",
    name: "儿童兴趣班接送交接表",
    description: "面向家长、教师、管理员三端的兴趣班接送交接管理，确保儿童交接安全可追溯",
    tags: ["需求分析", "产品设计", "教育"],
    thumbnail: "../demos/儿童兴趣班接送交接表/assets/prototypes/admin-web-prototype.html",
    urs: "../demos/儿童兴趣班接送交接表/URS-儿童兴趣班接送交接表.md",
    prd: "../demos/儿童兴趣班接送交接表/PRD-儿童兴趣班接送交接表.md",
    prototypes: [
      { label: "管理后台", url: "../demos/儿童兴趣班接送交接表/assets/prototypes/admin-web-prototype.html" },
      { label: "教师小程序", url: "../demos/儿童兴趣班接送交接表/assets/prototypes/teacher-mini-program-prototype.html" },
      { label: "家长小程序", url: "../demos/儿童兴趣班接送交接表/assets/prototypes/parent-mini-program-prototype.html" }
    ]
  },
  {
    id: "delivery-risk-check",
    name: "交付前资料风险确认台",
    description: "面向独立顾问和自由职业者的交付前资料协同工具，自动识别资料缺失与过期风险",
    tags: ["需求分析", "产品设计", "企业服务"],
    thumbnail: "../demos/交付前资料风险确认台/UI原型_交付前资料风险确认台.html",
    urs: "../demos/交付前资料风险确认台/需求文档_交付前资料风险确认台.md",
    prd: "../demos/交付前资料风险确认台/PRD_交付前资料风险确认台.md",
    prototypes: [
      { label: "风险确认台", url: "../demos/交付前资料风险确认台/UI原型_交付前资料风险确认台.html" }
    ]
  },
  {
    id: "cs-feedback-to-card",
    name: "客服反馈转产品需求卡AI",
    description: "将客服反馈自动转化为结构化产品需求卡片，支持批量导入、报表分析和看板管理",
    tags: ["需求分析", "产品设计", "客服"],
    thumbnail: "../demos/客服反馈转产品需求卡AI/UI-客服反馈转产品需求卡AI.html",
    urs: "../demos/客服反馈转产品需求卡AI/URS-客服反馈转产品需求卡AI.md",
    prd: "../demos/客服反馈转产品需求卡AI/PRD-客服反馈转产品需求卡AI.md",
    prototypes: [
      { label: "需求卡片管理", url: "../demos/客服反馈转产品需求卡AI/UI-客服反馈转产品需求卡AI.html" },
      { label: "数据导入", url: "../demos/客服反馈转产品需求卡AI/import.html" },
      { label: "报表分析", url: "../demos/客服反馈转产品需求卡AI/report.html" },
      { label: "卡片看板", url: "../demos/客服反馈转产品需求卡AI/cards.html" }
    ]
  },
  {
    id: "kb-gap-catcher",
    name: "客服知识库缺口捕捉器",
    description: "自动识别客服知识库中的内容缺口，支持 FAQ 编辑、任务分配和数据看板",
    tags: ["需求分析", "产品设计", "客服", "知识管理"],
    thumbnail: "../demos/客服知识库缺口捕捉器/assets/prototypes/kb-gap-catcher-prototype.html",
    urs: "../demos/客服知识库缺口捕捉器/需求文档.md",
    prd: "../demos/客服知识库缺口捕捉器/产品文档.md",
    prototypes: [
      { label: "知识库缺口管理", url: "../demos/客服知识库缺口捕捉器/assets/prototypes/kb-gap-catcher-prototype.html" }
    ]
  },
  {
    id: "course-to-exercise",
    name: "课程讲义转练习卡",
    description: "将课程讲义自动转化为结构化练习卡片，支持知识库管理、题目配置、预览导出",
    tags: ["需求分析", "产品设计", "教育"],
    thumbnail: "../demos/课程讲义转练习卡/prototype_01_dashboard.html",
    urs: "../demos/课程讲义转练习卡/课程讲义转练习卡_URS需求文档.md",
    prd: "../demos/课程讲义转练习卡/课程讲义转练习卡_PRD产品文档.md",
    prototypes: [
      { label: "工作台", url: "../demos/课程讲义转练习卡/prototype_01_dashboard.html" },
      { label: "讲义上传", url: "../demos/课程讲义转练习卡/prototype_02_upload.html" },
      { label: "知识库", url: "../demos/课程讲义转练习卡/prototype_03_knowledge.html" },
      { label: "题目配置", url: "../demos/课程讲义转练习卡/prototype_04_config.html" },
      { label: "预览", url: "../demos/课程讲义转练习卡/prototype_05_preview.html" },
      { label: "练习管理", url: "../demos/课程讲义转练习卡/prototype_06_manage.html" },
      { label: "导出", url: "../demos/课程讲义转练习卡/prototype_07_export.html" },
      { label: "定价", url: "../demos/课程讲义转练习卡/prototype_08_pricing.html" }
    ]
  },
  {
    id: "bnb-cleaning",
    name: "民宿清洁排班小助手",
    description: "为民宿经营者提供清洁排班管理，支持管理员排班和清洁员接单两端协同",
    tags: ["需求分析", "产品设计", "企业服务"],
    thumbnail: "../demos/民宿清洁排班小助手/assets/prototypes/admin-prototype.html",
    urs: "../demos/民宿清洁排班小助手/民宿清洁排班小助手_需求文档_URS.md",
    prd: "../demos/民宿清洁排班小助手/民宿清洁排班小助手_PRD.md",
    prototypes: [
      { label: "管理后台", url: "../demos/民宿清洁排班小助手/assets/prototypes/admin-prototype.html" },
      { label: "清洁员端", url: "../demos/民宿清洁排班小助手/assets/prototypes/cleaner-prototype.html" }
    ]
  },
  {
    id: "community-qa-asset",
    name: "社群问答内容资产化助手",
    description: "将社群群聊问答自动整理为可复用的内容资产（周报、FAQ、选题库），支持内容分级标记",
    tags: ["需求分析", "产品设计", "知识付费"],
    thumbnail: "../demos/社群问答内容资产化助手/社群问答内容资产化助手-UI原型.html",
    urs: "../demos/社群问答内容资产化助手/社群问答内容资产化助手-URS.md",
    prd: "../demos/社群问答内容资产化助手/社群问答内容资产化助手-PRD.md",
    prototypes: [
      { label: "内容资产管理", url: "../demos/社群问答内容资产化助手/社群问答内容资产化助手-UI原型.html" }
    ]
  },
  {
    id: "photo-selection",
    name: "摄影选片修图反馈台",
    description: "面向摄影工作室的选片与修图协同工具，支持客户选片、订单看板、修图反馈",
    tags: ["需求分析", "产品设计", "摄影"],
    thumbnail: "../demos/摄影选片修图反馈台/studio-backend.html",
    urs: "../demos/摄影选片修图反馈台/URS-摄影选片修图反馈台.md",
    prd: "../demos/摄影选片修图反馈台/PRD-摄影选片修图反馈台.md",
    prototypes: [
      { label: "工作室后台", url: "../demos/摄影选片修图反馈台/studio-backend.html" },
      { label: "订单看板", url: "../demos/摄影选片修图反馈台/order-kanban.html" },
      { label: "客户选片", url: "../demos/摄影选片修图反馈台/customer-selection.html" }
    ]
  },
  {
    id: "expo-material",
    name: "小型展会摊位物料清单",
    description: "为小型展会参展商提供物料清单管理，支持模板管理、扫码确认、复盘报告",
    tags: ["需求分析", "产品设计", "展会"],
    thumbnail: "../demos/小型展会摊位物料清单/assets/prototypes/admin-web-prototype.html",
    urs: "../demos/小型展会摊位物料清单/URS-小型展会摊位物料清单.md",
    prd: "../demos/小型展会摊位物料清单/PRD-小型展会摊位物料清单.md",
    prototypes: [
      { label: "管理后台", url: "../demos/小型展会摊位物料清单/assets/prototypes/admin-web-prototype.html" },
      { label: "移动H5", url: "../demos/小型展会摊位物料清单/assets/prototypes/mobile-h5-prototype.html" },
      { label: "移动小程序", url: "../demos/小型展会摊位物料清单/assets/prototypes/mobile-mini-program-prototype.html" }
    ]
  },
  {
    id: "dental-followup",
    name: "牙科复诊与术后随访助手",
    description: "面向牙科诊所的复诊预约与术后随访管理，支持诊所后台和患者 H5 两端",
    tags: ["需求分析", "产品设计", "医疗"],
    thumbnail: "../demos/牙科复诊与术后随访助手/clinic-dashboard.html",
    urs: "../demos/牙科复诊与术后随访助手/URS-牙科复诊与术后随访助手.md",
    prd: "../demos/牙科复诊与术后随访助手/PRD-牙科复诊与术后随访助手.md",
    prototypes: [
      { label: "诊所看板", url: "../demos/牙科复诊与术后随访助手/clinic-dashboard.html" },
      { label: "患者H5", url: "../demos/牙科复诊与术后随访助手/patient-h5.html" }
    ]
  },
  {
    id: "drug-inventory",
    name: "药品库存与服用提醒家庭版",
    description: "面向家庭的药品库存管理与服用提醒工具，支持扫码录入、库存预警、服药确认",
    tags: ["需求分析", "产品设计", "医疗", "家庭"],
    thumbnail: "../demos/药品库存与服用提醒家庭版/assets/prototypes/miniprogram-prototype.html",
    urs: "../demos/药品库存与服用提醒家庭版/药品库存与服用提醒家庭版_URS需求文档.md",
    prd: "../demos/药品库存与服用提醒家庭版/药品库存与服用提醒家庭版_PRD产品文档.md",
    prototypes: [
      { label: "小程序主页", url: "../demos/药品库存与服用提醒家庭版/assets/prototypes/miniprogram-prototype.html" }
    ]
  },
  {
    id: "key-access-a",
    name: "钥匙门禁借还留痕器-A",
    description: "面向物业和企业的钥匙门禁借还管理，支持组织创建、物品管理、借还流程和记录导出",
    tags: ["需求分析", "产品设计", "物业"],
    thumbnail: "../demos/钥匙门禁借还留痕器-A/assets/prototypes/webapp-prototype.html",
    urs: "../demos/钥匙门禁借还留痕器-A/URS-钥匙门禁借还留痕器.md",
    prd: "../demos/钥匙门禁借还留痕器-A/PRD-钥匙门禁借还留痕器.md",
    prototypes: [
      { label: "Web管理端", url: "../demos/钥匙门禁借还留痕器-A/assets/prototypes/webapp-prototype.html" },
      { label: "小程序端", url: "../demos/钥匙门禁借还留痕器-A/assets/prototypes/miniapp-prototype.html" }
    ]
  },
  {
    id: "key-access-b",
    name: "钥匙门禁借还留痕器-B",
    description: "钥匙门禁借还管理的另一种方案设计，支持管理后台和小程序两端",
    tags: ["需求分析", "产品设计", "物业"],
    thumbnail: "../demos/钥匙门禁借还留痕器-B/admin-web-prototype.html",
    urs: "../demos/钥匙门禁借还留痕器-B/钥匙门禁借还留痕器_需求规格说明书_v1.0.md",
    prd: "../demos/钥匙门禁借还留痕器-B/钥匙门禁借还留痕器_产品需求文档_PRD_v1.0.md",
    prototypes: [
      { label: "管理后台", url: "../demos/钥匙门禁借还留痕器-B/admin-web-prototype.html" },
      { label: "小程序", url: "../demos/钥匙门禁借还留痕器-B/miniprogram-prototype.html" }
    ]
  },
  {
    id: "booking-supply",
    name: "预约制门店耗材预测补货",
    description: "面向预约制门店的耗材预测与补货管理，支持预约录入、库存管理、预测补货和提醒",
    tags: ["需求分析", "产品设计", "零售"],
    thumbnail: "../demos/预约制门店耗材预测补货/预约录入页.html",
    urs: "../demos/预约制门店耗材预测补货/URS-预约制门店耗材预测补货.md",
    prd: "../demos/预约制门店耗材预测补货/PRD-预约制门店耗材预测补货.md",
    prototypes: [
      { label: "预约录入", url: "../demos/预约制门店耗材预测补货/预约录入页.html" },
      { label: "预测补货", url: "../demos/预约制门店耗材预测补货/预测补货页.html" },
      { label: "库存管理", url: "../demos/预约制门店耗材预测补货/库存管理页.html" },
      { label: "提醒页", url: "../demos/预约制门店耗材预测补货/提醒页.html" }
    ]
  },
  {
    id: "video-teaser",
    name: "长内容预热视频包装器",
    description: "将长内容（课程、文章）自动转化为预热短视频包装方案，支持创作者工作台和管理后台",
    tags: ["需求分析", "产品设计", "内容创作"],
    thumbnail: "../demos/长内容预热视频包装器/assets/prototypes/creator-workspace-prototype.html",
    urs: "../demos/长内容预热视频包装器/长内容预热视频包装器V1.0-URS.md",
    prd: "../demos/长内容预热视频包装器/长内容预热视频包装器V1.0-PRD.md",
    prototypes: [
      { label: "创作者工作台", url: "../demos/长内容预热视频包装器/assets/prototypes/creator-workspace-prototype.html" },
      { label: "管理后台", url: "../demos/长内容预热视频包装器/assets/prototypes/admin-backend-prototype.html" }
    ]
  },
  {
    id: "rental-handover",
    name: "租房交接留痕确认器",
    description: "面向房东和租客的租房交接留痕工具，支持房屋状况记录、交接确认和留痕追溯",
    tags: ["需求分析", "产品设计", "房产"],
    thumbnail: "../demos/租房交接留痕确认器/UI原型_租房交接留痕确认器.html",
    urs: "../demos/租房交接留痕确认器/需求说明书_租房交接留痕确认器.md",
    prd: "../demos/租房交接留痕确认器/产品需求文档_PRD_租房交接留痕确认器.md",
    prototypes: [
      { label: "租房交接", url: "../demos/租房交接留痕确认器/UI原型_租房交接留痕确认器.html" }
    ]
  }
];
