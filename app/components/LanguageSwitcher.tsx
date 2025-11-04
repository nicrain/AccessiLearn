'use client';

import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded ${
          language === 'zh'
            ? 'bg-primary-600 dark:bg-primary-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
        } font-semibold transition-colors`}
        aria-label="切换到中文"
        aria-pressed={language === 'zh'}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded ${
          language === 'fr'
            ? 'bg-primary-600 dark:bg-primary-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
        } font-semibold transition-colors`}
        aria-label="Passer au français"
        aria-pressed={language === 'fr'}
      >
        Français
      </button>
    </div>
  );
}
