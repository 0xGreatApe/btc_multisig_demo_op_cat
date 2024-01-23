// components/CodeSnippet.tsx
import { Box } from '@chakra-ui/react';

type CodeSnippetProps = {
  children: React.ReactNode;
  language?: string;
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({ children, language }) => {
  return (
    <Box as="pre" p={4} overflowX="auto" bg="gray.800" color="white" borderRadius="md">
      {children}
    </Box>
  );
};

export default CodeSnippet;
