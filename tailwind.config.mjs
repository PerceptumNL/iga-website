/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'iga-blue': '#95BCF8',
        'iga-grey': '#E1E1E1',
        'iga-black': '#000000',
        'iga-white': '#FFFFFF',
        'iga-blue-dark': '#6B9BE8',
        'iga-blue-light': '#B8D4FB',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
