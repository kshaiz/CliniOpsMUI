import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';
import RouterList from '../../../router';

import ImgCliniOpsEdge from '../../../../img/product/_0/site-app.jpeg';
import ImgLogo from '../../../../img/product/edge/co-edge.svg';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <img
              src={ImgLogo}
              alt='CliniOps Edge'
              title='CliniOps Edge'
              style={{ height: '44px' }}
            />
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              CliniOps Edge
            </Typography>
          </Stack>
        }
        imgUrl={ImgCliniOpsEdge}
        imgTitle="CliniOps Edge"
      >
        <Typography sx={{ mt: 1, textAlign: {xs: 'center', md: 'left'} }}>
          Purpose-built for high quality &amp; real-time electronic data collection at source (eSource). The application runs on standard mobile devices in a complete offline mode, with all checks and balances, ensuring very clean and high-quality data, collected digitally at the point of care.
        </Typography>
        <Box sx={{ mt: 2, textAlign: {xs: 'center', md: 'left'} }}>
          <Button variant="text" to={RouterList.product.edge} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
        </Box>
      </PageSectionRightImg>
    </>
  );
}

export default template;