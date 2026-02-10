/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
    extend: {
    colors: {
        'primary-red': '#ff2021',
        'primary-orange': '#ff6200',
        'text-light': '#fff7f2',
        'base-white': '#f9f9f9',
        'background-dark-grey': '#1a1a1a',
        'background-card': '#1f1f1f',
    },
    fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
    },
    clipPath: {
        'diagonal': 'polygon(0 0, 101% 100%, 0 101%)',
        'diagonal-reverse': 'polygon(-0.2% -0.2%, 100% 100%, 100% -0.2%)',
        'incline-tag': 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
    }
    },
},
plugins: [],
}