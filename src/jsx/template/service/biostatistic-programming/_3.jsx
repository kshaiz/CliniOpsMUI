import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgReporting from '../../../../img/service/biostatistic-programming/reporting.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Reporting
            </Typography>
          </Stack>
        }
        imgUrl={ImgReporting}
        imgTitle="Reporting"
      >
        <Typography sx={{ mt: 1 }}>
          Our seasoned biostatisticians are committed to excellence in preparing your statistical reports, writing statistical sections of clinical study reports, writing statistical sections of integrated study reports, and writing statistical portions of manuscripts.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;