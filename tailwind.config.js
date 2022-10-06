/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                VerdeClaro: {
                    100: '#87DFD6',
                },
            },
        },
        fontFamily: {
            FontGeral: ['Chakra Petch', 'sans-serif'],
        },
        boxShadow: {
            'neon-green': '0px 0px 10px #87DFD6',
        },
    },
    plugins: [],
};
