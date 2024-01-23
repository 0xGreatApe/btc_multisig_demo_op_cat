import { extendTheme } from "@chakra-ui/react";
import { buttonStyles as Button } from "./components/buttonStyles";
const myTheme = extendTheme({
  colors: {
    brand: {
      0: "#f3f3f3", // Off-white
      20: "#e6c56f", // Light golden
      40: "#4b4b55", // Dark gray
      50: "#c5c5c5", // Light gray
      60: "#ae295c", // Deep rose
      70: "#772137", // Dark red
      80: "#8e183a", // Dark crimson
      100: "#1e1e1e", // Very dark gray
      200: "#F2A900", // Bitcoin Orange
      250: "#b86b6b", // Light rose
      300: "#66a357", // Moss green
      400: "#00a86b", // Vibrant green
      500: "#6441a5", // Purple
      600: "#ae295c", // Deep rose
      700: "#434045", // Charcoal gray
    },
  },

  fonts: {
    heading: `"Reenie Beanie", cursive`,
    body: `"Indie Flower", cursive`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "18px",
    sm: "20px",
    md: "24px",
    lg: "30px",
    xl: "36px",
    "2xl": "40px",
    "3xl": "46px",
    "4xl": "52px",
    "5xl": "58px",
    "6xl": "72px",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints: {
    base: "0em",
    sm: "29em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
  components: { Button },
});

export default myTheme;
