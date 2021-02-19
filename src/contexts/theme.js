import { createContext } from 'react';

const ThemeContext = createContext({
  dark: true,
  toggleDarkMode: () => {},
});

export default ThemeContext;
