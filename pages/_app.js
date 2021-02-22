import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme, { colorsType } from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';
import ThemeContext from '../src/contexts/theme';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [colors, setThemeColors] = useState({ mode: 'light', ...colorsType.light });

  function toggleDarkMode() {
    setThemeColors(
      colors.mode === 'dark'
        ? { mode: 'light', ...colorsType.light }
        : { mode: 'dark', ...colorsType.dark },
    );
  }

  return (
    <>
      <Head>
        <title>Paulo H S Zancanaro - Developer - Challenge - JAMStack Front-End (Bootcamp)</title>
        <link rel="shortcut icon" href="images/icon-cv.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeContext.Provider value={{ colors, toggleDarkMode }}>
        <ThemeProvider theme={{ ...theme, colors }}>
          <GlobalStyle />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
