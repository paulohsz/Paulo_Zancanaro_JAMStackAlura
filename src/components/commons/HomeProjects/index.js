import React, { useEffect } from 'react';
import Text from '@components/foundation/Text';
import Grid from '@components/foundation/layout/Grid';
import Card from '@components/commons/Card';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projects from '../../../database/db.json';

const variants = {
  visible: (i) => ({
    opacity: 1,
    x: '0',
    transition: {
      delay: ((i + 1) * 0.35),
    },
  }),
  hidden: (i) => ({
    x: `${-(((i - 3) * 100))}%`,
    opacity: 0,
  }),
};

export default function HomeProjects() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    /* if (!inView) {
      controls.start('hidden');
    } */
  }, [controls, inView]);

  return (
    <Grid.Container
      display="flex"
      flexGrow={1}
      alignItems="center"
    >
      <Grid.Row ref={ref}>
        <Grid.Col
          value={12}
          display="flex"
          margin="16px 0px"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          <Text
            as={motion.h1}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.25,
                },
              },
              hidden: {
                opacity: 0,
                scale: 2,
              },
            }}
            variant="title"
            tag="h1"
            color="secondary.main"
            borderBottom="2px solid #181B33"
            margin={0}
          >
            Projects
          </Text>
        </Grid.Col>
        {projects.map((project, i) => (
          <Grid.Col
            as={motion.div}
            value={{ xs: 12, sm: 6, md: 4 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
            margin="16px 0px"
            key={project.img}
            initial="hidden"
            custom={i}
            animate={controls}
            variants={variants}
          >
            <Card.Base>
              <Card.Link href={`/projects/${project.name}`}>
                <Card.Img alt="Project" src={project.img} />
                <Card.Title
                  variant="title"
                  tag="h3"
                  color="quaternary.dark"
                  margin="0px"
                  padding={{ xs: '15px 10px', md: '15px 15px 0px 15px' }}
                  textAlign={{
                    xs: 'center',
                    md: 'left',
                  }}
                >
                  {project.title}
                </Card.Title>
                <Card.Text
                  tag="p"
                  color="quaternary.dark"
                  variant="paragraph1"
                  padding={{ xs: '10px', md: '25px' }}
                >
                  {project.text}
                </Card.Text>
              </Card.Link>
            </Card.Base>
          </Grid.Col>
        ))}
      </Grid.Row>
    </Grid.Container>
  );
}
