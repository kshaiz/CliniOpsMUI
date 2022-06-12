import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgRSDV from '../../../../img/product/conduct/rsdv.png';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              rSDV
            </Typography>
          </Stack>
        }
        imgUrl={ImgRSDV}
        imgTitle="rSDV"
      >
        <Typography sx={{ mt: 1 }}>
          CliniOps offers remote video interaction between CROs and sites for site initiation and other remote monitoring activities. CliniOps also offers remote source data verification through centralized access control of specific users to access site data remotely. In addition, data that requires SDV are configured ahead of time that drastically minimizes the on-site SDV effort, since most data is collected as electronic source (eSource) at the site, and may not need SDV. The ability to remotely perform this task in lieu of on-site SDV saves significant time, money and effort, reduces travel to sites, and keeps the study moving forward without interruptions.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;