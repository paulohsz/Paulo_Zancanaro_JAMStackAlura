import React from 'react';
import HomeAbout from '@components/commons/HomeAbout';
import websitePageHOC from '@components/wrappers/WebsitePage/hoc';

function AboutScreen() {
  return (
    <>
      <HomeAbout white />
    </>
  );
}

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});
