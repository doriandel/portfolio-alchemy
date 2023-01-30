import React from 'react';
import Head from 'next/head';
import '../styles/global.css';
import { useTheme } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Providers } from '@/Providers';
import { Viewport } from '@/components/Viewport';

const AppHead = () => {
  const theme = useTheme();

  return (
    <Head>
      <title>Dorian Delorme - Portfolio</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content={theme.colors.gray?.['800']} />
      <link rel="stylesheet" href="/styles/global.css" />
    </Head>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <AppHead />
      <Viewport>
        <Component {...pageProps} />
      </Viewport>
    </Providers>
  );
};

export default appWithTranslation(App);
