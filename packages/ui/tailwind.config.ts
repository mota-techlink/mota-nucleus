import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}", // 扫描本包内的组件
    "../../apps/**/*.{ts,tsx}" // 扫描外部 App (如果需要)
  ],
  theme: {
    extend: {
      colors: {
        // 这里未来会定义 MOTA 的品牌色
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      }
    },
  },
  plugins: [],
};
export default config;