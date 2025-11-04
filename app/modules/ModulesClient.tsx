'use client';

import { useLanguage } from '../i18n/LanguageContext';

export default function ModulesClient() {
  const { t } = useLanguage();

  const modules = [
    {
      slug: 'html-basics',
      title: t.modules.htmlBasics.title,
      description: t.modules.htmlBasics.description,
      topics: t.modules.htmlBasics.topics,
      difficulty: t.modules.difficulty
    },
    {
      slug: 'keyboard-tab',
      title: t.modules.keyboardTab.title,
      description: t.modules.keyboardTab.description,
      topics: t.modules.keyboardTab.topics,
      difficulty: t.modules.difficulty
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">{t.modules.listTitle}</h2>
        <p className="text-gray-900 dark:text-gray-100 text-lg">
          {t.modules.listDesc}
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
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{t.modules.mainTopics}</h4>
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
                {t.modules.startLearning}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-xl font-bold mb-3">{t.modules.learningPath}</h3>
        <ol className="list-decimal list-inside text-gray-900 dark:text-gray-100 space-y-2">
          <li dangerouslySetInnerHTML={{ __html: t.modules.pathStep1 }} />
          <li dangerouslySetInnerHTML={{ __html: t.modules.pathStep2 }} />
          <li>{t.modules.pathStep3}</li>
        </ol>
      </section>
    </div>
  );
}
