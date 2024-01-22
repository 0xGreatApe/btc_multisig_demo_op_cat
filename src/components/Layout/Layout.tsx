import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../Navigation/Footer/Footer";
import Header from "../Navigation/Header/Header";
import React from "react";
import styles from "./Layout.module.css";
import Container from "../Container/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Buzzkill</title>
      </Head>
      <div className={styles.flex_background}>
        <Header />
        <Flex
          direction="column"
          width="100vw"
          minH="100vh"
          textAlign="center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            flex="1"
            bg="transparent"
            backgroundSize="cover"
            backgroundAttachment="fixed"
            display="flex"
            flexDirection="column"
          >
            <Container>{children}</Container>
          </Box>
          <Footer />
        </Flex>
      </div>
    </>
  );
}
