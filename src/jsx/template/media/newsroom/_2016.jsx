import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgMedia201601 from '../../../../img/media/newsroom/_2016/Media-2016-01.png';
import ImgMedia201602 from '../../../../img/media/newsroom/_2016/Media-2016-02.png';
import ImgMedia201603 from '../../../../img/media/newsroom/_2016/Media-2016-03.png';
import ImgMedia201604 from '../../../../img/media/newsroom/_2016/Media-2016-04.png';
import ImgMedia201605 from '../../../../img/media/newsroom/_2016/Media-2016-05.png';
import ImgMedia201606 from '../../../../img/media/newsroom/_2016/Media-2016-06.png';
import ImgMedia201607 from '../../../../img/media/newsroom/_2016/Media-2016-07.png';
import ImgMedia201608 from '../../../../img/media/newsroom/_2016/Media-2016-08.png';
import ImgMedia201609 from '../../../../img/media/newsroom/_2016/Media-2016-09.png';
import ImgMedia201610 from '../../../../img/media/newsroom/_2016/Media-2016-10.png';
import ImgMedia201611 from '../../../../img/media/newsroom/_2016/Media-2016-11.png';
import ImgMedia201612 from '../../../../img/media/newsroom/_2016/Media-2016-12.png';
import ImgMedia201613 from '../../../../img/media/newsroom/_2016/Media-2016-13.png';
import ImgMedia201614 from '../../../../img/media/newsroom/_2016/Media-2016-14.png';

const template = () => {
  return (
    <>
      <Box id="2016">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2016</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgMedia201601}
            alt="Article Header Image"
            link="http://www.ntdsupport.org/cor-ntd-innovation-lab"
            title="Neglected Tropical Disease Conference"
            date="November 10, 2016"
          />
          <NewsArticle
            img={ImgMedia201602}
            alt="Article Header Image"
            link="http://www.dolf.wustl.edu/?p=3385"
            title="Washington University School of Medicine"
            date="November 10, 2016"
          />
          <NewsArticle
            img={ImgMedia201603}
            alt="Article Header Image"
            link="http://ww2.frost.com/news/press-releases/pharmaceutical-sector-opportunities-it-microelectronics-cancer-screening-and-smart-packaging/?SRC=IN"
            title="TechVision, Frost &amp; Sullivan"
            date="October 27, 2016"
          />
          <NewsArticle
            img={ImgMedia201604}
            alt="Article Header Image"
            link="https://neonatology.stanford.edu/Research/POTR/neodesign.html"
            title="Stanford Medicine"
            date="October 11, 2016"
          />
          <NewsArticle
            img={ImgMedia201605}
            alt="Article Header Image"
            link="https://store.frost.com/emerging-technologies-energizing-the-future-of-the-pharmaceutical-sector.html"
            title="Frost &amp; Sullivan"
            date="September 28, 2016"
          />
          <NewsArticle
            img={ImgMedia201613}
            alt="Article Header Image"
            link="http://www.indiainnovates.in/press_images/FICCI-TCP.pdf"
            title="FICCI"
            date="September 28, 2016"
          />
          <NewsArticle
            img={ImgMedia201606}
            alt="Article Header Image"
            link="http://indiatoday.intoday.in/technology/story/apple-buys-gliimpse-health-data-startup/1/746657.html"
            title="India Today In Tech"
            date="August 23, 2016"
          />
          <NewsArticle
            img={ImgMedia201608}
            alt="Article Header Image"
            link="http://www.dcmsme.gov.in/SAMACHAR/MSME%20August%202016.pdf"
            title="Ministry of MSME, Govt of India"
            date="August 13, 2016"
          />
          <NewsArticle
            img={ImgMedia201607}
            alt="Article Header Image"
            link="https://blog.pokitdok.com/digital-health-companies/"
            title="Pokitdok"
            date="August 04, 2016"
          />
          <NewsArticle
            img={ImgMedia201609}
            alt="Article Header Image"
            link="http://www.techno-preneur.net/technology/new-technologies/imp/lmp16/CliniOps.htm"
            title="Dept of Science &amp; Tech (DST), Govt of India"
            date="August 04, 2016"
          />
          <NewsArticle
            img={ImgMedia201610}
            alt="Article Header Image"
            link="http://www.indiainnovates.in/topinnovations.aspx"
            title="DST-Lockheed Martin Innovation Award"
            date="June 12, 2016"
          />
          <NewsArticle
            img={ImgMedia201612}
            alt="Article Header Image"
            link="https://fremont.gov/"
            title="India Innovation Growth Program"
            date="June 03, 2016"
          />
          <NewsArticle
            img={ImgMedia201611}
            alt="Article Header Image"
            link="https://fremont.gov/"
            title="Best of Fremont Award"
            date="May 19, 2016"
          />
          <NewsArticle
            img={ImgMedia201614}
            alt="Article Header Image"
            link="https://www.scopesummit.com/16/"
            title="Scope Summit 2016"
            date="February 23, 2016"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;