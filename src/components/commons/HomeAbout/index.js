import React from 'react';
import PropTypes from 'prop-types';

import Text from '@components/foundation/Text';
import Grid from '@components/foundation/layout/Grid';
import { motion } from 'framer-motion';

export default function HomeAbout({ white }) {
  return (
    <Grid.Container
      marginTop={{ xs: '32px', md: '75px' }}
      display="flex"
      flexGrow={1}
      alignItems="center"
    >
      <Grid.Row>
        <Grid.Col
          offset={{ xs: 0, md: 1 }}
          value={{ xs: 12, md: 5 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                x: 0,
                opacity: 1,
              },
              hidden: {
                x: '-100%',
                opacity: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Text
              variant="title"
              tag="h1"
              color={white ? 'secondary.main' : 'primary.main'}
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
              color={white ? 'quaternary.dark' : 'tertiary.main'}
              marginBottom={60}
              textAlign="justify"
            >
              I’m currently live in Ireland.
              I’m graduated with a BSc in Computer Science, a Postgraduate in Banking IT,
              and over 10 years of experience in software, system and web development in
              well-known companies such as Itaú Banking. Currently studying REACT/Next.js
              (front-end) and eager to put in practice all academic knowledge acquired.
            </Text>
          </motion.div>
        </Grid.Col>
        <Grid.Col
          offset={{ xs: 0, md: 0 }}
          value={{ xs: 12, md: 6 }}
        >
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  delay: 0.5,
                },
              },
              hidden: {
                opacity: 0,
                scale: 2,
                x: '100%',
              },
            }}
            alt="Paulo H S Zancanaro's profile"
            style={{
              display: 'block',
              margin: 'auto',
              boxShadow: '40px -28px 0px 10px #181B33',
              borderRadius: '16px',
            }}
            src="/images/Profile.jpg"
            width="235"
            height="308"
          />

        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

HomeAbout.defaultProps = {
  white: false, // About background (dark: blue, white: white)
};

HomeAbout.propTypes = {
  white: PropTypes.bool,
};
