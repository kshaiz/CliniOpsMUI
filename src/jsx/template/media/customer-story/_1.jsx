import React from 'react';
import { Grid } from '@mui/material';

import RouterList from '../../../router';
import BlogPost from '../../../component/blog-post';

import ImgVektorMedical from '../../../../img/media/customer-story/_1/vektor-medical-logo.jpg';

const template = () => {
  return (
    <>
      <Grid container columnSpacing={4} rowSpacing={8}>
        <BlogPost
          img={ImgVektorMedical}
          link={RouterList.media.customerstory_1}
          title="Configurable Platform Speeds Development of Complex Workflows in Ground-Breaking Clinical Study"
          date="Vektor Medical, Inc."
        />
      </Grid>
    </>
  );
}

export default template;