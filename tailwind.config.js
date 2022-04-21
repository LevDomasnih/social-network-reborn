module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TT Norms"', 'sans-serif']
      }
    },
    fontSize: {
      sm: ['12px', '16px'],
      base: ['14px', '17px'],
      lg: ['16px', '19px'],
      xl: ['18px', '21px'],
      '2xl': ['18px', '21px'],
      '3xl': ['24px', '30px'],
      '4xl': ['32px', '38px'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
