/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../foundation/Text';
import Grid from '../../layout/Grid';

import Box from '../../layout/Box';
import polygonClip from '../../../theme/utils/polygonClip';
import Button from '../Button';
import Git from '../../../theme/svg/Git';
import Linkedin from '../../../theme/svg/Linkedin';
import Email from '../../../theme/svg/Email';
import Phone from '../../../theme/svg/Phone';

const FooterWrapper = styled.footer`

  ${polygonClip('polygonTop')}
  background-color: ${({ theme }) => theme.colors.background.dark};
  
  h1 {
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
      color: ${theme.colors.primary.main.color};
    `}
  }
  ul {
    padding: 0px;
    margin-bottom: 22px;
  }
  ul li {
    list-style:none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.quaternary.main.color};
    margin-bottom: 12px;
    height: 26px;
  }
  svg {
    fill: ${({ theme }) => theme.colors.quaternary.main.color};
    width: 24px;
    margin-right: 12px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.quaternary.main.color};    transition: .3s;
    &:hover,
      &:focus {
        opacity: .5;
      }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper polygonTop={{ lg: 75, xs: 50 }}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 3 }}
          >
            <Text
              variant="title"
              tag="h1"
              color="primary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Let&apos;s Work Together.
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Have a project you&apos;d like to discuss?
            </Text>
            <Button
              variant="secondary.dark"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
            >
              Get in touch
            </Button>
          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 3 }}
            value={{ xs: 12, md: 5 }}
            style={{ boxSizing: 'border-box' }}
          >
            <ul>
              <li>
                <Git />
                <a href="#">
                  github.com/paulohsz
                </a>
              </li>
              <li>
                <Linkedin />
                <a href="#">
                  linkedin.com/in/paulohsz
                </a>
              </li>
              <li>
                <Email />
                <a href="#">
                  paulostoc@gmail.com
                </a>
              </li>
              <li>
                <Phone />
                <a href="#">
                  +353 83 334 1449 (Ireland)
                </a>
              </li>
            </ul>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        backgroundColor="#181B33"
        borderTop="1px solid #9FB6D040"
      >
        <Text padding="16px 0" color="tertiary.dark">
          © 2021 Paulo H S Zancanaro. Made with love &hearts;
          {' '}
          <i className="im im-heart" />
          {' '}
          All rights reserved
        </Text>
      </Box>
    </FooterWrapper>
  );
}
