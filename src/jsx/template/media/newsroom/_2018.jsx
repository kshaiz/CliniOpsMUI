import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgMedia201801 from '../../../../img/media/newsroom/_2018/Media-2018-01.png';
import ImgMedia201807 from '../../../../img/media/newsroom/_2018/Media-2018-07.png';
import ImgMedia201802 from '../../../../img/media/newsroom/_2018/Media-2018-02.png';
import ImgMedia201803 from '../../../../img/media/newsroom/_2018/Media-2018-03.png';
import ImgMedia201804 from '../../../../img/media/newsroom/_2018/Media-2018-04.png';
import ImgMedia201805 from '../../../../img/media/newsroom/_2018/Media-2018-05.png';
import ImgMedia201806 from '../../../../img/media/newsroom/_2018/Media-2018-06.png';
import ImgMedia201808 from '../../../../img/media/newsroom/_2018/Media-2018-08.png';


const template = () => {
  return (
    <>
      <Box id="2018">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2018</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgMedia201801}
            alt="Article Header Image"
            link="https://www.thenewworldreport.com/winners/2018-cliniops/"
            title="‘2018 Technology Elite Award’ for the Best Clinical Trials Digital Solutions Company"
            date="December 12, 2018"
          />
          <NewsArticle
            img={ImgMedia201807}
            alt="Article Header Image"
            link="https://ww2.frost.com/event/live-events/"
            title="Medical Technologies, F&amp;S Executive Mind Exchange"
            date="November 28, 2018"
          />
          <NewsArticle
            img={ImgMedia201802}
            alt="Article Header Image"
            link="https://ww2.frost.com/news/press-releases/asias-top-companies-recognized-at-the-2018-frost-sullivan-asia-pacific-best-practices-awards/"
            title="Frost &amp; Sullivan ‘2018 Global eSource Solutions Product Line Strategy Leadership Award’"
            date="November 28, 2018"
          />
          <NewsArticle
            img={ImgMedia201803}
            alt="Article Header Image"
            link="https://www.diaglobal.org/Flagship/DIA-2018/Program/Posters/Poster-Presentations/Poster-Presentations-Details?ParentProductID=6589208&ProductID=7326302&AbstractID=79333"
            title="DIA Conference 2018"
            date="June 24, 2018"
          />
          <NewsArticle
            img={ImgMedia201804}
            alt="Article Header Image"
            link="https://medium.com/the-slalom-daily-dose/the-secret-to-success-bec436e6974c"
            title="Slalom San Francisco Healthcare Life Sciences podcast"
            date="May 23, 2018"
          />
          <NewsArticle
            img={ImgMedia201805}
            alt="Article Header Image"
            link="https://medium.com/the-slalom-daily-dose/the-secret-to-success-bec436e6974c"
            title="Emerging Vendors for Remote Patient Monitoring and eSource/eCOA Solutions"
            date="May 17, 2018"
          />
          <NewsArticle
            img={ImgMedia201806}
            alt="Article Header Image"
            link="https://www.businesswire.com/news/home/20180223005412/en/Growth-Opportunities-Clinical-Trial-Data-Management-eClinical"
            title="Top Bay Area Digital Health Companies"
            date="April 06, 2018"
          />
          <NewsArticle
            img={ImgMedia201808}
            alt="Article Header Image"
            link="https://www.businesswire.com/news/home/20180223005412/en/Growth-Opportunities-Clinical-Trial-Data-Management-eClinical"
            title="Growth Opportunities in Clinical Trial Data Management and eClinical Solutions Market, Forecast to 2020"
            date="February 23, 2018"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;