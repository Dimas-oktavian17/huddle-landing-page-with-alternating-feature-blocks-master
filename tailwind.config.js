module.exports = {
  content: ["./huddle-landing-page-with-alternating-feature-blocks-master/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'opensans-sg': ['Open Sans', 'sans-serif'],
      'poppins-sg': ['Poppins', 'sans-serif']
    },
    extend: { 
      padding:{
        'hero-p':'0 0 16rem 0',
        '15':'4.5rem'
      },
      colors: {
        'pink-sg':'#ff52bf',
        'very-pale-cyan-sg':'#ebfbff',
        'very-dark-cyan-sg':'#00252e',
        'grayish-blue-sg':'#808d99',
      },
    },
  },
  plugins: [require("daisyui")],
    daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}
