import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const buttonStyles = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: "bold", // Normally, it is "semibold"
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  // 3. We can add a new visual variant
  variants: {
    "with-shadow": {
      bg: "red.400",
      boxShadow: "0 0 2px 2px #efdfde",
    },
    // 4. We can override existing variants
    solid: (props: StyleFunctionProps) => ({
      bg: props.colorMode === "dark" ? "red.300" : "red.500",
    }),
    // 5. We can add responsive variants
    "default-button": {
      background: "brand.200",
      margin: "5px",
      h: "50px",
      px: "70px",
      textAlign: "center",
      textTransform: "uppercase",
      transition: "0.5s",
      backgroundSize: "200% auto",
      color: "white",
      boxShadow: "0 0 10px #eee",
      borderRadius: "8px",
      border: "1px solid var(--chakra-colors-brand-70)",
      display: "flex", // Use flex display
      justifyContent: "center", // Center horizontally
      alignItems: "center", // Center vertically
      _hover: {
        backgroundPosition: "right center",
        color: "#fff",
        textDecoration: "none",
      },
      _active: {
        boxShadow: "none",
        transform: "scale(0.98)",
      },
    },
    "signout-button": {
      // "linear-gradient(to right, #20C8CE 0%, #6441a5 51%, #20C8CE 100%)" #131617
      background:
        "linear-gradient(to right, #C43338 0%, #ffbf00 51%, #C43338 100%)",
      margin: "5px",
      h: "50px", // Update py to my
      px: "70px",
      textAlign: "center",
      textTransform: "uppercase",
      transition: "0.5s",
      backgroundSize: "200% auto",
      color: "white",
      boxShadow: "0 0 10px #eee",
      borderRadius: "10px",
      display: "block",
      _hover: {
        backgroundPosition: "right center",
        color: "#fff",
        textDecoration: "none",
      },
      _active: {
        boxShadow: "none",
        transform: "scale(0.98)",
      },
    },

    // Add the new variant "btn-grad" based on the provided brand colors
    "button-gradient": {
      // "linear-gradient(to right, #20C8CE 0%, #6441a5 51%, #20C8CE 100%)"
      background:
        "linear-gradient(to right, #D66E36 0%, #6441a5 51%, #D66E36 100%)",
      margin: "5px",
      h: "50px", // Update py to my
      px: "70px",
      textAlign: "center",
      textTransform: "uppercase",
      transition: "0.5s",
      backgroundSize: "200% auto",
      color: "white",
      boxShadow: "0 0 10px #eee",
      borderRadius: "10px",
      display: "block",
      _hover: {
        backgroundPosition: "right center",
        color: "#fff",
        textDecoration: "none",
      },
      _active: {
        boxShadow: "none",
        transform: "scale(0.98)",
      },
    },
    "disabled-button": {
      // "linear-gradient(to right, #20C8CE 0%, #6441a5 51%, #20C8CE 100%)" #131617
      background:
        "linear-gradient(to right, #BBBBBB 0%, #DDDDDD 51%, #BBBBBB 100%)",
      margin: "5px",
      h: "50px", // Update py to my
      px: "70px",
      textAlign: "center",
      textTransform: "uppercase",
      transition: "0.5s",
      backgroundSize: "200% auto",
      color: "##FFFFFF",
      boxShadow: "0 0 10px #eee",
      borderRadius: "10px",
      display: "block",
    },
  },
  // 6. We can overwrite defaultProps
  defaultProps: {
    variant: "default-button", // default is solid
  },
};
