module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
    zIndex: {
      n1: "-1",
    },
    minWidth: {
      28: "7rem",
    },
  },
  plugins: [],
};
