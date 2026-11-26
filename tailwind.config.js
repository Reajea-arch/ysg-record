/** Tailwind CSS 构建配置（本地生成 assets/tailwind.css 用） */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        herbal: {
          50: '#F1F6F2',
          100: '#E3EEE6',
          200: '#C9DFCF',
          300: '#A6C7B0',
          500: '#4A7C59',
          600: '#3D6A4B',
          700: '#315640'
        },
        wood: {
          50: '#FAF5EF',
          100: '#F3E9DE',
          300: '#D9BFA3',
          500: '#B08968',
          600: '#966F4F'
        },
        paper: '#F8F6F0'
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 24px -12px rgba(74, 124, 89, 0.35)'
      }
    }
  },
  plugins: []
};
