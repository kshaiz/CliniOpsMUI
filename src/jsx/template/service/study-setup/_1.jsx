import React from 'react';
import { Typography, Stack } from '@mui/material';

import { PageSectionLeftImg } from '../../../component/page';

import ImgProtocol from '../../../../img/service/study-setup/protocol.jpeg';

const template = () => {
  return (
    <>
      <PageSectionLeftImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
              Protocol Development
            </Typography>
          </Stack>
        }
        imgUrl={ImgProtocol}
        imgTitle="Protocol Development"
      >
        <Typography sx={{ mt: 1 }}>
          We offer comprehensive protocol development services utilizing our extensive and cross-functional scientific expertise.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          We form an early partnership with clients to ensure development of an executable trial with minimal protocol amendments.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Our expertise in regulatory affairs and knowledge of acceptable endpoints increases the probability that our protocols will be accepted by regulatory agencies across the world.
        </Typography>
      </PageSectionLeftImg>
    </>
  );
}

export default template;