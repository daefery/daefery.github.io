import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080c14",
        "bg-subtle": "#0d1220",
        "bg-card": "#0f1520",
        "bg-card-hover": "#131a28",
        accent: "#63c988",
        "accent-light": "#8edba8",
      },
      fontFamily: {
        sans: ["Albert Sans", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "800px",
      },
    },
  },
  plugins: [],
};

export default config;
