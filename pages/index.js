import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Footer from '@components/commons/Footer';
import HomeAbout from '@components/commons/HomeAbout';
import HomeProjects from '@components/commons/HomeProjects';
import Menu from '@components/commons/Menu';
import Box from '@components/foundation/layout/Box';
import Modal from '@components/commons/Modal';
import FormContact from '@components/patterns/FormContact';

export default function Home() {
  const { background } = useTheme().colors;
  const [isModalOpen, setModalState] = useState(false);

  const handleOpenModal = () => {
    setModalState(!isModalOpen);
  };

  return (
    <>
      <Box
        flexGrow={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="stretch"
        backgroundColor={background.dark}
        polygonBottom={{ lg: 75, xs: 50 }}
      >
        <Menu contact={handleOpenModal} />
        <HomeAbout />
      </Box>
      <HomeProjects />
      <Footer contact={handleOpenModal} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <FormContact propsDoModal={propsDoModal} />
        )}
      </Modal>
    </>
  );
}
