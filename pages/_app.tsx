import React from 'react';
import Head from 'next/head';
import '../styles/global.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { colors } from '../themes/foudations/colors';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

const theme = extendTheme({ colors });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/global.css" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(App);
