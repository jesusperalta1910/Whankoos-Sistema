module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Whankoos Brand Orange
        primary: {
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          200: "#fed7aa", // orange-200
          300: "#fdba74", // orange-300
          400: "#fb923c", // orange-400
          500: "#f57c22", // orange-500 - Main brand color
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
          DEFAULT: "#f57c22" // orange-500
        },
        // Secondary Colors - Deeper Orange
        secondary: {
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          200: "#fed7aa", // orange-200
          300: "#fdba74", // orange-300
          400: "#fb923c", // orange-400
          500: "#f97316", // orange-500
          600: "#e06b12", // orange-600 - Secondary brand color
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
          DEFAULT: "#e06b12" // orange-600
        },
        // Accent Colors - Professional Blue
        accent: {
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600 - Accent color
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
          DEFAULT: "#2563eb" // blue-600
        },
        // Background Colors
        background: "#fafafa", // gray-50
        surface: "#ffffff", // white
        // Text Colors
        text: {
          primary: "#1f2937", // gray-800
          secondary: "#6b7280" // gray-500
        },
        // Status Colors
        success: {
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          200: "#a7f3d0", // emerald-200
          300: "#6ee7b7", // emerald-300
          400: "#34d399", // emerald-400
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065f46", // emerald-800
          900: "#064e3b", // emerald-900
          DEFAULT: "#10b981" // emerald-500
        },
        warning: {
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          200: "#fde68a", // amber-200
          300: "#fcd34d", // amber-300
          400: "#fbbf24", // amber-400
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
          800: "#92400e", // amber-800
          900: "#78350f", // amber-900
          DEFAULT: "#f59e0b" // amber-500
        },
        error: {
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
          800: "#991b1b", // red-800
          900: "#7f1d1d", // red-900
          DEFAULT: "#ef4444" // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#e5e7eb", // gray-200
          light: "#f3f4f6" // gray-100
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace']
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'modal': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'floating': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'lg': '0 8px 30px rgba(0, 0, 0, 0.12)'
      },
      borderRadius: {
        'card': '8px',
        'button': '6px'
      },
      transitionDuration: {
        'fast': '150ms',
        'smooth': '200ms'
      },
      transitionTimingFunction: {
        'micro': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // ease-out
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' // ease-out
      },
      animation: {
        'scale-in': 'scaleIn 150ms ease-out',
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 200ms ease-out'
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.interactive-scale': {
          transition: 'transform 150ms ease-out',
          '&:hover': {
            transform: 'scale(1.02)'
          },
          '&:active': {
            transform: 'scale(0.98)'
          }
        },
        '.text-data': {
          fontFamily: 'JetBrains Mono, monospace'
        },
        '.transition-micro': {
          transition: 'all 150ms ease-out'
        },
        '.transition-smooth': {
          transition: 'all 200ms ease-out'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}