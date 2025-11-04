'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';

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

type CheckResult = {
  success: boolean;
  message: string;
};

export default function ChallengePage({ params }: { params: { slug: string } }) {
  const challenge = challengesData[params.slug as keyof typeof challengesData];

  if (!challenge) {
    notFound();
  }

  const [code, setCode] = useState(challenge.initialCode);
  const [feedback, setFeedback] = useState<CheckResult[]>([]);
  const [showSolution, setShowSolution] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);

  const checkAccessibility = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, 'text/html');
    const results: CheckResult[] = [];

    challenge.checkRules.forEach((rule: CheckRule) => {
      if (rule.type === 'tabindex-positive') {
        const elementsWithPositiveTabindex = doc.querySelectorAll('[tabindex]');
        let hasPositive = false;
        elementsWithPositiveTabindex.forEach((el) => {
          const tabindex = parseInt(el.getAttribute('tabindex') || '0');
          if (tabindex > 0) hasPositive = true;
        });
        results.push({
          success: !hasPositive,
          message: rule.message
        });
      } else {
        const elements = doc.querySelectorAll(rule.type);
        const count = elements.length;

        if (rule.count !== undefined) {
          results.push({
            success: count === rule.count,
            message: `${rule.message} (当前: ${count})`
          });
        } else if (rule.minCount !== undefined) {
          results.push({
            success: count >= rule.minCount,
            message: `${rule.message} (当前: ${count})`
          });
        }
      }
    });

    setFeedback(results);
  };

  const updatePreview = () => {
    setPreviewKey(prev => prev + 1);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const resetCode = () => {
    setCode(challenge.initialCode);
    setFeedback([]);
    setShowSolution(false);
    setPreviewKey(prev => prev + 1);
  };

  const loadSolution = () => {
    setCode(challenge.solutionCode);
    setShowSolution(true);
    setPreviewKey(prev => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{challenge.title}</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <h3 className="font-bold mb-2">📋 任务要求：</h3>
        <p className="whitespace-pre-line text-gray-700">{challenge.instructions}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* 编辑器 */}
        <section>
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">代码编辑器</h3>
            <div className="space-x-2">
              <button
                onClick={resetCode}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:bg-gray-600"
              >
                重置
              </button>
              <button
                onClick={loadSolution}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:bg-yellow-600"
              >
                查看答案
              </button>
            </div>
          </div>
          
          <textarea
            value={code}
            onChange={handleCodeChange}
            className="w-full h-96 p-4 font-mono text-sm border-2 border-gray-300 rounded focus:border-primary-500 focus:outline-none"
            spellCheck={false}
          />

          <div className="mt-4 space-x-2">
            <button
              onClick={updatePreview}
              className="px-6 py-2 bg-primary-600 text-white rounded font-semibold hover:bg-primary-700 focus:bg-primary-700"
            >
              更新预览
            </button>
            <button
              onClick={checkAccessibility}
              className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 focus:bg-green-700"
            >
              检查无障碍性
            </button>
          </div>

          {/* 反馈区域 */}
          {feedback.length > 0 && (
            <div className="mt-6">
              <h4 className="font-bold mb-3">检查结果：</h4>
              <ul className="space-y-2">
                {feedback.map((result, index) => (
                  <li
                    key={index}
                    className={`p-3 rounded ${
                      result.success
                        ? 'bg-green-50 border border-green-300 text-green-800'
                        : 'bg-red-50 border border-red-300 text-red-800'
                    }`}
                  >
                    <span className="font-bold">
                      {result.success ? '✓' : '✗'}
                    </span>{' '}
                    {result.message}
                  </li>
                ))}
              </ul>
              
              {feedback.every(r => r.success) && (
                <div className="mt-4 p-4 bg-green-100 border-2 border-green-400 rounded">
                  <p className="text-green-800 font-bold text-lg">
                    🎉 恭喜！您完成了挑战！
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 预览 */}
        <section>
          <h3 className="text-xl font-bold mb-4">实时预览</h3>
          <div className="border-2 border-gray-300 rounded p-4 bg-white min-h-96">
            <div 
              key={previewKey}
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded">
            <p className="text-sm text-gray-700">
              💡 <strong>提示</strong>：编辑代码后点击"更新预览"按钮查看效果，
              完成后点击"检查无障碍性"验证您的答案。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
