/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fb: "#1877F2",
                light: {
                    bg: "#F0F2F5",
                    card: "#FFFFFF",
                    text: "#050505",
                    text2: "#65676B",
                    hover: "#E4E6EB",
                    border: "#CED0D4",
                    error: "#E41E3F",
                    success: "#31A24C",
                    link: "#1877F2"
                },
                dark: {
                    bg: "#18191A",
                    card: "#242526",
                    text: "#E4E6EB",
                    text2: "#B0B3B8",
                    hover: "#3A3B3C",
                    border: "#3E4042",
                    error: "#F02849",
                    success: "#42B72A",
                    link: "#2D88FF"
                },
            },
        },
    },
    plugins: [],
}
