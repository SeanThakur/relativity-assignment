/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      semibold: 600,
    },
    fontSize: {
      base: [
        "16px",
        {
          lineHeight: "32px",
          letterSpacing: "-0.01em",
          fontWeight: "600",
        },
      ],
      sm: [
        "12px",
        {
          lineHeight: "31px",
          fontWeight: "600",
        },
      ],
    },
    borderRadius: {
      none: "0",
      lg: "12px",
      xl: "16px",
      full: "100px",
    },
    extend: {
      colors: {
        primary: "#14172b",
        secondary: "#737BAE",
        secondaryBlue: "#ECF0FF",
        tertiarySuccess: "#00FFA3",
        tertiaryDanger: "#FF4D4D",
        primaryLinearGradient:
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)",
      },
    },
  },
  plugins: [],
};
