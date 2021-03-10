import React, { useEffect } from 'react';
import Text from '@components/foundation/Text';
import Grid from '@components/foundation/layout/Grid';
import Card from '@components/commons/Card';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Project title',
    text: 'Lorem ipsum hendrerit ornare sapien ornare varius fringilla, sollicitudin accumsan mattis felis quisque duis gravida metus, ut justo aliquam donec habitant risus. consectetur torquent dui est justo varius est bibendum, placerat dapibus metus neque enim neque netus, curabitur etiam curabitur commodo lacinia varius.',
    img: 'images/project-a.jpg',
    link: '#',
  },
  {
    title: 'Project title',
    text: 'Habitant aenean per netus pharetra odio dictumst, bibendum iaculis est laoreet nam ultricies, porttitor congue feugiat nam a. vehicula placerat adipiscing platea netus curabitur, aenean sodales augue suspendisse purus fusce, vestibulum proin sagittis eget. tincidunt sed nec quisque.',
    img: 'images/project-b.jpg',
    link: '#',
  },
  {
    title: 'Project title',
    text: 'Dictumst primis interdum ut himenaeos turpis mollis lacus, porta tincidunt diam enim nam. pretium suspendisse phasellus leo ac varius euismod laoreet nibh scelerisque, lacinia ligula ad porta curabitur at leo sagittis, auctor tristique curabitur vivamus congue lacus senectus leo. congue donec habitant arcu urna lobortis posuere, purus libero tempus neque scelerisque convallis, varius eros ornare sapien risus.',
    img: 'images/project-c.jpg',
    link: '#',
  },
];

const variants = {
  visible: (i) => ({
    opacity: 1,
    y: '0',
    transition: {
      delay: ((i + 1) * 0.35),
    },
  }),
  hidden: {
    y: '50%',
    opacity: 0,
  },
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
              <a href={project.link}>
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
              </a>
            </Card.Base>
          </Grid.Col>
        ))}
      </Grid.Row>
    </Grid.Container>
  );
}
