/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, createContext } from 'react';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import HomeAbout from '@components/commons/HomeAbout';
import FormContact from '@components/patterns/FormContact';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import SEO from '../../SEO';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  homeAbout,
  menuProps,
}) {
  const [isModalOpen, setModalState] = useState(false);
  const { background } = useTheme().colors;

  return (
    <WebsitePageContext.Provider
      value={{
        teste: true,
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO
        {...seoProps}
      />

      <Box
        flexGrow={homeAbout ? 1 : 0}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="stretch"
        backgroundColor={background.dark}
        {...(homeAbout && { polygonBottom: { lg: 75, xs: 50 } })}
        {...(!homeAbout && { paddingBottom: 32 })}
        {...pageBoxProps}
      >
        {menuProps.display && (
          <Menu contact={() => setModalState(true)} />
        )}
        {homeAbout && (
          <HomeAbout />
        )}
      </Box>
      {children}
      <Footer
        contact={() => setModalState(true)}
        polygonTopx={{ lg: homeAbout ? 75 : 50, xs: 50 }}
      />
      {/*
        [SOLID]
        S = Single Responsability
        O = Open Closed
        L = Liskov Substitution
        I = Interface Segregation
        D = Dependency Inversion
      */}
      {/* {isModalOpen && <Modal />} */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormContact propsDoModal={propsDoModal} />
        )}
      </Modal>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  homeAbout: false,
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  homeAbout: PropTypes.bool,
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
