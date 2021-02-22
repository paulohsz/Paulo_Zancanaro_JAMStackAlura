import React from 'react';
import Text from '@components/foundation/Text';
import Grid from '@components/layout/Grid';

export default function HomeAbout() {
  return (
    <Grid.Container marginTop={{ xs: '32px', md: '75px' }}>
      <Grid.Row>
        <Grid.Col
          offset={{ xs: 0, md: 1 }}
          value={{ xs: 12, md: 5 }}
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
            Hey, my name is Paulo
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.main"
            marginBottom={60}
            textAlign="justify"
          >
            I’m a cleaner and currently live in Ireland.
            I’m graduated with a BSc in Computer Science, a Postgraduate in Banking IT,
            and over 10 years of experience in software, system and web development in
            well-known companies such as ITAU Banking. Currently studying REACT/Next.js
            (front-end) and eager to put in practice all academic knowledge acquired.
          </Text>
        </Grid.Col>
        <Grid.Col
          offset={{ xs: 0, md: 0 }}
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
  );
}
