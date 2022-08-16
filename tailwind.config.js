module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '2000px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'xs': { 'max': '420px' },
      // 'sm': { 'max': '640px' },
      // 'sm': { 'min': '40px' },
      'sm': {'max': '768px', 'min': '430px'},
    },
    extend: {},
  },
  plugins: [],
}
