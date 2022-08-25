import React from 'react';
import { Grid } from '@mui/material';

import RouterList from '../../../router';
import BlogPost from '../../../component/blog-post';

import ImgDiversity from '../../../../img/media/blog/diversity.jpg';
import ImgClinicalTrial from '../../../../img/media/blog/clinical-trials.png';
import ImgInitialImpact from '../../../../img/media/blog/initial-impace.jpg';
import ImgTelemedicine from '../../../../img/media/blog/telemedicine.jpg';
import ImgCovid19 from '../../../../img/media/blog/covid19.jpg';

const template = () => {
  return (
    <>
      <Grid container columnSpacing={4} rowSpacing={8}>
        <BlogPost
          img={ImgDiversity}
          link={RouterList.media.blog_1}
          title="Diversity in Clinical Research"
          date="August 26, 2020"
        />
        <BlogPost
          img={ImgClinicalTrial}
          link={RouterList.media.blog_2}
          title='Avik Pal, the founder, CliniOps, with Nagesh Jadhav, Director Stefanini discussing “What the Future Holds for Clinical Trials, Post Covid-19”'
          date="June 10, 2020"
        />
        <BlogPost
          img={ImgInitialImpact}
          link={RouterList.media.blog_3}
          title="Initial Impact of Covid-19 on Clinical Trials and Technology Solutions"
          date="June 09, 2020"
        />
        <BlogPost
          img={ImgTelemedicine}
          link={RouterList.media.blog_4}
          title="TeleMedicine Saves Stalled Trials by COVID-19 Pandemic"
          date="June 09, 2020"
        />
        <BlogPost
          img={ImgCovid19}
          link={RouterList.media.blog_5}
          title="COVID-19 Pandemic stalls Clinical trials worldwide!"
          date="May 28, 2020"
        />
      </Grid>
    </>
  );
}

export default template;