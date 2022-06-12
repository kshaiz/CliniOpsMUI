import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';


import ImgNewsletter from '../../../../img/product/connect/newsletters.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Videos &amp; Newsletters
            </Typography>
          </Stack>
        }
        imgUrl={ImgNewsletter}
        imgTitle="Videos &amp; Newsletters"
      >
        <Typography sx={{ mt: 1 }}>
          An important aspect of decentralized trials is to keep the patient constantly engaged with the study team. This will ensure that the patient dosent feel disconnected and gradually gains the confidence and gets comfortable with the remote model. One important way to achieve this, is to keep the patient constantly aware of study related details throughout the process. The Patient App supports study documents, videos, newsletters and other related information that can be shared by the study as the study progresses.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;