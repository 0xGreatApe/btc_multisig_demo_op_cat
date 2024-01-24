import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout/Layout";
import { TwitterTweetEmbed } from "react-twitter-embed";
import CodeSnippet from "@/components/CodeSnippet";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
  SimpleGrid,
  VStack,
  Center,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import DarkBackground from "@/components/DarkBackground/DarkBackground";
import TestimonialsCarousel from "@/components/TestimonialCarousel/TestimonialCarousel";
import { useState } from "react";
import MultiSigForm from "@/components/MultiSigForm";
import VideoFrame from "@/components/VideoFrame";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const handleLinkClick = () => {
    setIsClicked(true);
  };

  const codeStringBasicMultisig: string = `
  // Pseudo-code for a basic 2-of-3 
  // multi-sig transaction using OP_CHECKMULTISIG
  <Public Key A>
  <Public Key B>
  <Public Key C>
  3
  <Signature A>
  <Signature B>
  2
  OP_CHECKMULTISIG

  `;
  const codeStringMultisigComplex: string = `
  // High-value transaction script (pre-defined)
  <Public Key CFO> <Public Key CEO> 2 
  <Signature CFO> <Signature CEO> 2 
  CHECKMULTISIG
  
  // Routine transaction script (pre-defined)
  <Public Key Manager> <Public Key Accountant> 2 
  <Signature Manager> <Signature Accountant> 2 
  CHECKMULTISIG
  
  

  `;
  const codeStringOpCatMultisig: string = `
    // Check if the transaction is high-value
    OP_IF
        // Concatenate CFO's and CEO's keys 
        // and signatures for high-value transactions
        <Public Key CFO> <Signature CFO> OP_CAT
        <Public Key CEO> <Signature CEO> OP_CAT
        2 CHECKMULTISIG
    OP_ELSE
        // Concatenate Manager's and Accountant's 
        // keys and signatures for routine transactions
        <Public Key Manager> <Signature Manager> OP_CAT
        <Public Key Accountant> <Signature Accountant> OP_CAT
        2 CHECKMULTISIG
    OP_ENDIF
  

  `;

  return (
    <>
      <Layout>
        <Head>
          <title>OP_CAT - Pudding DAO</title>
          <meta
            name="description"
            content="Using OP_CAT to enable complex multisig operations natively on the bitcoin network"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" />
        </Head>
        <Flex
          direction={{ base: "column", md: "column" }}
          justify="space-between"
          align="center"
          p={{ base: "2rem", md: "4rem 2rem" }}
          textAlign={{ base: "center", md: "left" }}
          id="intro"
        >
          <Box p={5}>
            {" "}
            <Heading mb={4} color="brand.0">
              What, why and how OP_CAT?
            </Heading>
            <Text fontSize={["sm", "md"]} mb={3} color="brand.0">
              OP_CAT is one of a number of opcodes within the Bitcoin scripting
              language. You Are El does a fantastic job of explaining it{" "}
              <Link
                href="https://opcat.wtf/"
                isExternal
                textDecoration="underline"
                color="blue.500" // Adjust color as needed
              >
                here
              </Link>
              .<br></br>
              <br></br>
              In Bitcoin&apos;s scripting language, OP_CAT is used for
              concatenating two strings or data elements. In multi-signature
              scenarios, these elements are typically the public keys and
              signatures required for transaction authorization. OP_CAT&apos;s
              ability to merge these elements is essential for forming the
              complex script conditions. But where do Quantum Cats fit in? Udi
              breaks it down, including the massive progress made{" "}
              <Link
                href="https://x.com/udiWertheimer/status/1748917150411067544?s=20"
                isExternal
                textDecoration="underline"
                color="blue.500" // Adjust color as needed
              >
                here
              </Link>
              <br></br>
              <br></br>
            </Text>{" "}
          </Box>

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
              padding="0rem 0rem 3rem 0rem"
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
                <Image
                  src="transact.svg"
                  alt="transacting icon"
                  width="150px"
                />
                <Heading color="brand.200" margin="1.5rem" size="xl">
                  Flexible Transactions
                </Heading>
                <Text fontSize={["sm", "md"]} color="brand.0">
                  Enable dynamic transaction structures and multi-condition
                  smart contracts with ease..
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
          <Flex
            id="our-tweets"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading
              className="heading2"
              fontSize={["4xl", "6xl"]}
              padding="0rem 0rem 3rem 0rem"
            >
              What we are saying about OP_CAT?
            </Heading>
            <SimpleGrid
              className={styles.simpleGrid}
              columns={{ base: 1, sm: 2, md: 3 }}
              spacing="2rem"
            >
              <TwitterTweetEmbed tweetId="1749753101383532963" />{" "}
              <TwitterTweetEmbed tweetId="1749757329044897931" />
              <TwitterTweetEmbed tweetId="1749767074325635433" />
            </SimpleGrid>
          </Flex>

          <Flex
            id="multi-sig-description"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading
              className="heading2"
              fontSize={["4xl", "6xl"]}
              padding="3rem 0rem 3rem 0rem"
            >
              Application of OP_CAT for Multi-Sig Wallets
            </Heading>
            <Text
              padding="1rem 0rem 1rem 0rem"
              fontSize={["sm", "md"]}
              mb={3}
              color="brand.0"
            >
              Multi-signature wallets are the digital equivalent to a multi-key
              safe. They require the consent of multiple key holders to
              authorize transactions. This system is essential for businesses
              aiming to use bitcoin and its network to manage their internal
              financial system. Multi-signature authorization for business
              transactions is very common in traditional business settings,
              where financial governance demands checks and balances.
            </Text>
            <Text
              padding="1rem 0rem 1rem 0rem"
              fontSize={["sm", "md"]}
              mb={3}
              color="brand.0"
            >
              In the context of Bitcoin, these wallets are already supported
              natively through the OP_CHECKMULTISIG opcode, which allows
              transactions to require multiple signatures for validation.
            </Text>
            <Text
              padding="1rem 0rem 1rem 0rem"
              fontSize={["sm", "md"]}
              mb={3}
              color="brand.0"
            >
              Currently, Bitcoin&apos;s native multi-sig capabilities, while
              functional, are somewhat limited in flexibility, leading
              businesses to rely on third-party solutions, which has the
              potential to introduce security risks. This demonstration shows
              how OP_CAT can be used to enhance Bitcoin&apos;s native
              multi-signature capabilities. OP_CAT reintroduces flexibility to
              Bitcoin scripting allowing for more dynamic script conditions than
              the current OP_CHECKMULTISIG.
            </Text>

            <Heading
              fontSize="3xl"
              color="white"
              padding="1rem 0rem 1rem 0rem"
              textAlign={{ base: "center", md: "center" }}
            >
              Basic Bitcoin Multi-Signature Transaction Using OP_CHECKMULTISIG
            </Heading>
            <Text
              padding="1rem 0rem 0rem 0rem"
              fontSize={["sm", "md"]}
              mb={3}
              color="brand.0"
            >
              In a simple 2-of-3 multi-sig setup using OP_CHECKMULTISIG, the
              Bitcoin script requires any two out of three possible signatures
              to validate a transaction. <br></br>
              <br></br>
              Here&apos;s a pseudo-code representation:
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CodeSnippet
              codeString={codeStringBasicMultisig}
              language="typescript"
            />
          </Flex>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              padding="1rem 0rem 1rem 0rem"
              fontSize={["sm", "md"]}
              mb={3}
              color="brand.0"
            >
              In this setup, the transaction is authorized if any two out of the
              three signatures (Signature A, Signature B, Signature C) are
              provided. If we wanted to augment the functionality so that if a
              business requires a more complex setup:
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CodeSnippet
              codeString={codeStringMultisigComplex}
              language="typescript"
            />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              padding="1rem 0rem 1rem 0rem"
              fontSize={["sm", "md"]}
              mb={3}
              color="brand.0"
            >
              In this setup, each type of transaction requires a separate,
              pre-defined script. Dynamic changes based on transaction
              conditions or hierarchical updates aren&apos;t feasible. The
              multi-sig wallets need to be predefined with a fixed set of keys,
              and any changes in the authorization structure would require
              creating a new wallet or script. There&apos;s no native capability
              to dynamically alter the set of keys or signatures involved in a
              transaction based on varying conditions.
            </Text>

            <Heading
              fontSize="3xl"
              color="white"
              padding="1rem 0rem 1rem 0rem"
              textAlign={{ base: "center", md: "center" }}
            >
              Enhanced Multi-Signature Transaction Using OP_CAT
            </Heading>
            <Text
              color="brand.0"
              fontSize={["sm", "md"]}
              padding="1rem 0rem 1rem 0rem"
            >
              Now, let&apos;s consider a more complex scenario where a business
              needs a flexible multi-sig setup. For example, a company might
              require different combinations of signatures based on transaction
              types or amounts. Here, OP_CAT can dynamically assemble these
              signature combinations. Furthermore, as a business evolves, this
              script needs to be dynamic as transaction conditions or
              hierarchical changes occur within the organization.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CodeSnippet
              codeString={codeStringOpCatMultisig}
              language="typescript"
            />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              color="brand.0"
              fontSize={["sm", "md"]}
              padding="1rem 0rem 0rem 0rem"
            >
              In this enhanced script:
              <br></br>- For high-value transactions, signatures from both the
              CFO and CEO are required.
              <br></br>- For routine transactions, signatures from a manager and
              an accountant suffice.
              <br></br>
              <br></br>
              OP_CAT hypothetically enables the dynamic injection of public keys
              and signatures into a script. This means you could create scripts
              that adapt to changes in signature requirements based on specific
              conditions, like different levels of transaction amounts or
              changes in the authorization hierarchy. It essentially allows for
              the on-the-fly construction of multi-signature conditions.
            </Text>
          </Flex>
        </Flex>
        {/* Technical Implementation */}
        <Flex
          padding={{ base: "0rem 0rem 2rem 0rem", md: "0rem 0rem" }}
          id="demo"
        >
          <DarkBackground>
            <Flex
              id="multi-sig-description"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {" "}
              <Heading
                fontSize="6xl"
                color="white"
                textAlign={{ base: "center", md: "center" }}
              >
                Demo of OP_CAT MultiSig
              </Heading>
              <Text
                color="brand.0"
                fontSize={["sm", "md"]}
                padding="1rem 0rem 0rem 0rem"
              >
                Below you can test out this simulation of OP_CAT based MultiSig
                wallets. In this example, you can see how we can dynamically
                inject conditions for what approvals are required to sucessfully
                process a transaction.
              </Text>
            </Flex>

            <MultiSigForm></MultiSigForm>
          </DarkBackground>
        </Flex>
        <Flex></Flex>;{/* How I can Help section*/}
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
        <Flex
          padding="2rem 0rem 2rem 0rem"
          margin="3rem 0rem rem 0rem"
          color="white"
          flexDirection="column"
        >
          <Box
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="0rem 0rem 5rem 0rem"
          >
            {/*  VIDEO */}
            <Heading
              className="heading2"
              fontSize={["4xl", "6xl"]}
              padding="3rem 0rem 3rem 0rem"
            >
              Where is our OP_CAT?
            </Heading>
            <Box width="full" maxW="560px" mx="auto">
              <VideoFrame
                src="https://www.youtube.com/embed/CAQTI1Akang"
                title="YouTube video player"
              />
            </Box>
          </Box>

          <DarkBackground>
            <Heading
              className="heading2"
              fontSize={["4xl", "6xl"]}
              padding="0rem 0rem 1rem 0rem"
            >
              Resources
            </Heading>
            <Text fontSize={["sm", "md"]} padding="0rem 0rem 2rem 0rem">
              Checkout some other great resources about OP_CAT to learn more
              about it <br></br> <br></br>
              <Link
                href="https://twitter.com/QuantumCatsXYZ"
                isExternal
                textDecoration="underline"
                color="blue.500" // Adjust color as needed
              >
                Quantum Cats
              </Link>
              <br />
              <Link
                href="https://twitter.com/TaprootWizards"
                isExternal
                textDecoration="underline"
                color="blue.500" // Adjust color as needed
              >
                Taproot Wizards
              </Link>
              <br />
              <Link
                href="https://www.sothebys.com/en/buy/auction/2024/natively-digital-an-ordinals-curated-sale/genesis-cat"
                isExternal
                textDecoration="underline"
                color="blue.500" // Adjust color as needed
              >
                Quantum Cats - Genesis Cat Southeby&apos;s Auction
              </Link>
            </Text>
          </DarkBackground>
        </Flex>
      </Layout>
    </>
  );
}
