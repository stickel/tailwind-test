module.exports = {
  theme: {
    extend: {
      colors: ({ theme }) => ({
        current: 'currentColor',
        inverse: 'theme(colors.white)',
        text: {
          light: '#22262A',
          muted: '#22262A',
          DEFAULT: '#22262A',
          dark: '#22262A',
          inverse: 'theme(colors.white)',
        },
        disabled: 'rgb( 170 170 170)',
        primary: {
          DEFAULT: '#012646',
          light: '#007ddc',
          disabled: '#b3e3ff',
          hover: '#0063b2',
          active: '#005492',
          50: '#eef8ff',
          100: '#ddf1ff',
          200: '#b3e3ff',
          300: '#70cfff',
          400: '#24b7ff',
          500: '#009eff',
          600: '#007ddc',
          700: '#0063b2',
          800: '#005492',
          900: '#024578',
          950: '#012646',
        },
        secondary: {
          DEFAULT: '#8cb8d1',
          light: '#e8eff6',
          disabled: '#ccdfeb',
          hover: '#6da6c3',
          active: '#4a8aad',
          50: '#f4f8fb',
          100: '#e8eff6',
          200: '#ccdfeb',
          300: '#8cb8d1',
          400: '#6da6c3',
          500: '#4a8aad',
          600: '#386f91',
          700: '#2f5975',
          800: '#2a4d62',
          900: '#274153',
          950: '#1a2a37',
        },
        action: {
          DEFAULT: '#4a7491',
          light: '#97b6c9',
          disabled: '#c2d4df',
          hover: '#40607a',
          active: '#395065',
          50: '#f2f6f9',
          100: '#dee9ef',
          200: '#c2d4df',
          300: '#97b6c9',
          400: '#6590ab',
          500: '#4a7491',
          600: '#40607a',
          700: '#395065',
          800: '#354655',
          900: '#2f3c4a',
          950: '#1c2530',
        },
        accent: {
          DEFAULT: '#337ab7',
          light: '#94bfe5',
          disabled: '#c6dbf1',
          hover: '#2666a3',
          active: '#205284',
          50: '#f3f7fc',
          100: '#e5eef9',
          200: '#c6dbf1',
          300: '#94bfe5',
          400: '#5b9ed5',
          500: '#337ab7',
          600: '#2666a3',
          700: '#205284',
          800: '#1e466e',
          900: '#1e3c5c',
          950: '#14273d',
        },
        info: {
          DEFAULT: '#4fafd1',
          light: '#7ec9e2',
          disabled: '#b3e0ee',
          hover: '#278db3',
          active: '#237297',
          50: '#eff9fc',
          100: '#d6f0f7',
          200: '#b3e0ee',
          300: '#7ec9e2',
          400: '#4fafd1',
          500: '#278db3',
          600: '#237297',
          700: '#235d7b',
          800: '#244d66',
          900: '#224157',
          950: '#122a3a',
        },
        success: {
          DEFAULT: '#539f37',
          light: '#99d680',
          disabled: '#c0e7af',
          hover: '#42852b',
          active: '#346625',
          50: '#f1f9ec',
          100: '#dff2d5',
          200: '#c0e7af',
          300: '#99d680',
          400: '#76c358',
          500: '#539f37',
          600: '#42852b',
          700: '#346625',
          800: '#2d5222',
          900: '#284720',
          950: '#12260d',
        },
        warning: {
          DEFAULT: '#d1ad33',
          light: '#dec866',
          disabled: '#eadf9e',
          hover: '#c49b2e',
          active: '#a87a26',
          50: '#faf9ec',
          100: '#f4f0cd',
          200: '#eadf9e',
          300: '#dec866',
          400: '#d1ad33',
          500: '#c49b2e',
          600: '#a87a26',
          700: '#875a21',
          800: '#714a22',
          900: '#613e22',
          950: '#382010',
        },
        error: {
          DEFAULT: '#cd1b1b',
          light: '#fea3a3',
          disabled: '#ffc9c9',
          hover: '#9c1818',
          active: '#811b1b',
          50: '#fef2f2',
          100: '#ffe1e1',
          200: '#ffc9c9',
          300: '#fea3a3',
          400: '#fb6e6e',
          500: '#f24141',
          600: '#e02222',
          700: '#cd1b1b',
          800: '#9c1818',
          900: '#811b1b',
          950: '#460909',
        },
        neutral: {
          DEFAULT: '#655c55',
          light: '#f6f5f5',
          'light-disabled': '#e9e6e4',
          'light-hover': '#d5cfcc',
          'light-active': '#b7aea9',
          disabled: '#d5cfcc',
          hover: '#554e49',
          active: '#4a4540',
          50: '#f6f5f5',
          100: '#e9e6e4',
          200: '#d5cfcc',
          300: '#b7aea9',
          400: '#92867e',
          500: '#776b63',
          600: '#655c55',
          700: '#554e49',
          800: '#4a4540',
          900: '#44403c',
          950: '#292623',
        },
      }),
      fontSize: {
        '2xs': '0.6875rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.62,.16,.13,1.01)',
        inertia: 'cubic-bezier(.5,-0.53,.14,1.23)',
      },
      gridTemplateColumns: {
        mobile: 'minmax(1fr, 500px)',
        desktop: '1fr minmax(1fr, 500px)',
      },
    },
  },
};