import React, { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

interface CodeSnippetProps {
  codeString: string;
  language?: string;
}

const CodeSnippet: FC<CodeSnippetProps> = ({
  codeString,
  language = "jsx",
}) => {
  // Use '100%' for all screen sizes to fill the container
  const syntaxHighlighterWidth = "100%";

  // Define responsive max width
  const maxContainerWidth = useBreakpointValue({ base: "80vw", md: "100vw" });

  // Define responsive font size
  const fontSize = useBreakpointValue({ base: "12px", md: "14px" });

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      p={{ base: "2rem", md: "2rem 1rem" }}
      w="100%" // Full width
      maxW={maxContainerWidth} // Conditional max width
      overflowX="auto" // Enable horizontal scroll on overflow
    >
      <SyntaxHighlighter
        language={language}
        style={dark}
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
