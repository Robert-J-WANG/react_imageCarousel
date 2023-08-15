/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#364f6b",
        bgColor: "rgba(233, 94, 133,0.5)",
      },
    },
  },
  plugins: [],
};
