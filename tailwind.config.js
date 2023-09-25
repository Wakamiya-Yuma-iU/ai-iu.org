/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'fade-in-down': 'fade-in-down 1s',
        'fade-out-down': 'fade-out-down 1s'
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-1rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'fade-out-down': {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(1rem)' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};