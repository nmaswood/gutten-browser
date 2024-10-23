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
        background: "var(--background)",
        foreground: "var(--foreground)",
        guttenCream: "var(--gutten-cream)",
        guttenBlue: "var(--gutten-blue)",
        guttenDarkBlue: "var(--gutten-dark-blue)",
        guttenGreen: "var(--gutten-green)",
        guttenText: "var(--gutten-text)",
        guttenMutedText: "var(--gutten-muted-text)",
        guttenRing: "var(--gutten-ring)",
      },
    },
  },
  plugins: [],
};
export default config;
