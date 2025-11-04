export default function ModulesPage() {
  const modules = [
    {
      slug: 'html-basics',
      title: 'HTML 语义化基础',
      description: '学习如何使用语义化 HTML 元素构建无障碍的网页结构。',
      topics: ['语义化标签', '标题层级', 'ARIA 属性基础'],
      difficulty: '入门'
    },
    {
      slug: 'keyboard-tab',
      title: '键盘导航与焦点管理',
      description: '掌握键盘导航、tabindex 的正确使用，确保所有用户都能顺畅操作。',
      topics: ['Tab 键导航', 'tabindex 属性', '焦点可见性'],
      difficulty: '入门'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">学习模块</h2>
        <p className="text-gray-900 dark:text-gray-100 text-lg">
          每个模块包含理论讲解和实践挑战，让您在动手中掌握 Web 无障碍核心概念。
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <article 
              key={module.slug}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-2 border-transparent hover:border-primary-500 transition-all"
            >
              <div className="mb-4">
                <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {module.difficulty}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-primary-700 dark:text-primary-400">
                {module.title}
              </h3>
              
              <p className="text-gray-900 dark:text-gray-100 mb-4">
                {module.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">主要内容：</h4>
                <ul className="list-disc list-inside text-gray-900 dark:text-gray-100 space-y-1">
                  {module.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={`/AccessiLearn/modules/${module.slug}/`}
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 focus:bg-primary-700 transition-colors no-underline"
              >
                开始学习
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-xl font-bold mb-3">学习路径建议</h3>
        <ol className="list-decimal list-inside text-gray-900 dark:text-gray-100 space-y-2">
          <li>从 <strong>HTML 语义化基础</strong> 开始，建立无障碍网页的基础</li>
          <li>学习 <strong>键盘导航与焦点管理</strong>，确保所有用户都能操作</li>
          <li>完成每个模块的实践挑战，巩固所学知识</li>
        </ol>
      </section>
    </div>
  );
}
