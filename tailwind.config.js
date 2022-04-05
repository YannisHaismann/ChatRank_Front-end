module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'bgDarkGreen': '#183027',
      'bgMiddleColor': '#0F1B1E',
      'bgLeftColor': '#0D0E1A',
      'circleFirst': '#3AA5BD',
      'circleSecond': '#3ABD8E',
      'cardGreen': '#278D3E',
      'cardBlue': '#27508D',
      'cardPink': '#E52755',
      'cardYellow': '#FAFF00',
      'cardOrange': '#FD9A21',
    }),
    extend: {
      inset: {
        twoPointfive: "2.5px",
        onePointHeight: "1.8px",
        '1/5': '20%',
        '1/6': '16.6%',
        '4/5': "80%",
      },
      colors: {
        darkA: "#0D0E1A",
        darkB: "#212333",
        darkC: "#12131A",
        darkBorder: "#434F65",
        mainA: "#39C5E3",
        secondText: '#C9D9DB',
        loose: '#B64C4C',
        win: '#4C83B6',
        error: '#E35555',
        orange: '#FD9A21',
      },
      borderRadius: {
        "20px": "1.25rem",
      },
      zIndex: {
        n1: "-1",
        '-10': '-10'
      },
      fontFamily: {
        "maven-black": "Maven Black",
        "maven-extra-bold": "Maven ExtraBold",
        "maven-bold": "Maven Bold",
        "maven-semi-bold": "Maven SemiBold",
        "maven-medium": "Maven Medium",
        "maven-regular": "Maven Regular",
      },
      fontSize: {
        "32px": "32px",
        "28px": "28px",
        "24px": "24px",
        "20px": "20px",
        "18px": "18px",
        "16px": "16px",
        "14px": "14px",
        "12px": "12px",
        "11px": "11px",
        "10px": "10px",
        "8px": "8px",
        "7px": "7px",
        "6px": "6px",
        "5px": "5px",
      },
      screens: {
        'tablet': { 'raw': '(orientation: portrait) and (min-height: 764px), (min-width: 1024px)' },
        'desktop': "1024px",
        'largeScreen': '1280px',
        'veryLargeScreen': '1536px',
      },
      minWidth: {
        '0': '0',
        '6rem': '6rem',
        28: "7rem",
      },
      maxHeight: {
        '410px': '410px',
      },
      height: {
        '27rem': '27rem',
        '30rem': '30rem',
        '36rem': '36rem',
        '38rem': '38rem'
      },
      width: {
        '27rem': '27rem',
        '34rem': '34rem',
      }
    },
  },
  plugins: [],
};
