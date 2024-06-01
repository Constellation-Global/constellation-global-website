/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#506FF4',
                secondary: '#222E64',
                negative: '#E82835',
                accent: '#8399E9',
                linegreen: '#79C7C5',
                ash: '#42526E',
            }
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light'], // true, or array of themes
    }
}

