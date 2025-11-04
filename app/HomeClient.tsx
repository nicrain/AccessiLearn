'use client';

import { useLanguage } from './i18n/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4 text-primary-700">
          {t.home.title}
        </h2>
        <p className="text-xl text-gray-900 dark:text-gray-100 mb-8">
          {t.home.subtitle}
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">{t.home.whatIsA11y}</h3>
        <p className="text-gray-900 dark:text-gray-100 mb-4">
          {t.home.whatIsA11yDesc1}
        </p>
        <p className="text-gray-900 dark:text-gray-100 mb-4">
          {t.home.whatIsA11yDesc2}
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">{t.home.mvpModules}</h3>
        <p className="text-gray-900 dark:text-gray-100 mb-6">
          {t.home.mvpModulesDesc}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="/AccessiLearn/modules/html-basics/"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary-500 no-underline"
          >
            <h4 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-400">
              1. {t.modules.htmlBasics.title}
            </h4>
            <p className="text-gray-900 dark:text-gray-100">
              {t.modules.htmlBasics.description}
            </p>
            <span className="inline-block mt-4 text-primary-600 dark:text-primary-400 font-semibold">
              {t.home.startLearning}
            </span>
          </a>

          <a 
            href="/AccessiLearn/modules/keyboard-tab/"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary-500 no-underline"
          >
            <h4 className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-400">
              2. {t.modules.keyboardTab.title}
            </h4>
            <p className="text-gray-900 dark:text-gray-100">
              {t.modules.keyboardTab.description}
            </p>
            <span className="inline-block mt-4 text-primary-600 dark:text-primary-400 font-semibold">
              {t.home.startLearning}
            </span>
          </a>
        </div>
      </section>

      <section className="text-center py-8">
        <a 
          href="/AccessiLearn/modules/"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:bg-primary-700 transition-colors no-underline"
        >
          {t.home.viewAllModules}
        </a>
      </section>
    </div>
  );
}
