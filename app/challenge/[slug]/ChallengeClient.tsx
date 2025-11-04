'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { moduleContent } from '../../data/moduleContent';
import { challengeData } from '../../data/challengeData';

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

interface ChallengeClientProps {
  slug: string;
}

export default function ChallengeClient({ slug }: ChallengeClientProps) {
  const { language, t } = useLanguage();
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState<CheckResult[]>([]);
  const [showSolution, setShowSolution] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);
  
  const moduleData = moduleContent[slug as keyof typeof moduleContent]?.[language];
  const challenge = challengeData[slug as keyof typeof challengeData]?.[language];
  
  // Initialize code when challenge data is available
  useEffect(() => {
    if (challenge) {
      setCode(challenge.initialCode);
    }
  }, [challenge]);
  
  if (!moduleData || !challenge) {
    return <div>Challenge not found</div>;
  }

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
      <h2 className="text-3xl font-bold mb-4">{moduleData.challengeTitle}</h2>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
        <h3 className="font-bold mb-2">{t.challenge.requirements}</h3>
        <p className="whitespace-pre-line text-gray-900 dark:text-gray-100">{moduleData.challengeInstructions}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* 编辑器 */}
        <section>
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">{t.challenge.codeEditor}</h3>
            <div className="space-x-2">
              <button
                onClick={resetCode}
                className="px-4 py-2 bg-gray-600 dark:bg-gray-500 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-400 focus:bg-gray-700 dark:focus:bg-gray-400"
              >
                {t.challenge.reset}
              </button>
              <button
                onClick={loadSolution}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:bg-yellow-600"
              >
                {t.challenge.viewSolution}
              </button>
            </div>
          </div>
          
          <textarea
            value={code}
            onChange={handleCodeChange}
            className="w-full h-96 p-4 font-mono text-sm border-2 border-gray-300 dark:border-gray-600 rounded focus:border-primary-500 focus:outline-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            spellCheck={false}
          />

          <div className="mt-4 space-x-2">
            <button
              onClick={updatePreview}
              className="px-6 py-2 bg-primary-600 text-white rounded font-semibold hover:bg-primary-700 focus:bg-primary-700"
            >
              {t.challenge.updatePreview}
            </button>
            <button
              onClick={checkAccessibility}
              className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 focus:bg-green-700"
            >
              {t.challenge.checkA11y}
            </button>
          </div>

          {/* 反馈区域 */}
          {feedback.length > 0 && (
            <div className="mt-6">
              <h4 className="font-bold mb-3">{t.challenge.results}</h4>
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
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-700 rounded">
                  <p className="text-green-800 dark:text-green-300 font-bold text-lg">
                    {t.challenge.congratulations}
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 预览 */}
        <section>
          <h3 className="text-xl font-bold mb-4">{t.challenge.preview}</h3>
          <div className="border-2 border-gray-300 dark:border-gray-600 rounded p-4 bg-white dark:bg-gray-800 min-h-96 preview-content">
            <div 
              key={previewKey}
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded">
            <p className="text-sm text-gray-900 dark:text-gray-100">
              💡 <strong>{t.challenge.hint}</strong>：{t.challenge.hintText}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
