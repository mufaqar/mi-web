module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat' : ['Montserrat' , 'sans-serif'],
        'Raleway' : ['Raleway' , 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0px 0px 15px 0px rgb(0 0 0 / 8%)',
      },
      colors: {
        'customPink': '#0d47a1',
      },
      animation: {
        animHr: 'animation1 1s ease',
        servicesIcon: "animation2 1s ease",
        animBefore: "width 1s ease , height 1s ease ",
        videoIcon: 'pulse 3s infinite',
      },
      keyframes: ({
        animation1: {
          '0%': { width: '80px' },
          '50%': { width: '30px' },
          '75%': { width: '100px' },
          '100%': { width: '40px' },
        },        
        animation2: {
          "25%": {
            transform: "scale(.5)",
          },
          "50%": {
            transform: "scale(.8)",
          },
          "100%": {
            transform: "scale(.5)",
          },
        },
        width: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "50%",
          },
        },
        height: {
          "0%": {
            height: "0%",
          },
          "100%": {
            height: "50%",
          },
        },
          
        pulse : {
          '0%': { boxShadow: "0 0 1 0 rgb(189 113 255/ 70%) "},
          '25%': {  boxShadow: "0px 0px 3px 1px rgb(189 113 255 / 70%)"},
          '50%': {  boxShadow: "0px 0px 6px 3px rgb(189 113 255/ 70%)" , opacity: "1"},
          '100%': {  boxShadow: "0px 0px 10px 6px rgb(189 113 255/ 70%)"} ,
        },      

      }),
      
    },
  },

  variants: {
    extend: {
      scale: ['active', 'group-hover' , 'group-before'],
      rotate: ['group-hover '],
      inset: ['hover', 'group-hover', 'group-before'],
      
    },
  },

  plugins: [],
}
