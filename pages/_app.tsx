import React from "react";
import Head from "next/head";
import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
