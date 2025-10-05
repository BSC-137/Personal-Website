/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'float-3d': 'float-3d 10s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 10s ease-in-out infinite',
      },
      keyframes: {
        'float-3d': {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-30px) translateZ(50px) rotateX(10deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

