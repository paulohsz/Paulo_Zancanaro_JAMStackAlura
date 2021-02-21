import React from 'react';
import { useTheme } from 'styled-components';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/Text';
import Box from '../src/components/layout/Box';
import Grid from '../src/components/layout/Grid';

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
        <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
          <Grid.Row>
            <Grid.Col
              offset={{ xs: 0, md: 1 }}
              value={{ xs: 12, md: 4 }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="column"
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
                Hey, I’m Paulo.
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
                A web designer and developer from Southampton in the UK.
                I create bespoke websites to help people go further online.
              </Text>
            </Grid.Col>
            <Grid.Col
              offset={{ xs: 0, md: 1 }}
              value={{ xs: 12, md: 6 }}
            >
              <img
                alt="Paulo H S Zancanaro's profile"
                style={{
                  display: 'block',
                  margin: 'auto',
                  boxShadow: '40px -28px 0px 10px #181B33',
                  borderRadius: '16px',
                }}
                src="images/ProfilePhoto.jpg"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Grid.Container>
        <Grid.Row>
          <Text
            variant="title"
            tag="h1"
            color="primary.secondary"
            borderBottom="2px solid #181B33"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Projects
          </Text>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 4 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            Teste

          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 6 }}
          >
            sdfff
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </>
  );
}
