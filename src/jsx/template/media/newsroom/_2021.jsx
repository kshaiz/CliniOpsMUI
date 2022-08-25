import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgBusinessAwards from '../../../../img/media/newsroom/_2021/businessAwards.png';
import ImgUnited from '../../../../img/media/newsroom/_2021/united.jpeg';
import ImgRoche from '../../../../img/media/newsroom/_2021/Media-2020-21.jpg';
import ImgAmazon from '../../../../img/media/newsroom/_2021/amazon.png';
import ImgResearchAndMarkets from '../../../../img/media/newsroom/_2021/Media-2018-08.png';
import ImgGartner from '../../../../img/media/newsroom/_2021/Media-2019-03.png';
import ImgUnitedConferences from '../../../../img/media/newsroom/_2021/Media-2021-apr.jpg';
import ImgHealthXL from '../../../../img/media/newsroom/_2021/Media-2021-01.jpg';
import ImgPlos from '../../../../img/media/newsroom/_2021/Media-2021-plos.jpg';
import ImgPopulationCouncil from '../../../../img/media/newsroom/_2021/Media-2021-lesotho.jpg';
import ImgWashingtonUniversity from '../../../../img/media/newsroom/_2021/Media-2021-jan.jpg';
import ImgInnovatorMD from '../../../../img/media/newsroom/_2021/Media-2020-21.png';
import ImgDec12021 from '../../../../img/media/newsroom/_2021/20211201.png';


const template = () => {
  return (
    <>
      <Box id="2021">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2021</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgBusinessAwards}
            alt="Article Header Image"
            link="https://www.apac-insider.com/apac-insider-magazine-announces-the-winners-of-the-2021-business-awards/"
            title="​Best Data Science Company - APAC Business Awards 2021"
            date="December 14, 2021"
          />
          <NewsArticle
            img={ImgDec12021}
            alt="Article Header Image"
            link="https://profiles.forbes.com/members/tech/profile/Yerramalli-Subramaniam-CTO-cliniops-com/abd469ec-af5a-4b34-9dae-ab94d9533d28"
            title="Yerramalli Subramaniam, CTO, CliniOps, joins the Forbes Technology Council"
            date="December 1, 2021"
          />
          <NewsArticle
            img={ImgUnited}
            alt="Article Header Image"
            link="https://unitedpharma.us/united-conference-of-generic-medicine-and-vaccines/"
            title="Novel and Research Advancements in Generic Medicines, Biosimilars and Vaccines"
            date="November 11, 2021"
          />
          <NewsArticle
            img={ImgRoche}
            alt="Article Header Image"
            link="https://www.roche.com/"
            title="Roche Supplier Day"
            date="November 3, 2021"
          />
          <NewsArticle
            img={ImgAmazon}
            alt="Article Header Image"
            link="https://aws.amazon.com/blogs/industries/running-next-generation-hybrid-and-virtual-clinical-trials-on-aws/"
            title="Running next generation hybrid and virtual clinical trials on AWS"
            date="October 27, 2021"
          />
          <NewsArticle
            img={ImgResearchAndMarkets}
            alt="Article Header Image"
            link="https://www.researchandmarkets.com/reports/5450267/clinical-trial-planning-and-design-services"
            title="Industry Trends and Global Forecasts, 2021-2030"
            date="August, 2021"
          />
          <NewsArticle
            img={ImgGartner}
            alt="Article Header Image"
            link="https://www.gartner.com/en"
            title="Hype Cycle for Life Science Research and Development, 2021"
            date="July 19, 2021"
          />
          <NewsArticle
            img={ImgUnitedConferences}
            alt="Article Header Image"
            link="https://unitedpharma.us/united-conference-of-biometrics-and-data-management/"
            title="United Conference of Biometrics and Data Management"
            date="April 14, 2021"
          />
          <NewsArticle
            img={ImgResearchAndMarkets}
            alt="Article Header Image"
            link="https://www.businesswire.com/news/home/20210325005692/en/Virtual-Clinical-Trials-Market-Research-Report-2021-Expanded-Access-Trials-Interventional-Trials-and-Observational-Trials---Global-Forecast-to-2025---ResearchAndMarkets.com"
            title="Virtual Clinical Trials Market Research Report 2021"
            date="March 25, 2021"
          />
          <NewsArticle
            img={ImgHealthXL}
            alt="Article Header Image"
            link="https://portal-beta.healthxl.com/meetings/ba261b72-4c99-45e8-9b80-ab667c1e754d?s=krk45&tab=members"
            title="Clinical Trials Innovation"
            date="March 25, 2021"
          />
          <NewsArticle
            img={ImgGartner}
            alt="Article Header Image"
            link="https://www.gartner.com/en"
            title="Industry Insights: Map Your Pathway to Digital Trials"
            date="March 24, 2021"
          />
          <NewsArticle
            img={ImgHealthXL}
            alt="Article Header Image"
            link="https://www.healthxl.com/virtual-events/d9ad92ca-7a89-4d52-a119-affa40519ece"
            title="Capturing Patient-Reported Outcomes in Trials with Tech"
            date="February 24, 2021"
          />
          <NewsArticle
            img={ImgPlos}
            alt="Article Header Image"
            link="https://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0009069"
            title="A PLoS Medicine publication on A safety and efficacy study for lymphatic filariasis in India"
            date="February 16, 2021"
          />
          <NewsArticle
            img={ImgPopulationCouncil}
            alt="Article Header Image"
            link="https://www.popcouncil.org/uploads/pdfs/2021HIV_ProjectSOAR_LesothoIMPROVE.pdf"
            title='A publication titled, "Optimizing Maternal and Child Health Outcomes Through Use of Multidisciplinary "IMPROVE" Teams in Lesotho"'
            date="January 30, 2021"
          />
          <NewsArticle
            img={ImgWashingtonUniversity}
            alt="Article Header Image"
            link="https://dolfproject.wustl.edu/our-team/data-management/"
            title='Washington University School of Medicine, St. Louis, partners with CliniOps'
            date="January 20, 2021"
          />
          <NewsArticle
            img={ImgInnovatorMD}
            alt="Article Header Image"
            link="https://www.linkedin.com/feed/update/urn:li:activity:6752387410006560768"
            title='InnovatorMD Global Summit 2021'
            date="January 9, 2021"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;