import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgDatabaseDesign from '../../../../img/service/clinical-data-management/databaseDesign.jpeg';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: {xs: 'center', md: 'left'} }}>
              Database Design
            </Typography>
          </Stack>
        }
        imgUrl={ImgDatabaseDesign}
        imgTitle="Database Design"
      >
        <Typography sx={{ mt: 1 }}>
          Our expert database designers works closely with multidiscipline trial team to incorporate and implement protocol requirements and user specifications for database design.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Our database development will include FDA compliance, database validation and documentation, version control tracking and documentation, product accountability.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;