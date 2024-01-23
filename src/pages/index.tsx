import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout/Layout";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import DarkBackground from "@/components/DarkBackground/DarkBackground";
import TestimonialsCarousel from "@/components/TestimonialCarousel/TestimonialCarousel";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const handleLinkClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <Layout>
        <Head>
          <title>Multisig on Bitcoin Using OP_CAT</title>
          <meta
            name="description"
            content="Using OP_CAT to enable complex multisig operations natively on the bitcoin network"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" />
        </Head>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          p={{ base: "2rem", md: "4rem 2rem" }}
          textAlign={{ base: "center", md: "left" }}
          id="intro"
        >
          <Box p={5}>
            <Heading
              className="header-hero"
              fontSize={{ base: "2rem", md: "2.7rem" }}
              lineHeight={{ base: "2.8rem", md: "6.8rem" }}
              padding={{ base: "1rem 0", md: "0" }}
            >
              Lorum Ipsum Puddings: OP_CAT applications using multi-sig wallets
            </Heading>
            <Heading mb={4} color="brand.0">
              Introduction to Multi-Signature Wallets
            </Heading>
            <Text fontSize={["sm", "md"]} mb={3} color="brand.0">
              Multi-signature wallets are the digital equivalent to a multi-key
              safe. They require the consent of multiple key holders to
              authorize transactions. This system is essential for businesses
              aiming to use bitcoin and its network to manage their internal
              financial system. Multi-signature authorization for business
              transactions is very common in traditional business settings,
              where financial governance demands checks and balances.
            </Text>
            <Text fontSize={["sm", "md"]} mb={3} color="brand.0">
              In the context of Bitcoin, these wallets are already supported
              natively through the OP_CHECKMULTISIG opcode, which allows
              transactions to require multiple signatures for validation.
            </Text>
            <Text fontSize={["sm", "md"]} mb={3} color="brand.0">
              Currently, Bitcoin&apos;s native multi-sig capabilities, while
              functional, are somewhat limited in flexibility, leading
              businesses to rely on third-party solutions, which has the
              potential to introduce security risks. This paper proposes using
              OP_CAT to enhance Bitcoin&apos;s native multi-signature
              capabilities, aiming to provide a more robust, native solution for
              business wallets.
            </Text>

            <Heading mb={4} color="brand.0">
              The Role of OP_CAT in Multi-Signature Wallets
            </Heading>
            <Text fontSize={["sm", "md"]} mb={3} color="brand.0">
              Functionality of OP_CAT: In Bitcoin&apos;s scripting language,
              OP_CAT is used for concatenating two strings or data elements. In
              multi-signature scenarios, these elements are typically the public
              keys and signatures required for transaction authorization.
              OP_CAT&apos;s ability to merge these elements is essential for
              forming the complex script conditions needed in multi-sig
              transactions.
            </Text>
            <Text fontSize={["sm", "md"]} mb={3} color="brand.0">
              Enhancing Script Flexibility: OP_CAT re-introduces a degree of
              flexibility to Bitcoin scripting, allowing for more sophisticated
              transaction types. This is particularly relevant for businesses
              that require elaborate and secure transaction protocols, as OP_CAT
              allows for more dynamic script conditions than what is currently
              possible with OP_CHECKMULTISIG.
            </Text>
          </Box>
        </Flex>
        {/* Benefits of OP_CAT*/}
        <Flex
          id="benefits"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            className="heading2"
            fontSize={["4xl", "6xl"]}
            padding="3rem 0rem 3rem 0rem"
          >
            Benefits Of OP_CAT
          </Heading>
          <SimpleGrid
            className={styles.simpleGrid}
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing="2rem"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center" // Center the text within the box
            >
              <Image src="scripting.svg" alt="scripting icon" width="150px" />
              <Heading color="brand.200" margin="1.5rem" size="xl">
                Enhanced Scripting
              </Heading>
              <Text fontSize={["sm", "md"]} color="brand.0">
                Seamlessly concatenate values on Bitcoin&apos;s blockchain for
                more complex and versatile scripts.
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center" // Center the text within the box
            >
              <Image src="transact.svg" alt="transacting icon" width="150px" />
              <Heading color="brand.200" margin="1.5rem" size="xl">
                Flexible Transactions
              </Heading>
              <Text fontSize={["sm", "md"]} color="brand.0">
                Enable dynamic transaction structures and multi-condition smart
                contracts with ease..
              </Text>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center" // Center the text within the box
            >
              <Image src="quantum.svg" alt="Quantum svg" width="150px" />
              <Heading color="brand.200" margin="1.5rem" size="xl">
                Quantum Resistance
              </Heading>
              <Text fontSize={["sm", "md"]} color="brand.0">
                Facilitate post-quantum cryptographic methods like Lamport
                Signatures for future-proof security
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
        {/* Techniccal IMplementation */}
        <Flex
          padding={{ base: "2rem 0rem 2rem 0rem", md: "6rem 0rem" }}
          id="demo"
        >
          <DarkBackground>
            {/* Right Column */}
            <Box
              p={{ base: "2rem 0rem 2rem 0rem", md: "3rem 10rem 3rem 10rem" }}
            >
              <Heading
                fontSize="6xl"
                color="white"
                textAlign={{ base: "center", md: "center" }}
              >
                Technical Application using complex MultiSig
              </Heading>
              <Text
                color="brand.0"
                fontSize={["md", "lg"]}
                mt="1rem"
                textAlign="center"
              >
                Now, let&apos;s consider a more complex scenario where a
                business needs a flexible multi-sig setup. For example, a
                company might require different combinations of signatures based
                on transaction types or amounts. Here, OP_CAT can dynamically
                assemble these signature combinations. Furthermore, as a
                business evolves, this script needs to be dynamic as transaction
                conditions or hierarchical changes occur within the
                organization.
              </Text>
            </Box>
          </DarkBackground>
        </Flex>
        ;{/* How I can Help section*/}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            className="heading2"
            fontSize={["2xl", "6xl"]}
            padding="0rem 0rem 3rem 0rem"
          >
            Other Potential Applications
          </Heading>
          <SimpleGrid
            className={styles.simpleGrid}
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing="1rem"
          >
            <DarkBackground>
              <Heading
                color="brand.200"
                margin="1.5rem"
                size="md"
                textAlign="center"
              >
                Bitstream Protocol Implementation
              </Heading>
              <Text
                margin="2rem 1.5rem 1.5rem 1.5rem"
                fontSize={["sm", "md"]}
                color="brand.0"
                textAlign="center"
              >
                A Bitstream Protocol model enabling Bitcoin-paid decentralized
                file hosting through atomic swaps for decryption keys.
              </Text>
            </DarkBackground>

            <DarkBackground>
              <Heading
                color="brand.200"
                margin="1.5rem"
                size="md"
                textAlign="center"
              >
                Tree Signature <br /> Simulation
              </Heading>
              <Text
                margin="2rem 1.5rem 1.5rem 1.5rem"
                fontSize={["sm", "md"]}
                color="brand.0"
                textAlign="center"
              >
                A simplified model of a multisignature script using tree
                signatures, which can encode complex spending conditions.
              </Text>
            </DarkBackground>

            <DarkBackground>
              <Heading
                color="brand.200"
                margin="1.5rem"
                size="md"
                textAlign="center"
              >
                Vaults with Enhanced Security
              </Heading>
              <Text
                fontSize={["sm", "md"]}
                margin="2rem 1.0rem 1.5rem 1.5rem"
                color="brand.0"
                textAlign="center"
              >
                Constructing Bitcoin vaults that prevent a malicious party from
                accessing funds even if they have the private key.
              </Text>
            </DarkBackground>
          </SimpleGrid>
        </Flex>
        <Flex id="community-voices" margin="3rem 0rem 1.5rem 0rem">
          <DarkBackground>
            <Heading
              className="heading2"
              fontSize={["4xl", "6xl"]}
              padding="2rem 0rem 2rem 0rem"
            >
              Community Voices
            </Heading>
            <Flex
              justifyContent="center"
              alignItems="center"
              padding="0rem 0rem 2rem 0rem"
            >
              <TestimonialsCarousel />
            </Flex>
          </DarkBackground>
        </Flex>
      </Layout>
    </>
  );
}
