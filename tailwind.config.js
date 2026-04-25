/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ip-orange':   '#ff6a00',
        'ip-orange-l': '#ffa033',
        'ip-bg':       '#080808',
        'ip-alt':      '#0d0d0d',
        'ip-alt2':     '#121212',
        'ip-sec':      '#cfcfcf',
        'ip-border':   'rgba(255,106,0,0.2)',
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        lora:   ['Lora', 'Georgia', 'serif'],
      },
      maxWidth: { content: '1200px' },
      letterSpacing: { tightest: '-0.05em' },
    },
  },
  plugins: [],
}
