/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        blank: "",
        neumo: "1px 1px 5px #c5c5c5, -1px -1px 5px #ffffff",
        neumoin:
          "inset 1px 1px 3px rgba(0,0,0,0.25), inset -1px -1px 3px rgba(255,255,255,0.8)",
      },
    },
  },
  plugins: [],
};
