import React from 'react';
import Text from '@components/foundation/Text';
import Grid from '@components/foundation/layout/Grid';
import { motion } from 'framer-motion';

export default function HomeAbout() {
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
                transition: {
                  delay: 0.5,
                },
              },
              hidden: {
                opacity: 0,
                scale: 1.5,
              },
            }}
            alt="Paulo H S Zancanaro's profile"
            style={{
              display: 'block',
              margin: 'auto',
              boxShadow: '40px -28px 0px 10px #181B33',
              borderRadius: '16px',
            }}
            src="images/ProfilePhoto.jpg"
            width="235"
            height="308"
          />

        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
