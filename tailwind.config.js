/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E65AD',
                secondary: '#CF9B63',
            },
            fontFamily: {
                sans: ['Heebo', 'Inter', 'sans-serif'],
                display: ['"Bricolage Grotesque"', 'sans-serif'],
            },
            backgroundImage: {
                'hero-glow': 'radial-gradient(circle at center, rgba(30, 101, 173, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
            }
        },
    },
    plugins: [
        flowbite.plugin(),
    ],
}
