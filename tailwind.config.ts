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
        "warm-ivory": "#F4EFE5",
        "deep-walnut": "#2B241F",
        "burnt-clay": "#9A432E",
        "muted-green": "#2F6B4F",
        "soft-white": "#FFFDF8",
      },
      fontFamily: {
        serif: ["MaruBuri", "Nanum Myeongjo", "Batang", "serif"],
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        caption: ["13px", { lineHeight: "1.55", letterSpacing: "0" }],
        support: ["15px", { lineHeight: "1.70", letterSpacing: "0" }],
        body: ["16px", { lineHeight: "1.70", letterSpacing: "0" }],
        lead: ["18px", { lineHeight: "1.70", letterSpacing: "0" }],
        h3: ["24px", { lineHeight: "1.36", letterSpacing: "-0.02em" }],
        h2: ["34px", { lineHeight: "1.32", letterSpacing: "-0.02em" }],
        h1: ["44px", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
