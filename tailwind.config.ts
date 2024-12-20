import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#3B82F6',
        'primary-100':'#E0F2FE',
        CBlack:'#020617',
        CGrey:'#94A3B8',
        CBackGroundGrey:'#F8FAFC'
      },
      boxShadow: {
        'custom': '0px 0px 8px 0px rgba(59, 130, 246, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
