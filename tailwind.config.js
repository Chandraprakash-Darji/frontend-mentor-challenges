/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-light":
                    "linear-gradient(to left,rgba(255,255,255,.55),rgba(255,255,255,.55)), url('/bg-test.jpg')",
                "hero-dark":
                    "linear-gradient(to left,rgba(31 ,41,55,.75),rgba(31,41,55,.75)) , url('/bg-test.jpg')",
            },
            fontFamily: {
                'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
                'PlayFairDisplay': ['"Playfair Display"','serif'],
              },
        },
    },
    plugins: [],
};
