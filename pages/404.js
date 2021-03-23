import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Box from '@components/foundation/layout/Box';
import Text from '@components/foundation/Text';
import websitePageHOC from '@components/wrappers/WebsitePage/hoc';
import P404 from '../src/components/animation/404.json';
import Link from '../src/components/commons/Link';

function Page404() {
  return (
    <Box
      display="flex"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Lottie
        width="384px"
        height="216px"
        config={{ animationData: P404, loop: true, autoplay: true }}
      />
      {/* https://lottiefiles.com/4339-not-found */}
      <Text
        variant="paragraph1"
        tag="span"
        color="secondary.light"
        marginTop={14}
        textAlign="center"
      >
        Please Check the URL.
        <br />
        Otherwise,
        {' '}
        <Link
          href="/"
          alt="Home"
          color="secondary.main"
          underline
        >
          click here
        </Link>
        {' '}
        to be redirected to the homepage.
      </Text>

    </Box>
  );
}

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404 Not Found',
    },
  },
});
