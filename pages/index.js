import React from 'react';
import HomeProjects from '@components/commons/HomeProjects';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  return (
    <>
      <HomeProjects />
    </>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    homeAbout: true,
    seoProps: {
      headTitle: 'Home',
    },
  },
});
