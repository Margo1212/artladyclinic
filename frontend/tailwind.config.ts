import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../frontend/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../frontend/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      "dark-blue": "#0E0045",
      blue: "#001965",
      "light-blue": "#36357E",
      "light-gray": "#F9F9F9",
      white: "#ffffff",
      "dark-gray": "#303030",
      gray: "#8492a6",
      alert: "#dc2626",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        gallery: "1fr 1fr 1fr",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
export default config;
