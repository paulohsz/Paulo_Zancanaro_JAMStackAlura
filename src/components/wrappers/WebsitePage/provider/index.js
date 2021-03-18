import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme, { colorsType } from '../../../../theme/theme';
import GlobalStyle from '../../../../theme/GlobalStyle';
import ThemeContext from '../../../../contexts/theme';

export default function WebsiteGlobalProvider({ children }) {
  const [colors, setThemeColors] = useState('light');

  function ThemeToggler() {
    setThemeColors(
      (colors === 'dark') ? 'light' : 'dark',
    );
  }

  return (
    <ThemeContext.Provider value={{ colors, ThemeToggler }}>
      <ThemeProvider theme={{ ...theme, colors: colorsType[colors] }}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
