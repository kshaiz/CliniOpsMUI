import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgExportData from '../../../../img/service/clinical-data-management/exportData.jpeg';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: {xs: 'center', md: 'left'} }}>
              Import of External Data
            </Typography>
          </Stack>
        }
        imgUrl={ImgExportData}
        imgTitle="Import of External Data"
      >
        <Typography sx={{ mt: 1 }}>
          Import, Integration, and cleaning of external data (lab data, ECG, biological assays, Patient Diary, data from remote clinical monitoring devices, etc.) are an integral part of all studies. We design and validate programs to import and format data from third party vendors to ensure the integrity of the data. Our programs use verification checks to guarantee that the data imported from each external vendor is accurate and complete.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;