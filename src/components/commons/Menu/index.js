import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@theme/svg/Logo';
import Text from '@components/foundation/Text';
import MenuWrapper from './styles/MenuWrapper';

export default function Menu({ contact }) {
  const links = [
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
    <MenuWrapper>
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
            <Text tag="a" href={link.url} title={link.text}>
              {link.text}
            </Text>
            )}
          </li>
        ))}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  contact: PropTypes.func.isRequired,
};
