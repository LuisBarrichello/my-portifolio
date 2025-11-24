/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['var(--font-poppins)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                brand: '#00d2df',
                'gray-custom': '#222',
                'dark-10': '#121212',
                'dark-20': '#151515',
                'dark-30': '#c4c4c4',
                text: '#e0e0e0',
                'brand-purple': '#9358f7',
                'brand-red': '#d24074',
                'brand-blue': '#10d7e2',
                'brand-purple-dark': '#6518b4',
                'brand-blue-50': '#ebfffe',
                'brand-blue-100': '#ceffff',
                'brand-blue-200': '#a2fdff',
                'brand-blue-300': '#63f8fd',
                'brand-blue-400': '#1ceaf4',
                'brand-blue-500': '#00d2df',
                'brand-blue-600': '#03a4b7',
                'brand-blue-700': '#0a8294',
                'brand-blue-800': '#126878',
                'brand-blue-900': '#145665',
                'brand-blue-950': '#063a46',
            },
            padding: {
                desktop: '2.4rem 6.4rem',
                tablet: '2rem 4rem',
                mobile: '1.5rem',
            },
        },
    },
    plugins: [],
};
