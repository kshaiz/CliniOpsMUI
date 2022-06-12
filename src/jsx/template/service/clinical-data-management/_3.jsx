import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgMedicalCoding from '../../../../img/service/clinical-data-management/medicalCoding.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Medical Coding
            </Typography>
          </Stack>
        }
        imgUrl={ImgMedicalCoding}
        imgTitle="Medical Coding"
      >
        <Typography sx={{ mt: 1 }}>
          Irrespective of the type of dictionary your study needs, our highly adaptable and automated dictionary coding platform will accurately and reproducibly code your medical history, therapy, procedure, and adverse event terms.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;