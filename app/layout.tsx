import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "AccessiLearn - 无障碍数字化学习平台 / Plateforme d'apprentissage de l'accessibilité numérique",
  description: "循序渐进学习 Web 无障碍开发的核心概念 / Maîtrisez les concepts clés de l'accessibilité Web par la pratique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
