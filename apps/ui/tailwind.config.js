/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        "custom-gray": "#C5C7CA",
        "custom-black": "#7F8084",
        "custom-light-gray": "#35373B",
        "custom-dark-black": "#191920",
        "custom-blue": "#4A96FF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
