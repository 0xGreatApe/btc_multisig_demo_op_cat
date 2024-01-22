import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./DarkBackground.module.css";

interface DarkBackgroundProps {
  children: React.ReactNode;
}

export default function DarkBackground({ children }: DarkBackgroundProps) {
  return (
    <Box flex="1" className={styles.darkBackground} bg="rgba(10, 12, 14, 0.5)">
      {children}
    </Box>
  );
}
