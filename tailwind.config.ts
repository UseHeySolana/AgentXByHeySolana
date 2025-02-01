import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
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
        purple: "",
        footergrey: "#6D6D6D",
        darkpink: "#971BB2",
        lightpink: "#ED9AFF",
      },
    },
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;
