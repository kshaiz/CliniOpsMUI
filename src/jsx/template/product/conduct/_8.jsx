import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgDataScience from '../../../../img/product/conduct/data-science-for-life-science.png';

const template = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h2" component="h2" className="co-page-heading">
            Data Science for Life Science
          </Typography>
          <Typography sx={{ mt: 1 }}>
            CliniOps Data Science for Life Science feature has built-in Artificial Intelligence (AI), Machine Learning (ML) and Natural Language Processing (NLP) capabilities. These capabilities can be put to good use to help the Study team to streamline operations, proactively take informed decisions, leverage the power of data science. The Analytics is based on intelligent algorithms to analyze study trends and patterns. These features can be used across a wide variety of use cases across Study Setup, Study Conduct and Study Closeout activities.
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <img
            src={`${ImgDataScience}`}
            className='co-image'
            alt='Data Science for Life Science'
            title='Data Science for Life Science'
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;