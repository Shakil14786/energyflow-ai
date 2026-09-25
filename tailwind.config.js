/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#050816',
        surface: '#0A0F24',
        card: '#0D1330',
        line: '#1B2242',
        primary: {
          DEFAULT: '#3B82F6',
          dim: '#2563EB',
        },
        accent: '#22D3EE',
        success: '#10B981',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        flow: {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        nodeGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 0px rgba(34,211,238,0.6))' },
          '50%': { filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.9))' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        drift: 'drift 6s ease-in-out infinite',
        flow: 'flow 3s linear infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        nodeGlow: 'nodeGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
