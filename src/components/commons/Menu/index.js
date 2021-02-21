import React from 'react';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import MenuWrapper from './styles/MenuWrapper';

const links = [
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Contact',
    url: '/Contact',
  },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide as="ul">
        {links.map((link) => (
          <li key={link.url}>
            <Text tag="a" href={link.url} title={link.text}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
