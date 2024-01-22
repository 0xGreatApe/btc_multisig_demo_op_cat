// GLOBAL CSS STYLES
import "../styles/globals.css";
import React, { useEffect } from "react";

// CHAKRA UI
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../theme/theme";

// FONT FOR WEB APP & CHAKRA UI
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/globals.css";

// NEXTJS
import type { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  return (
    <ChakraProvider theme={myTheme}>
      <Script
        strategy="lazyOnload"
        async
        // fix this using: https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics.html G-20BFG5Q5CE
        // src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        src={`https://www.googletagmanager.com/gtag/js?id=G-20BFG5Q5CE`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
      >{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-20BFG5Q5CE');`} </Script>
       
      <Component key={router.asPath} {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
