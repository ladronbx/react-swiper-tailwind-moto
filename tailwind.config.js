/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.jsx', './src/**/*.css'],
  safelist: [
    'bg-0H3V08371',
    'bg-KD150GK009N',
    'bg-MaskGroup395',
    'bg-MaskGroup3951',
    'bg-MaskGroup3952',
    'bg-MaskGroup3953',
    'bg-MaskGroup410',
    'bg-ZONTESZ2125AZ5',
    'bg-zonteszt125negra12',
    'bg-亮银',
    'mix-blend-multiply',
    'bg-padding-box',
    'opacity-64',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
      },
      colors: {
        'custom-blue': '#9bc4de',
        'custom-yellow': '#E2E200',
        'custom-black': '#151515',
        'custom-dark': '#000000',
        'custom-white': '#FFFFFF',
      },
      fontFamily: {
        'exo': ['"Exo 2"', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        '300': 300,
      },
      backgroundImage: theme => ({
        '0H3V08371': "url('../src/assets/build/img/0H3V08371.png')",
        'KD150GK009N': "url('../src/assets/build/img/KD150GK009N[1].png')",
        'MaskGroup395': "url('../src/assets/build/img/Mask Group 395.png')",
        'MaskGroup3951': "url('../src/assets/build/img/Mask Group 395-1.png')",
        'MaskGroup3952': "url('../src/assets/build/img/Mask Group 395-2.png')",
        'MaskGroup3953': "url('../src/assets/build/img/Mask Group 395-3.png')",
        'MaskGroup410': "url('../src/assets/build/img/Mask Group 410.png')",
        'ZONTESZ2125AZ5': "url('../src/assets/build/img/ZONTES-Z2-125-AZ-5.png')",
        'zonteszt125negra12': "url('../src/assets/build/img/zontes-zt-125-negra-12.png')",
        '亮银': "url('../src/assets/build/img/亮银 (7).png')",
        'taller': "url('../src/assets/build/img/taller.png')",
        'ruta': "url('../src/assets/build/img/motos-ruta.png')",
      }),
      fontSize: {
        '16': '16px',
        '40': '40px',
        '30': '30px',
        '75': '75px',
        '55': '55px',
        '25': '25px',
        '177': '177px',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        '0': '0px',
        '0.9': '0.9px',
      },
      lineHeight: {
        '30': '30px',
      },
      opacity: {
        '50': '0.5',
        '100': '1',
        '64': '0.64',
      },
      backgroundSize: {
        'padding-box': 'padding-box',
      },
      mixBlendMode: {
        'multiply': 'multiply',
      },
      width: {
        '70': '70%',
      },
      fontStyle: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'italic'],
    },
  },
  plugins: [],
}