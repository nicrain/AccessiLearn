export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4 text-primary-700">
          欢迎来到 AccessiLearn
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          循序渐进、理论结合实践，掌握 Web 无障碍的核心概念
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">什么是 Web 无障碍？</h3>
        <p className="text-gray-700 mb-4">
          Web 无障碍（Web Accessibility）意味着让所有人，包括残障人士，都能平等地访问和使用网站。
          这不仅是技术要求，更是社会责任。
        </p>
        <p className="text-gray-700 mb-4">
          通过遵循 WCAG（Web Content Accessibility Guidelines）标准，
          我们可以创建对每个人都友好的数字体验。
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">MVP 学习模块</h3>
        <p className="text-gray-700 mb-6">
          本平台目前专注于两个核心主题：
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="/AccessiLearn/modules/html-basics/"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary-500 no-underline"
          >
            <h4 className="text-xl font-bold mb-2 text-primary-700">
              1. HTML 语义化基础
            </h4>
            <p className="text-gray-600">
              学习如何正确使用语义化 HTML 元素，让您的网页结构清晰、易于理解。
            </p>
            <span className="inline-block mt-4 text-primary-600 font-semibold">
              开始学习 →
            </span>
          </a>

          <a 
            href="/AccessiLearn/modules/keyboard-tab/"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary-500 no-underline"
          >
            <h4 className="text-xl font-bold mb-2 text-primary-700">
              2. 键盘导航与焦点管理
            </h4>
            <p className="text-gray-600">
              掌握键盘导航和 tabindex 的正确使用，确保所有用户都能顺畅操作。
            </p>
            <span className="inline-block mt-4 text-primary-600 font-semibold">
              开始学习 →
            </span>
          </a>
        </div>
      </section>

      <section className="text-center py-8">
        <a 
          href="/AccessiLearn/modules/"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:bg-primary-700 transition-colors no-underline"
        >
          查看所有模块
        </a>
      </section>
    </div>
  );
}
