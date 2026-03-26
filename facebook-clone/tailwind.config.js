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
                fb: "#1877F2", // Official Facebook Blue
                light: {
                    bg: "#F0F2F5",
                    card: "#FFFFFF",
                    text: "#050505",
                    text2: "#65676B",
                    hover: "#E4E6EB",
                    border: "#CED0D4",
                    error: "#E41E3F",
                    success: "#31A24C", // Facebook Green
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
            boxShadow: {
                fb: '0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
                card: '0 1px 2px rgba(0, 0, 0, 0.2)',
            },
            borderRadius: {
                'fb': '8px',
            }
        },
    },
    plugins: [],
}
