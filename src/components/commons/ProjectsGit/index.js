import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import Text from '@components/foundation/Text';
import Box from '@components/foundation/layout/Box';
import Grid from '@components/foundation/layout/Grid';
import LinksProjects from './styles/Projects';

export default function ProjectsGit() {
  const [gitProjects, setGitProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/paulohsz/repos').then(async (res) => {
      const response = await res.json();
      return response;
    })
      .then((data) => {
        setGitProjects(data);
      });
  }, []);

  return (
    <Grid.Container flexGrow={1}>
      <Grid.Row>
        <Grid.Col
          offset={{ xs: 0, sm: 1 }}
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
            Projects
          </Text>
          <Box paddingBottom={24} display="flex" flexDirection="column" flexGrow={1}>
            {gitProjects.map((project) => (
              <LinksProjects key={project.name} href={`/projects/${project.name}`}>
                {(project.description || project.name)}
              </LinksProjects>
            ))}
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

ProjectsGit.defaultProps = {
  // white: false, // About background (dark: blue, white: white)
};

ProjectsGit.propTypes = {
  // white: PropTypes.bool,
};
