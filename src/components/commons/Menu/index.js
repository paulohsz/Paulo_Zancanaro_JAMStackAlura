import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@theme/svg/Logo';
import Text from '@components/foundation/Text';
import { motion } from 'framer-motion';
import MenuWrapper from './styles/MenuWrapper';
import Link from '../Link';

export default function Menu({ contact, home }) {
  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'About',
      url: '/about',
    },
    {
      text: 'Contact',
      url: contact,
    },
  ];

  return (
    <MenuWrapper
      as={motion.nav}
      initial={(home) ? 'hidden' : 'visible'}
      animate="visible"
      variants={{
        visible: {
          y: 0,
          opacity: 1,
        },
        hidden: {
          y: '-100%',
          opacity: 0,
        },
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide as="ul">
        {links.map((link) => (
          <li key={link.text}>
            { (typeof link.url === 'function') && (
            <Text tag="a" href="#" onClick={link.url} title={link.text}>
              {link.text}
            </Text>
            )}
            { !(typeof link.url === 'function') && (
            <Link tag="a" href={link.url} title={link.text}>
              {link.text}
            </Link>
            )}
          </li>
        ))}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  contact: PropTypes.func.isRequired,
  home: PropTypes.bool.isRequired,
};
