/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Plus Jakarta Sans', 'sans-serif'],
            'display': ['Plus Jakarta Sans', 'sans-serif'],
        },
        extend: {
            colors: {
                'jci-blue': '#0097D7',
                'jci-black': '#130F2D',
                'jci-white': '#FFFFFF',
                'jci-navy': '#1F4789',
                'jci-teal': '#57BCBC',
                'jci-yellow': '#EFC40F',
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}

