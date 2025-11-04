'use client';

import { useLanguage } from '../../i18n/LanguageContext';
import { moduleContent } from '../../data/moduleContent';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

interface ModuleClientProps {
  slug: string;
}

export default function ModuleClient({ slug }: ModuleClientProps) {
  const { language, t } = useLanguage();
  
  const content = moduleContent[slug as keyof typeof moduleContent];
  if (!content) {
    return <div>Module not found</div>;
  }

  const moduleData = content[language];
  
  return (
    <div className="max-w-4xl mx-auto">
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {moduleData.theory}
        </ReactMarkdown>
      </article>

      <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary-700 dark:text-primary-400">
          {t.challenge.practiceChallenge}
        </h2>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
          {moduleData.challengeTitle}
        </h3>
        <p className="text-gray-900 dark:text-gray-100 mb-6 whitespace-pre-line">
          {moduleData.challengeInstructions}
        </p>
        <a
          href={`/AccessiLearn/challenge/${slug}/`}
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:bg-primary-700 transition-colors no-underline"
        >
          {t.challenge.startChallenge}
        </a>
      </div>
    </div>
  );
}
