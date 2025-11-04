import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // 使用系统偏好设置
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#0ea5e9',
          700: '#0284c7',
          800: '#0369a1',
          900: '#075985',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
