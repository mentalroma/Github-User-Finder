/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['lexend deca', 'sans-serif'],
        'grandstander': ['Grandstander', 'cursive'],
        'lexend': ['Lexend', 'sans-serif'],
        },
      },
  plugins: [],
  }
}