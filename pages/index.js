import React from 'react';
import { useTheme } from 'styled-components';
import Footer from '@components/commons/Footer';
import HomeAbout from '@components/commons/HomeAbout';
import HomeProjects from '@components/commons/HomeProjects';
import Menu from '@components/commons/Menu';
import Box from '@components/layout/Box';

export default function Home() {
  const { background } = useTheme().colors;

  return (
    <>
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="stretch"
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
