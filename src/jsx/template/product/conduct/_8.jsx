import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

import { PageSectionRightImg } from '../../../component/page';

import ImgDataScience from '../../../../img/product/conduct/data-science-for-life-science.png';

const template = () => {
  return (
    <>
      <PageSectionRightImg
        heading={
          <Stack direction="row" spacing={1} alignItems='center' justifyContent={{xs: 'center', md: 'flex-start'}}>
            <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: {xs: 'center', md: 'left'} }}>
              Data Science for Life Science
            </Typography>
          </Stack>
        }
        imgUrl={ImgDataScience}
        imgTitle="Data Science for Life Science"
      >
        <Typography sx={{ mt: 1 }}>
        CliniOps Data Science for Life Science feature has built-in Artificial Intelligence (AI), Machine Learning (ML) and Natural Language Processing (NLP) capabilities. These capabilities can be put to good use to help the Study team to streamline operations, proactively take informed decisions, leverage the power of data science. The Analytics is based on intelligent algorithms to analyze study trends and patterns. These features can be used across a wide variety of use cases across Study Setup, Study Conduct and Study Closeout activities.
        </Typography>
      </PageSectionRightImg>
    </>
  );
}

export default template;