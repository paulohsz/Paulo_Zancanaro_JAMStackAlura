import React from 'react';
import PropTypes from 'prop-types';
import ProjectsList from '@components/commons/ProjectsList';
import Link from '../../src/components/commons/Link';
import Box from '../../src/components/foundation/layout/Box';
import Grid from '../../src/components/foundation/layout/Grid';
import Text from '../../src/components/foundation/Text';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import projects from '../../src/database/db.json';

function ProjectInternaScreen({ project, listProject }) {
  return (
    <Box flexGrow={1} padding="16px 0px">
      <Grid.Container
        display="flex"
        flexGrow={1}
        alignItems="center"
      >
        <Grid.Row
          flexDirection={{
            xs: 'column-reverse',
            md: 'row',
          }}
        >
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 4 }}
          >

            <img src={project.img} alt={project.title} />
          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text as="h1" variant="title">{project.title}</Text>
            <Text as="h3" variant="paragraph1">{project.text}</Text>
            <Link href={project.link} alt="project.title" target="_blank" underline>External Link</Link>
          </Grid.Col>

        </Grid.Row>
      </Grid.Container>
      <ProjectsList projects={listProject} />
    </Box>
  );
}

ProjectInternaScreen.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  listProject: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default websitePageHOC(ProjectInternaScreen);

export async function getStaticProps({ params }) {
  let foundProject = {};
  const listProject = projects.map((project) => {
    if (project.name === params.slug) {
      foundProject = project;
    }
    return { href: `/projects/${project.name}`, title: project.title };
  });

  return {
    props: {
      project: foundProject,
      listProject,
      pageWrapperProps: {
        seoProps: {
          headTitle: (foundProject.title || ''),
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = projects.reduce((valorAcumulado, project) => {
    const params = { params: { slug: project.name } };
    return [...valorAcumulado, params];
  },
  []);

  return {
    paths,
    fallback: false,
  };
}
