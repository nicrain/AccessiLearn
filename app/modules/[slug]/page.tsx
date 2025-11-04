import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// 模块数据（实际项目中应从 JSON 文件或 API 获取）
const modulesData = {
  'html-basics': {
    title: 'HTML 语义化基础',
    theory: `# HTML 语义化基础

## 什么是语义化 HTML？

语义化 HTML 是指使用正确的 HTML 元素来传达内容的**意义**，而不仅仅是外观。

### 为什么重要？

- **可访问性**：屏幕阅读器依赖语义化元素来理解页面结构
- **SEO**：搜索引擎更好地理解您的内容
- **维护性**：代码更易读、易维护

## 常用语义化元素

### 1. 标题元素 (h1-h6)

\`\`\`html
<h1>页面主标题</h1>
<h2>章节标题</h2>
<h3>子章节标题</h3>
\`\`\`

**规则**：
- 每页只有一个 \`<h1>\`
- 标题层级不能跳级（h1 → h2 → h3）

### 2. 段落和文本

\`\`\`html
<p>这是一个段落。</p>
<strong>重要内容</strong>
<em>强调内容</em>
\`\`\`

### 3. 列表

\`\`\`html
<!-- 无序列表 -->
<ul>
  <li>项目 1</li>
  <li>项目 2</li>
</ul>

<!-- 有序列表 -->
<ol>
  <li>步骤 1</li>
  <li>步骤 2</li>
</ol>
\`\`\`

## 反例：非语义化 HTML

❌ **错误示例**：
\`\`\`html
<div class="heading">页面标题</div>
<div class="paragraph">这是内容</div>
\`\`\`

✅ **正确示例**：
\`\`\`html
<h1>页面标题</h1>
<p>这是内容</p>
\`\`\`

## 实践挑战

现在轮到您了！请完成下面的挑战来巩固所学知识。`,
    challengeTitle: '创建一个语义化的博客文章',
    challengeInstructions: '请使用正确的语义化 HTML 元素来构建一篇博客文章，包括：\n1. 一个主标题（h1）\n2. 两个章节，每个章节有副标题（h2）和段落（p）\n3. 一个无序列表，列出至少 3 个要点',
    initialCode: `<!-- 请在这里编写您的 HTML 代码 -->
<div>
  <!-- 您的代码 -->
</div>`,
    solutionCode: `<article>
  <h1>我的第一篇博客</h1>
  
  <section>
    <h2>什么是 Web 无障碍？</h2>
    <p>Web 无障碍是确保所有人都能访问网站的实践。</p>
  </section>
  
  <section>
    <h2>关键要点</h2>
    <ul>
      <li>使用语义化 HTML</li>
      <li>提供替代文本</li>
      <li>确保键盘可访问</li>
    </ul>
  </section>
</article>`,
    checkRules: [
      { type: 'h1', count: 1, message: '页面应有且仅有一个 <h1> 标题' },
      { type: 'h2', minCount: 2, message: '应至少有两个 <h2> 副标题' },
      { type: 'p', minCount: 2, message: '应至少有两个 <p> 段落' },
      { type: 'ul', count: 1, message: '应有一个 <ul> 无序列表' },
      { type: 'li', minCount: 3, message: '列表应至少有 3 个 <li> 项目' }
    ]
  },
  'keyboard-tab': {
    title: '键盘导航与焦点管理',
    theory: `# 键盘导航与焦点管理

## 为什么键盘导航很重要？

许多用户依赖键盘操作网页：
- 运动障碍用户
- 盲人或低视力用户（使用屏幕阅读器）
- 高级用户（提高效率）

## Tab 键导航

### 默认可聚焦元素

以下元素默认可以使用 Tab 键聚焦：
- 链接 \`<a href="...">\`
- 按钮 \`<button>\`
- 表单控件 \`<input>\`, \`<textarea>\`, \`<select>\`

### Tab 键导航顺序

导航顺序由 DOM 中的元素顺序决定：

\`\`\`html
<a href="#1">第一个链接</a>
<a href="#2">第二个链接</a>
<button>第三个按钮</button>
\`\`\`

## tabindex 属性

### tabindex="0"

将非交互元素添加到 Tab 导航中：

\`\`\`html
<div tabindex="0">可聚焦的 div</div>
\`\`\`

⚠️ **注意**：只有在元素具有交互功能时才应使用。

### tabindex="-1"

从 Tab 导航中移除，但允许通过 JavaScript 聚焦：

\`\`\`html
<div tabindex="-1" id="modal">模态框</div>
\`\`\`

\`\`\`javascript
document.getElementById('modal').focus();
\`\`\`

### tabindex="1+" （正数）

❌ **不建议使用**！会破坏自然的导航顺序。

## 焦点可见性

确保焦点状态清晰可见：

\`\`\`css
button:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}
\`\`\`

❌ **永远不要**：\`outline: none;\` （除非提供替代方案）

## 实践挑战

测试您的键盘导航知识！`,
    challengeTitle: '创建可访问的导航菜单',
    challengeInstructions: '创建一个导航菜单，确保：\n1. 所有链接可以用 Tab 键访问\n2. 使用语义化的 <nav> 和 <ul> 元素\n3. 不使用正数 tabindex\n4. 包含至少 3 个导航链接',
    initialCode: `<!-- 请创建一个可访问的导航菜单 -->
`,
    solutionCode: `<nav aria-label="主导航">
  <ul>
    <li><a href="#home">首页</a></li>
    <li><a href="#about">关于</a></li>
    <li><a href="#contact">联系</a></li>
  </ul>
</nav>`,
    checkRules: [
      { type: 'nav', count: 1, message: '应使用 <nav> 元素包裹导航' },
      { type: 'ul', count: 1, message: '应使用 <ul> 元素创建列表' },
      { type: 'a', minCount: 3, message: '应至少有 3 个 <a> 链接' },
      { type: 'tabindex-positive', forbidden: true, message: '不应使用正数 tabindex' }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'html-basics' },
    { slug: 'keyboard-tab' }
  ];
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const moduleData = modulesData[params.slug as keyof typeof modulesData];

  if (!moduleData) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{moduleData.title}</h2>
      
      <section className="mb-12 prose prose-lg max-w-none">
        <ReactMarkdown>{moduleData.theory}</ReactMarkdown>
      </section>

      <section className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
        <h3 className="text-2xl font-bold mb-4 text-primary-800">
          💪 实践挑战
        </h3>
        <p className="text-gray-700 mb-4 whitespace-pre-line">
          {moduleData.challengeInstructions}
        </p>
        <a 
          href={`/AccessiLearn/challenge/${params.slug}/`}
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:bg-primary-700 transition-colors no-underline"
        >
          开始挑战
        </a>
      </section>
    </div>
  );
}
