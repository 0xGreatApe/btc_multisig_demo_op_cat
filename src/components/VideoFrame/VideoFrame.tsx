import React from "react";
import { Box } from "@chakra-ui/react";

interface ResponsiveIframeProps {
  src: string;
  title: string;
}

const VideoFrame: React.FC<ResponsiveIframeProps> = ({ src, title }) => {
  return (
    <Box
      position="relative"
      paddingBottom="56.25%" // Aspect ratio 16:9
      paddingTop="25px"
      height="0"
      borderRadius="lg" // This will apply a slight border-radius. You can also use a specific value like '10px'
      overflow="hidden" // Make sure the rounded corners are visible and overflow content is clipped
    >
      <iframe
        src={src}
        title={title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "inherit", // Ensure the iframe inherits the border-radius from the parent Box
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default VideoFrame;
