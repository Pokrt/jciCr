/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#EDBE38",
          "secondary": "#3A67B1",
          "accent": "#0097D7",
          "neutral": "#56BDA3",
          "base-100": "#0A0F29",
          "info": "#73D2F2",
          "success": "#0D6351",
          "warning": "#EDC35A",
          "error": "#E34F58",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

