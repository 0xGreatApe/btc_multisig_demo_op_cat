import React, { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

interface CodeSnippetProps {
  codeString: string;
  language?: string;
}

const CodeSnippet: FC<CodeSnippetProps> = ({
  codeString,
  language = "jsx",
}) => {
  const syntaxHighlighterWidth = useBreakpointValue({
    base: "90%", // Full width on small screens
    md: "100%", // Full width on medium and larger screens
  });

  // Define responsive font size
  const fontSize = useBreakpointValue({ base: "12px", md: "14px" });

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      p={{ base: "1rem", md: "1rem 1rem" }}
      w="100%" // Full width
      maxW="80%" // Set a maximum width for the container
      overflowX="auto" // Enable horizontal scroll on overflow
    >
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        customStyle={{
          width: syntaxHighlighterWidth,
          minHeight: "100px", // Adjust minimum height as needed
          fontSize: fontSize, // Responsive font size
          whiteSpace: "pre-wrap", // Wrap text as needed
          wordBreak: "break-word", // Break words to prevent overflow
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </Flex>
  );
};

export default CodeSnippet;
