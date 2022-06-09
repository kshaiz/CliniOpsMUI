import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgMedia201401 from '../../../../img/media/newsroom/_2014/Media-2014-01.png';
import ImgMedia201402 from '../../../../img/media/newsroom/_2014/Media-2014-02.png';
import ImgMedia201403 from '../../../../img/media/newsroom/_2014/Media-2014-03.png';
import ImgMedia201404 from '../../../../img/media/newsroom/_2014/Media-2014-04.png';
import ImgMedia201405 from '../../../../img/media/newsroom/_2014/Media-2014-05.png';
import ImgMedia201406 from '../../../../img/media/newsroom/_2014/Media-2014-06.png';
import ImgMedia201407 from '../../../../img/media/newsroom/_2014/Media-2014-07.png';
import ImgMedia201408 from '../../../../img/media/newsroom/_2014/Media-2014-08.png';
import ImgMedia201409 from '../../../../img/media/newsroom/_2014/Media-2014-09.png';
import ImgMedia201410 from '../../../../img/media/newsroom/_2014/Media-2014-10.png';
import ImgMedia201411 from '../../../../img/media/newsroom/_2014/Media-2014-11.png';
import ImgMedia201412 from '../../../../img/media/newsroom/_2014/Media-2014-12.png';
import ImgMedia201413 from '../../../../img/media/newsroom/_2014/Media-2014-13.png';
import ImgMedia201414 from '../../../../img/media/newsroom/_2014/Media-2014-14.png';

const template = () => {
  return (
    <>
      <Box id="2014">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2014</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgMedia201401}
            alt="Article Header Image"
            link="https://www.informationweek.com/healthcare/leadership/9-healthcare-tech-startups-to-watch/d/d-id/1318263"
            title="InformationWeek"
            date="December 29, 2014"
          />
          <NewsArticle
            img={ImgMedia201402}
            alt="Article Header Image"
            link="http://www.briefingwire.com/pr/cliniopss-yerramalli-subramaniam-recognized-as-computerworlds-premier-100-it-leaders-for-2015"
            title="Premier 100 IT Leaders 2015, by Computerworld"
            date="November 05, 2014"
          />
          <NewsArticle
            img={ImgMedia201403}
            alt="Article Header Image"
            link="https://www.innovationship.com/sep2014news"
            title="North Bay Innovation Summit"
            date="September 19, 2014"
          />
          <NewsArticle
            img={ImgMedia201404}
            alt="Article Header Image"
            link="http://socialcapitalmarkets.net/"
            title="SoCap Conference"
            date="September 02-05, 2014"
          />
          <NewsArticle
            img={ImgMedia201405}
            alt="Article Header Image"
            link="http://siliconvalleyforum.com/"
            title="IBM SmartCamp"
            date="August 19, 2014"
          />
          <NewsArticle
            img={ImgMedia201406}
            alt="Article Header Image"
            link="http://ceocfointerviews.com/interviews/CliniOps14.htm"
            title="CEO CFO Magazine"
            date="July 14, 2014"
          />
          <NewsArticle
            img={ImgMedia201407}
            alt="Article Header Image"
            link="http://www.chisite.org/"
            title="Diversity, Inclusion, &amp; Life Sciences Symposium"
            date="June 25, 2014"
          />
          <NewsArticle
            img={ImgMedia201408}
            alt="Article Header Image"
            link="https://thedoctorweighsin.com/data-capture-challenges-in-clinical-trials/"
            title="The Doctor Weighs In"
            date="June 09, 2014"
          />
          <NewsArticle
            img={ImgMedia201409}
            alt="Article Header Image"
            link="http://ddnwired.com/index.php?newsarticle=8502"
            title="Drug Discovery News"
            date="June 09, 2014"
          />
          <NewsArticle
            img={ImgMedia201410}
            alt="Article Header Image"
            link="http://vilcap.com/"
            title="Village Capital"
            date="June 04, 2014"
          />
          <NewsArticle
            img={ImgMedia201411}
            alt="Article Header Image"
            link="http://www.prweb.com/releases/cliniops_inc/esource_solution/prweb11860180.htm"
            title="TiE 50 Top Startups"
            date="May 16, 2014"
          />
          <NewsArticle
            img={ImgMedia201412}
            alt="Article Header Image"
            link="https://www.youtube.com/watch?v=gBoVpmmbpF8"
            title="TiE Media Lounge"
            date="May 16, 2014"
          />
          <NewsArticle
            img={ImgMedia201413}
            alt="Article Header Image"
            link="https://devpost.com/software/cliniops"
            title="Patient Engagement App Challenge"
            date="April 02, 2014"
          />
          <NewsArticle
            img={ImgMedia201414}
            alt="Article Header Image"
            link="http://eppicglobal.org/AnnualConference2014.asp"
            title="EPPICon Conference"
            date="March 29, 2014"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;