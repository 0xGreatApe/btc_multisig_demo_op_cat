import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function blog() {
  return (
    <>
      <Layout>
        <Head>
          <title> Lorump Ipsum Puddings multi-sig - Blog </title>
          {/* <meta name="description" content="noindex,nofollow" /> */}
        </Head>
        <Flex justifyContent="center" direction="column">
          <Heading
            as="h2"
            fontSize="5rem"
            color="brand.0"
            fontWeight="medium"
            size="lg"
            p="2rem"
            mb="1rem"
            textAlign="center"
          >
            Blog
          </Heading>

          <Box
            display="flex"
            p="2px 0px 10px 0px"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/product_makers_background.png"
              alt="Image"
              borderRadius="10px"
              w="1200px"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
            >
              <Heading
                as="h2"
                fontSize="5rem"
                color="brand.0"
                fontWeight="medium"
                size="lg"
                p="32rem"
                mb="10rem"
                textAlign="center"
                boxShadow="xl"
              >
                COMING SOON
              </Heading>
            </Box>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
