import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Container from "../Container/Container";
import Footer from "../Navigation/Footer/Footer";
import Header from "../Navigation/Header/Header";
import React from "react";
import styles from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ... */}
      <div className={styles.flex_background}>
        <Header />
        <Container size="default" withPadding={true}>
          <Flex
            direction="column"
            minH="140vh"
            justifyContent={{ base: "center", md: "unset" }}
            padding={{ md: "0 7rem" }} // Add the padding on desktop view
          >
            <Box
              bg="transparent"
              backgroundSize="cover"
              backgroundAttachment="fixed"
            >
              {children}
            </Box>
          </Flex>
        </Container>
        <Footer />
      </div>
    </>
  );
}
