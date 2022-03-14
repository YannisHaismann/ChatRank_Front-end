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
        "14px": "14px",
        "8px": "8px",
      },
    },
  },
  plugins: [],
};
