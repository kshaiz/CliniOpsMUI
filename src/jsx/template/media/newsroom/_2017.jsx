import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgMedia201701 from '../../../../img/media/newsroom/_2017/Media-2017-01.png';
import ImgMedia201702 from '../../../../img/media/newsroom/_2017/Media-2017-02.png';
import ImgMedia201703 from '../../../../img/media/newsroom/_2017/Media-2017-03.png';
import ImgMedia201709 from '../../../../img/media/newsroom/_2017/Media-2017-09.png';
import ImgMedia201704 from '../../../../img/media/newsroom/_2017/Media-2017-04.png';
import ImgMedia201705 from '../../../../img/media/newsroom/_2017/Media-2017-05.png';
import ImgMedia201706 from '../../../../img/media/newsroom/_2017/Media-2017-06.png';
import ImgMedia201707 from '../../../../img/media/newsroom/_2017/Media-2017-07.png';
import ImgMedia201708 from '../../../../img/media/newsroom/_2017/Media-2017-08.png';
import ImgMedia201710 from '../../../../img/media/newsroom/_2017/Media-2017-10.png';
import ImgMedia201711 from '../../../../img/media/newsroom/_2017/Media-2017-11.png';
import ImgMedia201713 from '../../../../img/media/newsroom/_2017/Media-2017-13.png';
import ImgMedia201712 from '../../../../img/media/newsroom/_2017/Media-2017-12.png';
import ImgMedia201714 from '../../../../img/media/newsroom/_2017/Media-2017-14.png';
import ImgMedia201715 from '../../../../img/media/newsroom/_2017/Media-2017-15.png';
import ImgMedia201718 from '../../../../img/media/newsroom/_2017/Media-2017-18.png';
import ImgMedia201717 from '../../../../img/media/newsroom/_2017/Media-2017-17.png';
import ImgMedia201716 from '../../../../img/media/newsroom/_2017/Media-2017-16.png';
import ImgMedia201719 from '../../../../img/media/newsroom/_2017/Media-2017-19.png';
import ImgMedia201720 from '../../../../img/media/newsroom/_2017/Media-2017-20.png';
import ImgMedia201721 from '../../../../img/media/newsroom/_2017/Media-2017-21.png';
import ImgMedia201722 from '../../../../img/media/newsroom/_2017/Media-2017-22.png';
import ImgMedia201723 from '../../../../img/media/newsroom/_2017/Media-2017-23.png';
import ImgMedia201724 from '../../../../img/media/newsroom/_2017/Media-2017-24.png';
import ImgMedia201725 from '../../../../img/media/newsroom/_2017/Media-2017-25.png';

