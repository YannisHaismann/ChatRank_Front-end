module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        twoPointfive: "2.5px",
        onePointHeight: "1.8px",
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
      },
      borderRadius: {
        "20px": "1.25rem",
      },
      zIndex: {
        n1: "-1",
      },
      minWidth: {
        28: "7rem",
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
        "20px": "20px",
        "14px": "14px",
        "12px": "12px",
        "10px": "10px",
        "8px": "8px",
        "6px": "6px",
      },
      screens: {
        'tablet': { 'raw': '(orientation: portrait) and (min-height: 764px), (min-width: 1024px)' },
        desktop: "1024px",
      },
      minWidth: {
        '0': '0',
        '6rem': '6rem',
       }
    },
  },
  plugins: [],
};
