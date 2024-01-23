import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

import { chakra, Box, Text } from "@chakra-ui/react";

interface Testimonial {
  name: string;
  quote: string;
}

const TestimonialsCarousel: React.FC = () => {
  const testimonialData: Testimonial[] = [
    {
      name: "Udi Wertheimer [Taproots Wizards]",
      quote:
        "Its not a full-blown smart contracting language like on \
         Ethereum or Solana, \
         but it does enable a lot of functionality that we couldn’t do before.",
    },
    {
      name: "Robin Linus [Founder of bitVM]",
      quote: `op_cat is a tool that can be used to protect and liberate people.`,
    },
    // Add more testimonials here
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      // Check if the slider reference is not null
      if (sliderRef.current) {
        const nextSlide =
          currentSlide === testimonialData.length - 1 ? 0 : currentSlide + 1;
        sliderRef.current.slickGoTo(nextSlide);
        setCurrentSlide(nextSlide);
      }
    }, 10000); // 10 seconds

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [currentSlide, testimonialData.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove the arrows
    appendDots: (dots: React.ReactNode) => (
      <Box display="flex" justifyContent="center" alignItems="center">
        <ul style={{ margin: "0", padding: "0", display: "flex" }}>{dots}</ul>
      </Box>
    ),
    customPaging: (i: number) => (
      <Box
        bg={currentSlide === i ? "#F2A900" : "#434045"}
        borderRadius="50%"
        display="inline-block"
        width="10px"
        height="10px"
        margin="5px"
      />
    ),
    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 10000, // 10 seconds
  };

  return (
    <Box maxWidth={["70vw", "800px"]}>
      <Slider {...settings} ref={sliderRef}>
        {testimonialData.map((testimonial, index) => (
          <Box
            key={index}
            p={["0rem", "2rem"]}
            textAlign="center"
            borderRadius="1px"
            maxWidth={["100%", "100%"]}
            paddingLeft={["0rem", " 2rem"]}
            paddingRight={["0rem", "2rem"]}
          >
            <chakra.span color="brand.0">
              <BiSolidQuoteLeft size={24} style={{ marginRight: "8px" }} />
            </chakra.span>
            <Text fontSize={["md", "xl"]} color="white" px="2=rem">
              {testimonial.quote.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Text>
            <chakra.span color="brand.0" style={{ float: "right" }}>
              <BiSolidQuoteRight size={24} style={{ marginRight: "8px" }} />
            </chakra.span>
            <Text
              fontSize={["lg", "2xl"]}
              color="brand.200"
              mt={["2rem", "5rem"]}
            >
              - {testimonial.name}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialsCarousel;
