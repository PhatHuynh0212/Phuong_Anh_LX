/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px", // thay vì 640px
        md: "768px", // thay vì 768px
        lg: "1024px", // thay vì 1024px
        xl: "1280px", // thay vì 1280px
        "2xl": "1420px", // thay vì 1536px
      },
    },
    extend: {
      colors: {
        "pa-red": "#ea2e0e",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
