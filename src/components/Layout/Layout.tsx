import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../Navigation/Footer/Footer";
import Header from "../Navigation/Header/Header";
import React from "react";
import styles from "./Layout.module.css";
import useMeasureHeight from "../../hooks/useMeasureHeight";
import Container from "../Container/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { ref, headerHeight } = useMeasureHeight();

  // Calculate the minimum content height
  const minContentHeight = `calc(100vh - ${headerHeight}px - 10vh)`; // 10vh or any desired minimum height

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Pudding DAO</title>
      </Head>
      <Box
        ref={ref}
        position="sticky"
        top="0"
        left="0"
        right="0"
        width="100%" // Full width
        zIndex={9999} // Ensure proper stacking context
        overflow="visible"
      >
        <Header />
      </Box>
      <Flex className={styles.flex_background}>
        <Flex
          direction="column"
          width="100%"
          minH={`calc(100vh - ${headerHeight}px)`}
          textAlign="center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            flex="1"
            minH={minContentHeight} // Set the minimum height of the content
            bg="transparent"
            backgroundSize="cover"
            width="100%"
            backgroundAttachment="fixed"
            display="flex" // Make the content a flex container
            flexDirection="column" // Set the direction to column
          >
            <Container>{children}</Container>
          </Box>
          <Footer />
        </Flex>
      </Flex>
    </>
  );
}
