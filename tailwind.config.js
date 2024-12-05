/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Si usas el directorio app
    "./pages/**/*.{js,ts,jsx,tsx}", // Si usas el directorio pages
    "./components/**/*.{js,ts,jsx,tsx}", // Componentes reutilizables
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

