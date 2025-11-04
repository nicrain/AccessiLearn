这个文档采用 **Headless CMS** 和 **Next.js** 的“无头架构”模型，专注于实现 **“键盘导航与 HTML 语义化”** 这一核心 $\text{MVP}$ 模块。

-----

## 项目需求文档 (PRD)：无障碍数字化互动学习平台 $\text{MVP}$

### 1\. 项目概览与目标

| 字段 | 值 |
| :--- | :--- |
| **项目名称** | $\text{AccessiLearn}$：无障碍数字化互动学习平台 |
| **项目目标** | 创建一个循序渐进、理论结合实践的互动网站，引导用户（主要是前端开发者和设计师）掌握 $\text{Web}$ 无障碍的核心概念。 |
| **$\text{MVP}$ 范围** | 专注于 **“键盘导航”** 和 **“$\text{HTML}$ 语义化”** 两个核心 $\text{WCAG}$ 主题。 |
| **技术架构** | **前端：** $\text{Next.js 14}$ (React) **后端：** $\text{Headless CMS}$ (如 $\text{Strapi}$ 或 $\text{Contentful}$，仅用于内容管理) **部署环境：** $\text{Vercel}$ (推荐) |

### 2\. 核心技术栈与约定

  * **框架：** $\text{Next.js}$ 使用 **$\text{App Router}$**。
  * **语言：** $\text{TypeScript}$。
  * **样式：** 推荐使用 $\text{Tailwind CSS}$ 或 $\text{CSS Modules}$ 进行快速原型设计和实现。
  * **无障碍标准：** 代码生成必须遵循 $\text{WCAG 2.1 AA}$ 级标准（从自身做起）。

### 3\. 功能需求 (Functional Requirements)

#### 3.1 页面结构 (Page Structure)

| 页面名称 | 路径 (Path) | 功能描述 |
| :--- | :--- | :--- |
| **主页** | `/` | 简介平台目标，展示 $\text{MVP}$ 模块列表。 |
| **学习模块列表** | `/modules` | 列出所有可学习的模块卡片。$\text{MVP}$ 阶段只有两个模块。 |
| **模块详情页** | `/modules/[slug]` | 学习内容的主页。包括理论解释、视频/图文、和实践挑战链接。 |
| **实践挑战页** | `/challenge/[slug]` | **核心交互页面**：提供可编辑代码和实时预览/检查。 |

#### 3.2 学习模块内容 (Content Structure - Headless CMS)

$\text{Coding Agent}$ 需要定义 $\text{CMS}$ 模型，用于存储以下数据：

| 字段名称 | 字段类型 | 描述 |
| :--- | :--- | :--- |
| $\text{moduleTitle}$ | 文本 | 模块标题（例如：“$\text{1. HTML}$ 语义化基础”） |
| $\text{slug}$ | Slug | 模块唯一 $\text{URL}$ 标识 |
| $\text{theoryContent}$ | 富文本/Markdown | 理论解释（例如：什么是 $\text{role}$ 属性，为什么使用 `button` 标签） |
| $\text{challengeTitle}$ | 文本 | 实践挑战名称 |
| $\text{challengeInstructions}$ | 文本/Markdown | 挑战的具体步骤和要求。 |
| $\text{initialCode}$ | 长文本/Code Block | 供用户编辑的**初始 $\text{HTML}/\text{CSS}/\text{JS}$ 代码**。 |
| $\text{solutionCode}$ | 长文本/Code Block | 挑战的**正确答案代码**。 |

### 4\. 关键用户界面 (UI) 与交互需求

#### 4.1 学习模块详情页

  * 内容区域应清晰展示理论知识，支持代码块高亮。
  * 页面底部应有 **“进入实践挑战”** 按钮，链接到 `/challenge/[slug]`。

#### 4.2 实践挑战页 (核心)

这是交互的重点，需要一个三栏布局：

| 区域 | 内容 | 功能要求 |
| :--- | :--- | :--- |
| **左侧** | **挑战指令** | 展示 $\text{challengeInstructions}$，要求清晰易读。 |
| **中央** | **代码编辑器** | 使用轻量级代码编辑器组件（如 $\text{Monaco Editor}$ 或简单的 $\text{textarea}$）来展示和编辑 $\text{initialCode}$。支持 $\text{HTML/CSS/JS}$ 代码。 |
| **右侧** | **实时预览区** | 渲染中央编辑器中的代码。|
| **底部** | **操作区** | 包含两个按钮：<br>1. **“检查无障碍性”**：运行检查逻辑。<br>2. **“查看答案”**：显示 $\text{solutionCode}$。|

#### 4.3 无障碍性检查逻辑 (核心逻辑 - 可模拟)

由于 $\text{Coding Agent}$ 无法直接调用复杂的 $\text{Lighthouse}$ 或 $\text{Axe}$ 库，检查逻辑可以**模拟**实现：

  * **目标：** 检查用户在编辑器中提交的代码是否符合挑战要求。
  * **模拟逻辑：**
      * **$\text{HTML}$ 语义化检查：** $\text{Agent}$ 需编写一个简单的 $\text{JS}$ 函数，检查预览 $\text{DOM}$ 中是否包含**特定的无障碍元素**。
          * *例如：* 如果挑战要求使用 `<button>`，则检查预览区是否含有 `<button>` 标签，而不是 `<div onclick="...">`。
      * **键盘焦点检查 (难点，可简化)：** 简化为检查关键交互元素是否具有 $\text{tabindex}$ 属性或是否为原生可聚焦元素。
  * **反馈：** 检查后，在指令区下方显示反馈信息（例如：“成功！所有元素都可聚焦。”或“失败：您的代码中仍使用了无语义的 $\text{div}$。”）。

### 5\. $\text{MVP}$ 模块内容示例 (供 Agent 使用)

$\text{Coding Agent}$ 需根据以下内容生成 $\text{CMS}$ 数据和前端展示：

| 模块 $\text{Slug}$ | 模块标题 | 挑战要求 (简述) |
| :--- | :--- | :--- |
| $\text{html-basics}$ | $\text{HTML}$ 语义化：按钮与链接 | 要求用户将错误的 $\text{div}$ 元素替换为正确的 `<button>` 和 `<a>` 标签。 |
| $\text{keyboard-tab}$ | 键盘导航：正确使用 $\text{tabindex}$ | 要求用户使用 `tabindex="0"` 和 `tabindex="-1"` 来管理一个自定义组件的焦点流。 |

### 6\. $\text{WCAG}$ 合规性 (对网站本身的要求)

$\text{Coding Agent}$ 必须确保生成的网站本身是无障碍的：

  * **键盘可操作性：** 所有导航和按钮必须可通过 $\text{Tab}$ 键访问。
  * **颜色对比度：** 确保文本和背景的颜色对比度符合 $\text{WCAG AA}$ 级标准。
  * **语义 $\text{HTML}$：** 正确使用 $\text{H1-H6}$ 标题、`nav`、`main` 等标签。