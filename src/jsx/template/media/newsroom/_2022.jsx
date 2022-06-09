import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgMedhealthoutlook from '../../../../img/media/newsroom/_2022/medhealthoutlook.png';
import ImgRoche from '../../../../img/media/newsroom/_2022/Media-2020-21.jpg';
import Img360Research from '../../../../img/media/newsroom/_2022/360iresearch.png';


const template = () => {
  return (
    <>
      <Box id="2022">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2022</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgMedhealthoutlook}
            alt="Article Header Image"
            link="https://medhealthoutlook.com/digital-health-solution-providers-list-2022/"
            title="Top 10 Digital Health Solution Providers 2022"
            date="May 11, 2022"
          />
          <NewsArticle
            img={ImgRoche}
            alt="Article Header Image"
            link="https://www.roche.com/"
            title="Futurist Series talk # 1 - Pharma’s approach to Decentralized Trials"
            date="April 19, 2022"
          />
          <NewsArticle
            img={Img360Research}
            alt="Article Header Image"
            link="https://www.reportlinker.com/p06088806/Virtual-Clinical-Trials-Market-Research-Report-by-Study-Design-by-Implication-by-State-United-States-Forecast-to-Cumulative-Impact-of-COVID-19.html%E2%80%8B"
            title="​Virtual Clinical Trials Market Research Report, Forecast to 2027 - Cumulative Impact of COVID-19"
            date="January 2022"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;