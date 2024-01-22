import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  useToken,
  IconButton,
  Icon,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "./Header.module.css";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";

export default function Header() {
  const backgroundColor = useToken("colors", "brand.80");
  const [scrolled, setScrolled] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State variable for mobile menu
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      console.log(`Scrolled: ${isScrolled}`);
      setScrolled(isScrolled);
    };

    // Only add the event listener if window is defined (i.e., we're on the client side)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      // Clean up the event listener when the component is unmounted
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleMobileMenuClick = () => {
    // Toggle the state variable for mobile menu
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Flex
      as="nav"
      minWidth="max-content"
      className={styles.header}
      style={{
        backgroundColor: `rgba(10, 12, 14, 0.8)`, // Adjust the alpha value (0.8) as needed
        borderBottom: scrolled ? "1px solid #F2A900" : "none",
      }}
    >
      <Link href="/" shallow>
        <Box className={styles.logo}>
          <Image src="qunatum-cats.jpeg" alt="qunatum-cats-alive" height={50} />
        </Box>
      </Link>
      <Heading as="h1" fontWeight="bold" className={styles.heading_nav}>
        PuddingDAO
      </Heading>
      <Spacer></Spacer>
      {/* Mobile menu */}
      <IconButton
        variant="ghost"
        display={{ base: "block", md: "none" }} // Hide on desktop (md) screens
        aria-label="Open mobile menu"
        onClick={handleMobileMenuClick}
        icon={<Icon as={FaBars} />}
        color="brand.0"
        _hover={{
          borderColor: "brand.200",
          borderBottomWidth: "2px",
          borderRadius: "1px",
          transition: "ease-in-out 0.2s",
          color: "brand.200",
        }}
      />
      {/* Render the mobile menu or the ButtonGroup based on the state */}
      {showMobileMenu && (
        <Flex
          direction="column"
          align="center"
          pos="absolute"
          top="5rem"
          bg="rgba(10, 12, 14, 0.8)"
          w="120%"
          gap="0.5rem"
          p="0rem 0rem 1rem 0rem"
          zIndex={999}
        >
          {isHomePage ? (
            <ScrollLink to="intro" smooth={true}>
              {" "}
              <Button
                variant="ghost"
                color="brand.0"
                _hover={{
                  borderColor: "brand.200",
                  borderBottomWidth: "2px",
                  borderRadius: "1px",
                  transition: "ease-in-out 0.2s",
                  color: "brand.200",
                }}
              >
                Intro
              </Button>
            </ScrollLink>
          ) : (
            <Link href="/#intro">
              <Button
                variant="ghost"
                color="brand.0"
                _hover={{
                  borderColor: "brand.200",
                  borderBottomWidth: "2px",
                  borderRadius: "1px",
                  transition: "ease-in-out 0.2s",
                  color: "brand.200",
                }}
              >
                Intro
              </Button>
            </Link>
          )}

          {isHomePage ? (
            <ScrollLink to="benefits" smooth={true}>
              {" "}
              <Button
                variant="ghost"
                color="brand.0"
                _hover={{
                  borderColor: "brand.200",
                  borderBottomWidth: "2px",
                  borderRadius: "1px",
                  transition: "ease-in-out 0.2s",
                  color: "brand.200",
                }}
              >
                Benefits
              </Button>
            </ScrollLink>
          ) : (
            <Link href="/#benefits">
              <Button
                variant="ghost"
                color="brand.0"
                _hover={{
                  borderColor: "brand.200",
                  borderBottomWidth: "2px",
                  borderRadius: "1px",
                  transition: "ease-in-out 0.2s",
                  color: "brand.200",
                }}
              >
                Benefits
              </Button>
            </Link>
          )}

          {isHomePage ? (
            <ScrollLink to="demo" smooth={true}>
              {" "}
              <Button
                variant="ghost"
                color="brand.0"
                _hover={{
                  borderColor: "brand.200",
                  borderBottomWidth: "2px",
                  borderRadius: "1px",
                  transition: "ease-in-out 0.2s",
                  color: "brand.200",
                }}
              >
                Demo
              </Button>
            </ScrollLink>
          ) : (
            <Link href="/#demo">
              <Button
                variant="ghost"
                color="brand.0"
                _hover={{
                  borderColor: "brand.200",
                  borderBottomWidth: "2px",
                  borderRadius: "1px",
                  transition: "ease-in-out 0.2s",
                  color: "brand.200",
                }}
              >
                Demo
              </Button>
            </Link>
          )}

          {isHomePage ? (
            <ScrollLink to="/#community-voices" smooth={true}>
              <Button
                variant="ghost"
                color="brand.0"
                _hover={{
                  borderColor: "brand.200",
                  borderBottomWidth: "2px",
                  borderRadius: "1px",
                  transition: "ease-in-out 0.2s",
                  color: "brand.200",
                }}
              >
                Community Voices
              </Button>
            </ScrollLink>
          ) : (
            <Link href="/#community-voices">
              <Button
                variant="ghost"
                color="brand.0"
                _hover={{
                  borderColor: "brand.200",
                  borderBottomWidth: "2px",
                  borderRadius: "1px",
                  transition: "ease-in-out 0.2s",
                  color: "brand.200",
                }}
              >
                Community Voices
              </Button>
            </Link>
          )}
        </Flex>
      )}
      {/* desktop menu */}
      <ButtonGroup className={styles.nav_menu} variant="ghost" gap="2">
        {isHomePage ? (
          <ScrollLink to="intro" smooth={true}>
            <Button
              color="brand.0"
              fontSize="2xl"
              fontWeight="normal"
              _hover={{
                borderColor: "brand.200",
                borderBottomWidth: "2px",
                borderRadius: "1px",
                transition: "ease-in-out 0.2s",
                color: "brand.200",
              }}
            >
              Intro
            </Button>
          </ScrollLink>
        ) : (
          <Link href="/#intro">
            <Button
              color="brand.0"
              fontSize="2xl"
              fontWeight="normal"
              _hover={{
                borderColor: "brand.200",
                borderBottomWidth: "2px",
                borderRadius: "1px",
                transition: "ease-in-out 0.2s",
                color: "brand.200",
              }}
            >
              Intro
            </Button>
          </Link>
        )}
        {isHomePage ? (
          <ScrollLink to="benefits" smooth={true}>
            <Button
              color="brand.0"
              fontSize="2xl"
              fontWeight="normal"
              _hover={{
                borderColor: "brand.200",
                borderBottomWidth: "2px",
                borderRadius: "1px",
                transition: "ease-in-out 0.2s",
                color: "brand.200",
              }}
            >
              Benefits
            </Button>
          </ScrollLink>
        ) : (
          <Link href="/#benefits">
            <Button
              color="brand.0"
              fontSize="2xl"
              fontWeight="normal"
              _hover={{
                borderColor: "brand.200",
                borderBottomWidth: "2px",
                borderRadius: "1px",
                transition: "ease-in-out 0.2s",
                color: "brand.200",
              }}
            >
              Benefits
            </Button>
          </Link>
        )}
        {isHomePage ? (
          <ScrollLink to="demo" smooth={true}>
            <Button
              color="brand.0"
              fontSize="2xl"
              fontWeight="normal"
              _hover={{
                borderColor: "brand.200",
                borderBottomWidth: "2px",
                borderRadius: "1px",
                transition: "ease-in-out 0.2s",
                color: "brand.200",
              }}
            >
              Demo
            </Button>
          </ScrollLink>
        ) : (
          <Link href="/#demo">
            <Button
              color="brand.0"
              fontSize="2xl"
              fontWeight="normal"
              _hover={{
                borderColor: "brand.200",
                borderBottomWidth: "2px",
                borderRadius: "1px",
                transition: "ease-in-out 0.2s",
                color: "brand.200",
              }}
            >
              Demo
            </Button>
          </Link>
        )}

        {isHomePage ? (
          <ScrollLink to="community-voices" smooth={true}>
            <Button
              variant="ghost"
              color="brand.0"
              fontSize="2xl"
              fontWeight="normal"
              _hover={{
                borderColor: "brand.200",
                borderBottomWidth: "2px",
                borderRadius: "1px",
                transition: "ease-in-out 0.2s",
                color: "brand.200",
              }}
            >
              Community Voices
            </Button>
          </ScrollLink>
        ) : (
          <Link href="/#community-voices">
            <Button
              variant="ghost"
              color="brand.0"
              fontSize="2xl"
              fontWeight="normal"
              _hover={{
                borderColor: "brand.200",
                borderBottomWidth: "2px",
                borderRadius: "1px",
                transition: "ease-in-out 0.2s",
                color: "brand.200",
              }}
            >
              Community Voices
            </Button>
          </Link>
        )}
      </ButtonGroup>
    </Flex>
  );
}
