module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "bookmark-purple":'#5267DF',
        "bookmark-red":"#FA5959",
        "bookmark-blue":"#242A45",
        "bookmark-grey":"#9194A2",
        "bookmark-white":"#f7f7f7",
        "gradient":"#FF7A7A",
        "pub":"#F17228",
        "how":"#FFCE67",
        "much":"#FDEDCA",
        "fond":"#FEFAF1",
        "button":"#231900",
        "coloré":"#FFCC00",
        "back":"#f2f2f2"
      },fontFamily:{
        body:['Nunito'],
        Poppins:['Poppins,sans-serif'],
        Source:['"Source Sans Pro"'],
        open:['"Open Sans"']
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        lga:'531px',
        lgm:'560px',
        xl: '1300px',
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
