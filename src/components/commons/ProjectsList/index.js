import React from 'react';
import PropTypes from 'prop-types';
import Text from '@components/foundation/Text';
import Box from '@components/foundation/layout/Box';
import Grid from '@components/foundation/layout/Grid';
import LinksProjects from './styles/Projects';

export default function ProjectsList({ projects, title }) {
  return (
    <Grid.Container flexGrow={1}>
      <Grid.Row>
        <Grid.Col
          offset={{ xs: 0, sm: 1 }}
          s
          value={{ xs: 12, md: 10 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            variant="title"
            tag="h1"
            color="secundary.main"
            textAlign="left"
          >
            {title}
          </Text>
          <Box paddingBottom={24} display="flex" flexDirection="column" flexGrow={1}>
            {projects.map((project) => (
              <LinksProjects key={project.href} href={project.href} target={(project.target || '_self')}>
                {project.title}
              </LinksProjects>
            ))}
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

ProjectsList.defaultProps = {
  projects: [],
  title: 'Projects',
};

ProjectsList.propTypes = {
  projects: PropTypes.instanceOf(Array),
  title: PropTypes.string,
};
