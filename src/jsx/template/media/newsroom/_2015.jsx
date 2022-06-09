import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgMedia201501 from '../../../../img/media/newsroom/_2015/Media-2015-01.png';
import ImgMedia201502 from '../../../../img/media/newsroom/_2015/Media-2015-02.png';
import ImgMedia201503 from '../../../../img/media/newsroom/_2015/Media-2015-03.png';
import ImgMedia201504 from '../../../../img/media/newsroom/_2015/Media-2015-04.png';
import ImgMedia201505 from '../../../../img/media/newsroom/_2015/Media-2015-05.png';
import ImgMedia201506 from '../../../../img/media/newsroom/_2015/Media-2015-06.png';
import ImgMedia201507 from '../../../../img/media/newsroom/_2015/Media-2015-07.png';
import ImgMedia201508 from '../../../../img/media/newsroom/_2015/Media-2015-08.png';
import ImgMedia201509 from '../../../../img/media/newsroom/_2015/Media-2015-09.png';
import ImgMedia201510 from '../../../../img/media/newsroom/_2015/Media-2015-10.png';
import ImgMedia201511 from '../../../../img/media/newsroom/_2015/Media-2015-11.png';
import ImgMedia201512 from '../../../../img/media/newsroom/_2015/Media-2015-12.png';
import ImgMedia201513 from '../../../../img/media/newsroom/_2015/Media-2015-13.png';
import ImgMedia201514 from '../../../../img/media/newsroom/_2015/Media-2015-14.png';
import ImgMedia201515 from '../../../../img/media/newsroom/_2015/Media-2015-15.png';


const template = () => {
  return (
    <>
      <Box id="2015">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2015</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgMedia201501}
            alt="Article Header Image"
            link="https://medcitynews.com/2015/11/andreessen-horowitz-investments/?utm_term&rf=1"
            title="Your Story"
            date="December 14, 2015"
          />
          <NewsArticle
            img={ImgMedia201502}
            alt="Article Header Image"
            link="https://medcitynews.com/2015/11/andreessen-horowitz-investments/?utm_term&rf=1"
            title="MedCity News"
            date="November 21, 2015"
          />
          <NewsArticle
            img={ImgMedia201503}
            alt="Article Header Image"
            link="https://www.radiantinsights.com/research/ehealth-market-analysis-by-product-ehr-eprescribing-clinical-decision-support-telemedicine-consumer-health-information-mhealth-health-management-information-system-by-services-monitoring-diagnostic-healthcare-strengthening-by-end-use-providers-insurers-government-healthcare-consumers-and-segment-forecasts-to-2022"
            title="Radiant Insights"
            date="November 11, 2015"
          />
          <NewsArticle
            img={ImgMedia201504}
            alt="Article Header Image"
            link="http://www.appcessories.co.uk/top-companies-that-are-revolutionising-digital-health/"
            title="Appcessories"
            date="October 08, 2015"
          />
          <NewsArticle
            img={ImgMedia201505}
            alt="Article Header Image"
            link="https://www.igi-global.com/book/software-innovations-clinical-drug-development/127502"
            title="IGI Global"
            date="September 16, 2015"
          />
          <NewsArticle
            img={ImgMedia201507}
            alt="Article Header Image"
            link="https://www.igi-global.com/book/software-innovations-clinical-drug-development/127502"
            title="DIA Conference 2015"
            date="June 16, 2015"
          />
          <NewsArticle
            img={ImgMedia201506}
            alt="Article Header Image"
            link="http://foundersguide.com/startups-flourishing-in-americas-5-leading-industries/"
            title="Founder's Guide"
            date="July 09, 2015"
          />
          <NewsArticle
            img={ImgMedia201508}
            alt="Article Header Image"
            link="https://innovatemedtec.com/content/top-2015-startups-infectious-disease"
            title="Nuviun"
            date="June 02, 2015"
          />
          <NewsArticle
            img={ImgMedia201509}
            alt="Article Header Image"
            link="https://innovatemedtec.com/content/top-2015-startups-infectious-disease"
            title="India West"
            date="May 15, 2015"
          />
          <NewsArticle
            img={ImgMedia201510}
            alt="Article Header Image"
            link="http://www.pharmavoice.com/article/innovations-technologies/"
            title="PharmaVoice"
            date="April 01, 2015"
          />
          <NewsArticle
            img={ImgMedia201511}
            alt="Article Header Image"
            link="http://www.marketwired.com/press-release/business-digital-transformation-recognized-computerworlds-2015-premier-100-award-1964194.htm"
            title="Agenda15 Conference"
            date="March 30, 2015"
          />
          <NewsArticle
            img={ImgMedia201512}
            alt="Article Header Image"
            link="https://wtvox.com/2015/03/top-10-companies-pushing-innovation-in-digital-health/"
            title="WT VOX"
            date="March 13, 2015"
          />
          <NewsArticle
            img={ImgMedia201513}
            alt="Article Header Image"
            link="https://www.techrepublic.com/article/12-companies-leading-the-way-in-digital-health/"
            title="TechRepublic"
            date="March 03, 2015"
          />
          <NewsArticle
            img={ImgMedia201514}
            alt="Article Header Image"
            link="http://hitconsultant.net/2015/02/10/can-mobile-health-streamline-the-clinical-trial-workflow/"
            title="HIT"
            date="February 10, 2015"
          />
          <NewsArticle
            img={ImgMedia201515}
            alt="Article Header Image"
            link="https://medcitynews.com/2015/02/cliniops-develops-offline-approach-download-data-clinical-trial-sites/"
            title="MedCity News"
            date="February 02, 2015"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;