module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Hind"],
        title: ["Poppins"],
        body: ["Roboto"],
      },
      colors: {
        bg: "#0F172A",
        text2: "#778599",
        bg2: "#1E293B",
        special: "#7C87EF",
        title: "#CBD5E1",
        body: "#C1CBD7",
        sub: "#6F7D91",
        name: "#B7C1CD",
        pink: "#DF6AA9",
      },
      minWidth: {
        320: "320px",
      },
    },
  },
  plugins: [],
};
