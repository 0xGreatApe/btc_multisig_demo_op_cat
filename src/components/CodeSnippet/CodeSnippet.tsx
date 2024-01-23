import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import desired style or create a custom style
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeSnippetProps {
  codeString: string;
  language?: string;
}

const CodeSnippet: FC<CodeSnippetProps> = ({
  codeString,
  language = "jsx",
}) => (
  <SyntaxHighlighter language={language} style={materialDark}>
    {codeString}
  </SyntaxHighlighter>
);

export default CodeSnippet;
