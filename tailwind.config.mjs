/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        custb : '#131313',
        line : '#222222'
      },
      fontFamily: {
        vt323: ['VT323', 'monospace'],
        jet: ['jetbrains-mono', 'monospace'],
        poppins: ['poppins', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}