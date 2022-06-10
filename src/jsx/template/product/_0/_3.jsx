import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';
import RouterList from '../../../router';

import ImgCliniOpsConduct from '../../../../img/product/_0/study-portal.jpeg';
import ImgLogo from '../../../../img/product/conduct/co-conduct.svg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <img
              src={ImgLogo}
              alt='CliniOps Conduct'
              title='CliniOps Conduct'
              style={{ height: '44px' }}
            />
            <Typography variant="h2" component="h2" className="co-page-heading">
              CliniOps Conduct
            </Typography>
          </Stack>
        }
        imgUrl={ImgCliniOpsConduct}
        imgTitle="CliniOps Conduct"
      >
        <Typography sx={{ mt: 1, textAlign: {xs: 'center', md: 'left'} }}>
          Unified platform to streamline Clinical data management, Clinical operations, and accelerated Regulatory submission processes. It enables central and remote monitoring (rSDV). Sponsors and CROs can view the data along with powerful dashboards, reports, and study KPIs, to support decentralized, virtual, or hybrid trials.
        </Typography>
        <Box sx={{ mt: 2, textAlign: {xs: 'center', md: 'left'} }}>
          <Button variant="text" to={RouterList.product.conduct} component={RouterLink} sx={{ ml: -1 }}>Read More</Button>
        </Box>
      </PageSectionLeftImg>
    </>
  );
}

export default template;