import { notFound } from 'next/navigation';
import ChallengeClient from './ChallengeClient';

// 挑战数据（与模块详情页保持一致）
const challengesData = {
  'html-basics': {
    title: 'HTML 语义化基础挑战',
    instructions: '请使用正确的语义化 HTML 元素来构建一篇博客文章，包括：\n1. 一个主标题（h1）\n2. 两个章节，每个章节有副标题（h2）和段落（p）\n3. 一个无序列表，列出至少 3 个要点',
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
    title: '键盘导航挑战',
    instructions: '创建一个导航菜单，确保：\n1. 所有链接可以用 Tab 键访问\n2. 使用语义化的 <nav> 和 <ul> 元素\n3. 不使用正数 tabindex\n4. 包含至少 3 个导航链接',
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

type CheckRule = {
  type: string;
  count?: number;
  minCount?: number;
  forbidden?: boolean;
  message: string;
};

export async function generateStaticParams() {
  return [
    { slug: 'html-basics' },
    { slug: 'keyboard-tab' }
  ];
}

export default function ChallengePage({ params }: { params: { slug: string } }) {
  const challenge = challengesData[params.slug as keyof typeof challengesData];

  if (!challenge) {
    notFound();
  }

  return <ChallengeClient challenge={challenge} />;
}
