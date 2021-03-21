import React from 'react';
import Box from '@components/foundation/layout/Box';
import Text from '@components/foundation/Text';
import websitePageHOC from '@components/wrappers/WebsitePage/hoc';
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
      <Text
        variant="title"
        tag="h1"
        color="secondary.main"
        margin={0}
      >
        404
      </Text>
      <Text
        variant="subTitle"
        tag="span"
        color="secondary.main"
      >
        Error - Page Not Found
      </Text>
      <Text
        variant="paragraph1"
        tag="span"
        color="secondary.light"
        marginTop={14}
        textAlign="center"
      >
        Please Check the URL.
        {' '}
        <br />
        {' '}
        Otherwise,
        {' '}
        <Link
          href="/"
          alt="Home"
          color="secondary.main"
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
