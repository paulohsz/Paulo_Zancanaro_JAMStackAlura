import React from 'react';
import HomeAbout from '@components/commons/HomeAbout';
import ProjectsList from '@components/commons/ProjectsList';
import websitePageHOC from '@components/wrappers/WebsitePage/hoc';

function AboutScreen({ gitHubProjects }) {
  return (
    <>
      <HomeAbout white />
      <ProjectsList projects={gitHubProjects} title="Projects · GitHub" />
    </>
  );
}

AboutScreen.propTypes = ProjectsList.propTypes;

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/paulohsz/repos');
  const data = await res.json();
  const list = data.map((project) => {
    const nameTitle = {
      href: `https://github.com/paulohsz/${project.name}`,
      title: `(GitHub) ${(project.description || project.name)}`,
      target: '_blank',
    };
    return nameTitle;
  });
  return {
    props: { gitHubProjects: list }, // will be passed to the page component as props
    revalidate: 60 * 60 * 24, // 1 day in seconds
  };
}
