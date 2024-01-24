import { IconButton, ButtonGroup, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Flex className={styles.footer}>
      <Flex className={styles.copyright}>
        <Text fontSize={["xs", "sm"]} color="brand.200">
          © {new Date().getFullYear()} LORUM IPSUM PUDDINGS.
        </Text>
      </Flex>

      <Flex className={styles["social-buttons"]}>
        <ButtonGroup variant="ghost" gap={4}>
          <IconButton
            as="a"
            href="https://twitter.com/TaprootWizards"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="2rem" color="#F2A900" />}
            _hover={{ bg: "brand.40" }}
          />
          <IconButton
            as="a"
            href="https://discord.gg/taprootwizards"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FaDiscord"
            icon={<FaDiscord fontSize="2rem" color="#F2A900" />}
            _hover={{ bg: "brand.40" }}
          />
          <IconButton
            as="a"
            href="https://github.com/0xGreatApe/btc_multisig_demo_op_cat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            icon={<FaGithub fontSize="2rem" color="#F2A900" />}
            _hover={{ bg: "brand.40" }}
          />
        </ButtonGroup>
      </Flex>

      <Flex className={styles.legal}>
        <Text fontSize={["xs", "sm"]} color="brand.200">
          Privacy policy
        </Text>
        <Text fontSize={["xs", "sm"]} color="brand.200" ml="1rem">
          Terms &amp; conditions
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
