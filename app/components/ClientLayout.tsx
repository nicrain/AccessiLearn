'use client';

import { ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50"
      >
        {t.nav.skipToContent}
      </a>
      <header className="bg-primary-700 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4" aria-label={t.nav.home}>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <a href="/AccessiLearn/" className="text-white no-underline hover:text-primary-200">
                AccessiLearn
              </a>
            </h1>
            <div className="flex items-center gap-6">
              <ul className="flex gap-6 list-none m-0">
                <li>
                  <a 
                    href="/AccessiLearn/" 
                    className="text-white no-underline hover:text-primary-200 hover:underline focus:text-primary-200"
                  >
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a 
                    href="/AccessiLearn/modules/" 
                    className="text-white no-underline hover:text-primary-200 hover:underline focus:text-primary-200"
                  >
                    {t.nav.modules}
                  </a>
                </li>
              </ul>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </header>
      <main id="main-content" className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-slate-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 AccessiLearn. {t.footer.madeWith} ❤️ {t.footer.built}</p>
        </div>
      </footer>
    </>
  );
}
