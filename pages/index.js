import React from 'react';
import { useTheme } from 'styled-components';
import Footer from '../src/components/commons/Footer';
import HomeAbout from '../src/components/commons/HomeAbout';
import HomeProjects from '../src/components/commons/HomeProjects';
import Menu from '../src/components/commons/Menu';
import Box from '../src/components/layout/Box';

export default function Home() {
  const { background } = useTheme().colors;

  return (
    <>
      <Box
        flex={1}
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        backgroundColor={background.dark}
        polygonBottom={{ lg: 75, xs: 50 }}
      >
        <Menu />
        <HomeAbout />
      </Box>
      <HomeProjects />
      <Footer />
    </>
  );
}
