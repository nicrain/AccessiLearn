import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AccessiLearn - 无障碍数字化学习平台",
  description: "循序渐进学习 Web 无障碍开发的核心概念",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded">
          跳转到主内容
        </a>
        <header className="bg-primary-700 text-white shadow-lg">
          <nav className="container mx-auto px-4 py-4" aria-label="主导航">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                <a href="/AccessiLearn/" className="text-white no-underline hover:text-primary-200">
                  AccessiLearn
                </a>
              </h1>
              <ul className="flex gap-6 list-none m-0">
                <li>
                  <a 
                    href="/AccessiLearn/" 
                    className="text-white no-underline hover:text-primary-200 hover:underline focus:text-primary-200"
                  >
                    首页
                  </a>
                </li>
                <li>
                  <a 
                    href="/AccessiLearn/modules/" 
                    className="text-white no-underline hover:text-primary-200 hover:underline focus:text-primary-200"
                  >
                    学习模块
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main id="main-content" className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-slate-800 text-white mt-16 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 AccessiLearn. 致力于推广 Web 无障碍。</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
