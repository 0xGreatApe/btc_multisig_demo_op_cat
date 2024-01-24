// VideoFrame.tsx
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
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default VideoFrame;
