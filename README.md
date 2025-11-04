# AccessiLearn - Web 无障碍学习平台

> 循序渐进、理论结合实践，掌握 Web 无障碍的核心概念

[![部署状态](https://github.com/nicrain/AccessiLearn/workflows/Deploy%20Next.js%20to%20GitHub%20Pages/badge.svg)](https://github.com/nicrain/AccessiLearn/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 项目简介

AccessiLearn 是一个专注于 Web 无障碍教育的在线学习平台。通过交互式挑战和即时反馈，帮助学习者掌握 WCAG 2.1 AA 标准的核心概念。

**在线访问**: [https://nicrain.github.io/AccessiLearn/](https://nicrain.github.io/AccessiLearn/)

## ✨ 核心功能

### MVP 阶段学习模块

1. **HTML 语义化基础**
   - 理解语义化 HTML 的重要性
   - 掌握常用语义化元素（h1-h6, p, ul, ol, article, section 等）
   - 实践：创建语义化博客文章

2. **键盘导航与焦点管理**
   - 理解键盘导航的重要性
   - 掌握 Tab 键导航和 tabindex 属性
   - 实践：创建可访问的导航菜单

### 交互式学习体验

- **实时代码编辑器**：边学边练，即时看到效果
- **可视化预览**：实时预览 HTML 渲染效果
- **智能检查器**：自动验证代码的无障碍性
- **即时反馈**：针对性的提示和错误信息

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + @tailwindcss/typography
- **Markdown**: react-markdown + rehype-highlight
- **部署**: GitHub Pages (自动化 CI/CD)
- **无障碍标准**: WCAG 2.1 AA

## 🚀 快速开始

### 环境要求

- Node.js 20.x 或更高版本
- npm 或 yarn

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/nicrain/AccessiLearn.git
cd AccessiLearn/pages

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 构建生产版本

```bash
# 构建静态网站
npm run build

# 构建产物在 ./out 目录
```

## 📂 项目结构

```
pages/
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Actions 部署工作流
├── app/
│   ├── layout.tsx              # 根布局（导航、页脚）
│   ├── page.tsx                # 主页
│   ├── globals.css             # 全局样式
│   ├── modules/
│   │   ├── page.tsx            # 模块列表页
│   │   └── [slug]/
│   │       └── page.tsx        # 模块详情页（理论讲解）
│   └── challenge/
│       └── [slug]/
│           └── page.tsx        # 挑战页面（交互式编辑器）
├── public/                     # 静态资源
├── next.config.js              # Next.js 配置（GitHub Pages）
├── tailwind.config.ts          # Tailwind CSS 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 依赖管理
```

## 🎨 设计原则

### 1. 无障碍优先 (Accessibility-First)

- 所有交互元素支持键盘导航
- WCAG AA 级别色彩对比度（4.5:1）
- 清晰的焦点指示器
- 语义化 HTML 结构
- ARIA 标签支持屏幕阅读器

### 2. 渐进式学习 (Progressive Learning)

- 从基础到进阶的模块设计
- 理论 + 实践相结合
- 即时反馈机制

### 3. 响应式设计 (Responsive Design)

- 支持桌面、平板、手机
- 移动优先的 UI 设计

## 🔧 配置说明

### GitHub Pages 部署

项目配置为自动部署到 GitHub Pages：

1. **next.config.js** 配置：
   ```javascript
   basePath: '/AccessiLearn',  // 仓库名称
   output: 'export',           // 静态导出
   trailingSlash: true,        // 尾随斜杠（适配 GitHub Pages）
   ```

2. **GitHub Actions** 工作流：
   - 监听 `main` 分支的 push 事件
   - 自动安装依赖、构建、部署
   - 部署到 `gh-pages` 分支

3. **GitHub 仓库设置**：
   - Settings → Pages → Source: GitHub Actions

## 🧪 测试无障碍性

### 手动测试

- **键盘导航**：仅使用 Tab、Enter、箭头键操作全站
- **屏幕阅读器**：使用 NVDA (Windows) 或 VoiceOver (macOS) 测试
- **颜色对比**：使用浏览器开发者工具检查对比度

### 自动化工具

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- Lighthouse 无障碍评分

## 🤝 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码规范

- 遵循 ESLint 和 TypeScript 规范
- 所有新功能必须符合 WCAG 2.1 AA 标准
- 提交信息使用语义化格式

## 📝 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 👨‍💻 作者

**WANG Zhaoyu** - [GitHub](https://github.com/nicrain)

## 🙏 致谢

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)

## 📮 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](https://github.com/nicrain/AccessiLearn/issues)
- 发送邮件至项目邮箱

---

**构建更包容的互联网 🌐♿**
