import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgMedhealthoutlook from '../../../../img/media/newsroom/_2022/medhealthoutlook.png';
import ImgRoche from '../../../../img/media/newsroom/_2022/Media-2020-21.jpg';
import Img360Research from '../../../../img/media/newsroom/_2022/360iresearch.png';
import ImgFeb012022 from '../../../../img/media/newsroom/_2022/20220201.png';
import ImgFeb022022 from '../../../../img/media/newsroom/_2022/20220202.png';
import ImgFeb282022 from '../../../../img/media/newsroom/_2022/20220228.png';
import ImgMay012022 from '../../../../img/media/newsroom/_2022/20220501.png';
import ImgMay182022 from '../../../../img/media/newsroom/_2022/20220518.png';
import ImgJune102022 from '../../../../img/media/newsroom/_2022/20220610.png';
import ImgJune142022 from '../../../../img/media/newsroom/_2022/20220614.png';
import ImgJune232022 from '../../../../img/media/newsroom/_2022/20220623.jpg';
import Img20220904 from '../../../../img/media/newsroom/_2022/20220904.png';
import Img20220830 from '../../../../img/media/newsroom/_2022/20220830.png';



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
            img={Img20220904}
            alt="Article Header Image"
            link="https://www.ersnet.org/congress-and-events/congress/"
            title="European Respiratory Society, International Congress, 2022"
            date="September 4, 2022"
          />
          <NewsArticle
            img={Img20220830}
            alt="Article Header Image"
            link="https://www.fastcompany.com/90780899/are-hybrid-clinical-trials-a-pit-stop-as-the-pendulum-swings-to-decentralization"
            title="Are hybrid clinical trials a pit stop as the pendulum swings to decentralization?"
            date="August 30, 2022"
          />
          <NewsArticle
            img={ImgJune232022}
            alt="Article Header Image"
            link="https://www.linkedin.com/pulse/new-research-results-crila-herbal-supplement-reduces-symptoms-/"
            title="The American Society of Pharmacognosy Annual Conference, 2022"
            date="June 23, 2022"
          />
          <NewsArticle
            img={ImgJune142022}
            alt="Article Header Image"
            link="https://www2.everestgrp.com/reportaction/EGR-2022-46-R-5266/Marketing"
            title="Clinical Development Platforms Products PEAK Matrix® Assessment 2022"
            date="June 14, 2022"
          />
          <NewsArticle
            img={ImgJune102022}
            alt="Article Header Image"
            link="https://www.usatoday.com/story/sponsor-story/level-up/2022/06/10/meet-cutting-edge-tech-companies-disrupting-industry/7566391001/"
            title="Meet the Cutting edge tech companies disrupting the industry"
            date="June 10, 2022"
          />
          <NewsArticle
            img={ImgMay182022}
            alt="Article Header Image"
            link="https://www.linkedin.com/pulse/decentralized-studies-victory-sue-mckinney/"
            title="Decentralized Studies Victory"
            date="May 18, 2022"
          />
          <NewsArticle
            img={ImgMedhealthoutlook}
            alt="Article Header Image"
            link="https://medhealthoutlook.com/digital-health-solution-providers-list-2022/"
            title="Top 10 Digital Health Solution Providers 2022"
            date="May 11, 2022"
          />
          <NewsArticle
            img={ImgMay012022}
            alt="Article Header Image"
            link="https://theenterpriseworld.com/digital-health-solution-providers/"
            title="Most Promising Digital Health Solution Providers in 2022"
            date="May 1, 2022"
          />
          <NewsArticle
            img={ImgRoche}
            alt="Article Header Image"
            link="https://www.roche.com/"
            title="Futurist Series talk # 1 - Pharma’s approach to Decentralized Trials"
            date="April 19, 2022"
          />
          <NewsArticle
            img={ImgFeb282022}
            alt="Article Header Image"
            link="https://www.fastcompany.com/90722848/16-ways-to-manage-your-companys-image-from-the-inside-out"
            title="15 ways to manage your company’s image from the inside out"
            date="February 28, 2022"
          />
          <NewsArticle
            img={ImgFeb022022}
            alt="Article Header Image"
            link="https://www.fastcompany.com/90722550/15-ways-to-crush-quarterly-goals-in-2022"
            title="14 ways to crush quarterly goals in 2022"
            date="February 2, 2022"
          />
          <NewsArticle
            img={ImgFeb012022}
            alt="Article Header Image"
            link="https://board.fastcompany.com/profile/Avik-Pal-Founder-CEO-CliniOps-Inc/03b41de3-f8e2-4f4e-9676-ddfa0a895b3b"
            title="Avik Pal, CEO, CliniOps, joins the Fast Company Executive Board"
            date="February 1, 2022"
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