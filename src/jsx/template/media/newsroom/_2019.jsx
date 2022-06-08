import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgSCDM from '../../../../img/media/newsroom/_2019/Media-2019-01.png';
import ImgFrostSullivan from '../../../../img/media/newsroom/_2019/Media-2019-02.png';
import ImgGartner from '../../../../img/media/newsroom/_2019/Media-2019-03.png';
import ImgPubMed from '../../../../img/media/newsroom/_2019/Media-Publications-01.png';
import ImgFDA from '../../../../img/media/newsroom/_2019/Media-2019-04.png';
import ImgPlos from '../../../../img/media/newsroom/_2019/Media-2019-06.png';
import ImgUSISPF from '../../../../img/media/newsroom/_2019/Media-2019-15.png';
import ImgDia from '../../../../img/media/newsroom/_2019/Media-2019-07.png';
import ImgIITBayAreaAlumni from '../../../../img/media/newsroom/_2019/Media-2019-08.png';
import ImgTechnologyHeadlines from '../../../../img/media/newsroom/_2019/Media-2019-09.png';
import ImgRedHerringTop100 from '../../../../img/media/newsroom/_2019/Media-2019-10.png';
import ImgResearchMarkets from '../../../../img/media/newsroom/_2019/Media-2019-12.png';
import ImgAfricanMediaAgency from '../../../../img/media/newsroom/_2019/Media-2019-11.png';
import ImgGlobalExcellenceAwards from '../../../../img/media/newsroom/_2019/Media-2019-13.png';
import ImgEndocrinology from '../../../../img/media/newsroom/_2019/Media-2019-14.png';
import ImgVibrantGujaratSummit from '../../../../img/media/newsroom/_2019/Media-2019-16.png';


const template = () => {
  return (
    <>
      <Box id="2019">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2019</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgSCDM}
            alt="SCDM Annual Conference"
            link="https://s15.a2zinc.net/clients/MCI/SCDM2019/Public/SpeakerDetails.aspx?nav=true&FromPage=Speakers.aspx&ContactID=1307"
            title="SCDM Annual Conference, 2019"
            date="September 30, 2019"
          />
          <NewsArticle
            img={ImgFrostSullivan}
            alt="Frost &amp; Sullivan"
            link="https://store.frost.com/innovations-in-patient-monitoring-wearables-clinical-trial-ophthalmic-devices-and-medical-image-management.html"
            title="Digitization of Clinical Trials Improving Trial Efficiency"
            date="August 30, 2019"
          />
          <NewsArticle
            img={ImgGartner}
            alt="Gartner"
            link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6663033/"
            title="Featured in the Gartner Hype Cycle for Life Science R&D"
            date="August 02, 2019"
          />
          <NewsArticle
            img={ImgPubMed}
            alt="PubMed"
            link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6663033/"
            title="A PubMed on ‘Dosing pole recommendations for lymphatic filariasis elimination: A height-weight quantile regression modeling approach"
            date="July 17, 2019"
          />
          <NewsArticle
            img={ImgFDA}
            alt="FDA Innovate Today Summit 2019"
            link="https://www.fda.gov/about-fda/innovation-fda/innovate-today-summit-2019"
            title="FDA Innovate Today Summit 2019"
            date="July 17, 2019"
          />
          <NewsArticle
            img={ImgPubMed}
            alt="PubMed"
            link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6590784/"
            title="A PubMed Publication on ‘A community mass drug administration for lymphatic filariasis: A multicenter, open-label, cluster-randomized study’"
            date="June 24, 2019"
          />
          <NewsArticle
            img={ImgPlos}
            alt="PLoS Medicine"
            link="http://cliniops.com/June%2024,%202019"
            title="A PLoS Medicine Publication on A community mass drug administration for lymphatic filariasis"
            date="June 24, 2019"
          />
          <NewsArticle
            img={ImgUSISPF}
            alt="USISPF Delegation to India"
            link="http://ddnews.gov.in/national/pm-modi-inaugurates-9th-vibrant-gujarat-global-summit-gandhinagar"
            title="USISPF Delegation to India led by John Chambers"
            date="June 24, 2019"
          />
          <NewsArticle
            img={ImgDia}
            alt="DIA Conference 2019"
            link="https://dia2019globalannualmeeting.sched.com/event/KfY4"
            title="DIA Conference 2019"
            date="June 24, 2019"
          />
          <NewsArticle
            img={ImgIITBayAreaAlumni}
            alt="IIT Bay Area Alumni"
            link="https://www.iit-bayarea.org/tracks/Healthcare-and-Medicine-Through-Large-Scale-Data-Analytics"
            title="IIT Bay Area Alumni Conference 2019"
            date="June 15, 2019"
          />
          <NewsArticle
            img={ImgTechnologyHeadlines}
            alt="The Technology Headlines"
            link="https://www.thetechnologyheadlines.com/leader-speaks/RWE/"
            title="The Technology Headlines - Leader Speaks Series"
            date="May 01, 2019"
          />
          <NewsArticle
            img={ImgRedHerringTop100}
            alt="Red Herring Top 100 North America Winners"
            link="https://www.redherring.com/red-herring-2019-top-100-north-america-winners-press-release/"
            title="Red Herring Top 100 North America Winners"
            date="May 15, 2019"
          />
          <NewsArticle
            img={ImgResearchMarkets}
            alt="Research and Markets"
            link="https://www.businesswire.com/news/home/20190429005805/en/Pharma-Clinical-Trial-Digitization---Companies-to-Action-2019---ResearchAndMarkets.com"
            title="Pharma Clinical Trial Digitization – Companies to Action, 2019"
            date="April 29, 2019"
          />
          <NewsArticle
            img={ImgAfricanMediaAgency}
            alt="African Media Agency"
            link="https://africa.com/how-kenyas-fight-against-elephantiasis-is-becoming-a-blueprint-for-africa-and-the-world"
            title="How Kenya’s Fight Against Elephantiasis is Becoming a Blueprint for Africa and the World"
            date="April 14, 2019"
          />
          <NewsArticle
            img={ImgGlobalExcellenceAwards}
            alt="Global Excellence Awards 2019"
            link="https://www.acq-intl.com/"
            title="‘Global Excellence Awards’ for Most Innovative in Clinical Trial Digitalization Solutions 2019 – USA"
            date="February 12, 2019"
          />
          <NewsArticle
            img={ImgEndocrinology}
            alt="Endocrinology, Diabetes and Metabolism Journal"
            link="https://researchopenworld.com/a-polyherbal-indian-system-of-medicine-ayush-preparation-for-optimization-of-glycemic-control-in-newly-diagnosed-type-2-diabetes-and-prediabetes-a-multicenter-randomised-double-blind-placebo-co/"
            title="Endocrinology, A ‘Endocrinology, Diabetes and Metabolism Journal’ Publication"
            date="February 09, 2019"
          />
          <NewsArticle
            img={ImgVibrantGujaratSummit}
            alt="Vibrant Gujarat Summit"
            link="http://www.vibrantgujarat.com/"
            title="Vibrant Gujarat Summit"
            date="January, 2019"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;