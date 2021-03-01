import React from 'react';

import Grid from '@components/foundation/layout/Grid';
import Box from '@components/foundation/layout/Box';
import Text from '@components/foundation/Text';
import Button from '@components/commons/Button';

import Git from '@theme/svg/Git';
import Linkedin from '@theme/svg/Linkedin';
import Email from '@theme/svg/Email';
import Phone from '@theme/svg/Phone';
import Favorite from '@theme/svg/Favorite';
import FooterWrapper from './styles';

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
              Do you know of any jobs?
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
                <a href="https://github.com/paulohsz" target="_blank" rel="noreferrer">
                  github.com/paulohsz
                </a>
              </li>
              <li>
                <Linkedin />
                <a href="https://www.linkedin.com/in/paulohsz/" target="_blank" rel="noreferrer">
                  linkedin.com/in/paulohsz
                </a>
              </li>
              <li>
                <Email />
                <a href="mailto: paulostoc@gmail.com">
                  paulostoc@gmail.com
                </a>
              </li>
              <li>
                <Phone />
                +353 83 334 1449 (Ireland)
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
          © 2021 Paulo H S Zancanaro. Made with love
          <Favorite className="favorite" />
          <br />
          All rights reserved
        </Text>
      </Box>
    </FooterWrapper>
  );
}