const template = () => {
  return (
    <>
      <Box id="2017">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2017</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgMedia201701}
            alt="Article Header Image"
            link="https://www.hcltech.com/white-papers/life-sciences-and-healthcare/esource-clinical-trials"
            title="A practical approach to adopting eSource for Clinical Trials"
            date="December 29, 2017"
          />
          <NewsArticle
            img={ImgMedia201702}
            alt="Article Header Image"
            link="https://siliconeer.com/current/a-memorable-ges-2017/"
            title="Siliconeer"
            date="December 16, 2017"
          />
          <NewsArticle
            img={ImgMedia201703}
            alt="Article Header Image"
            link="https://thetechnologyheadlines.com/avik-pal-nurturing-innovation-in-clinical-trials.html"
            title="The Technology Headlines"
            date="December 16, 2017"
          />
          <NewsArticle
            img={ImgMedia201709}
            alt="Article Header Image"
            link="https://www.facebook.com/ndtv/videos/10156099885735798/"
            title="Global Entrepreneurship Summit"
            date="November 28-30, 2017"
          />
          <NewsArticle
            img={ImgMedia201704}
            alt="Article Header Image"
            link="https://www.facebook.com/ndtv/videos/10156099885735798/"
            title="NDTV, Agenda at GES 2017"
            date="November 27, 2017"
          />
          <NewsArticle
            img={ImgMedia201705}
            alt="Article Header Image"
            link="https://indicanews.com/2017/11/16/avik-pal-represents-us-global-entrepreneurship-summitges/"
            title="US Department of State Delegate at GES 2017"
            date="November 16, 2017"
          />
          <NewsArticle
            img={ImgMedia201706}
            alt="Article Header Image"
            link="https://knect365.com/clinical-trials-innovation/article/a5d394f9-7488-48e3-8471-7b3b3563f095/clinical-data-wearables-quality-regulatory-privacy?utm_campaign=Share+Widget&utm_medium=Article+Share&utm_source=twitter"
            title="Clinical Trials Innovation"
            date="November 10, 2017"
          />
          <NewsArticle
            img={ImgMedia201707}
            alt="Article Header Image"
            link="http://www.abstractsonline.com/pp8/#!/4395/presentation/3477"
            title="American Society of Tropical Medicine and Hygiene (ASTMH) Annual Conference"
            date="November 07, 2017"
          />
          <NewsArticle
            img={ImgMedia201708}
            alt="Article Header Image"
            link="http://www.astmh.org/"
            title="American Society of Tropical Medicine and Hygiene (ASTMH) Annual Conference"
            date="November 07, 2017"
          />
          <NewsArticle
            img={ImgMedia201710}
            alt="Article Header Image"
            link="http://www.vicert.com/local/resources/assets/pdf/Doc%20-%20Vicert%20Digital%20Health%20Map.pdf"
            title="ViceRT Digital Health Map"
            date="October, 2017"
          />
          <NewsArticle
            img={ImgMedia201711}
            alt="Article Header Image"
            link="https://www.quantzig.com/blog/top-companies-digital-healthcare"
            title="4 Companies at the Top of their game in Digital Health"
            date="October, 2017"
          />
          <NewsArticle
            img={ImgMedia201713}
            alt="Article Header Image"
            link="https://www.aamasv.com/"
            title="AAMA Healthcare Conference"
            date="October 12, 2017"
          />
          <NewsArticle
            img={ImgMedia201712}
            alt="Article Header Image"
            link="https://thedoctorweighsin.com/squeezing-out-the-waste-with-digital-health-innovation/"
            title="The Doctor Weighs In"
            date="October 05, 2017"
          />
          <NewsArticle
            img={ImgMedia201714}
            alt="Article Header Image"
            link="https://health2con.com/conferences/past-conferences/"
            title="Health 2.0 Annual Fall Conference"
            date="October 03, 2017"
          />
          <NewsArticle
            img={ImgMedia201715}
            alt="Article Header Image"
            link="https://health2con.com/conferences/past-conferences/"
            title="Top 50 Indian Entrepreneur in US"
            date="August 11, 2017"
          />
          <NewsArticle
            img={ImgMedia201718}
            alt="Article Header Image"
            link="http://www.prnewswire.co.in/news-releases/frost--sullivan-awards-gala-draws-in-top-industry-leaders-for-prestigious-recognition-635591173.html"
            title="Frost Sullivan Excellence in Best Practices Awards Gala"
            date="July 20, 2017"
          />
          <NewsArticle
            img={ImgMedia201717}
            alt="Article Header Image"
            link="https://ww2.frost.com/event/calendar/2017-excellence-awards-nashville"
            title="Frost And Sullivan Awards Gala"
            date="July 19, 2017"
          />
          <NewsArticle
            img={ImgMedia201716}
            alt="Article Header Image"
            link="https://www.ceo-review.com/winners/cliniops-avik-pal/"
            title="Global CEO Excellence Award"
            date="July 18, 2017"
          />
          <NewsArticle
            img={ImgMedia201719}
            alt="Article Header Image"
            link="http://www.prweb.com/releases/prweb14414347.htm"
            title="Frost &amp; Sullivan Tech Leadership Award"
            date="June 11, 2017"
          />
          <NewsArticle
            img={ImgMedia201720}
            alt="Article Header Image"
            link="https://www.iitkgpfoundation.org/article.html?aid=196&nl"
            title="IIT Kharagpur Foundation"
            date="June 11, 2017"
          />
          <NewsArticle
            img={ImgMedia201721}
            alt="Article Header Image"
            link="http://mhealth.jmir.org/2017/10/e152/"
            title="JMIR Publications"
            date="June 10, 2017"
          />
          <NewsArticle
            img={ImgMedia201722}
            alt="Article Header Image"
            link="https://www.pas-meeting.org/"
            title="Pediatric Academic Societies (PAS)"
            date="May 07, 2017"
          />
          <NewsArticle
            img={ImgMedia201723}
            alt="Article Header Image"
            link="https://www.pas-meeting.org/"
            title="Everest Group"
            date="April 10, 2017"
          />
          <NewsArticle
            img={ImgMedia201724}
            alt="Article Header Image"
            link="https://www.youtube.com/watch?v=QXPUWDA0s7s"
            title="Society of Physician Entrepreneurs (SoPE)"
            date="January 19, 2017"
          />
          <NewsArticle
            img={ImgMedia201725}
            alt="Article Header Image"
            link="http://innovations.bmj.com/content/3/1/26"
            title="BMJ Journals"
            date="January 06, 2017"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;