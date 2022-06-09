import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import ImgHealthXL from '../../../../img/media/newsroom/_2020/Media-2020-07.png';
import ImgScopeSummit from '../../../../img/media/newsroom/_2020/Media-2020-05.png';
import ImgISCR from '../../../../img/media/newsroom/_2020/Media-2020-06.png';
import ImgOutsourcingClinicalTrial from '../../../../img/media/newsroom/_2020/Media-2020-04.png';
import ImgPubMed from '../../../../img/media/newsroom/_2020/Media-Publications-01.png';
import ImgElectraLabs from '../../../../img/media/newsroom/_2020/Media-2020-14.png';
import ImgDataBridge from '../../../../img/media/newsroom/_2020/Media-2020-22.jpg';
import ImgStefanini from '../../../../img/media/newsroom/_2020/Media-2020-17.png';
import ImgMarketCorrespondent from '../../../../img/media/newsroom/_2020/Media-2020-23.jpg';
import ImgDBusiness from '../../../../img/media/newsroom/_2020/Media-2020-11.png';
import ImgVoicebot from '../../../../img/media/newsroom/_2020/Media-2020-13.png';
import ImgAIPoweredHealthcare from '../../../../img/media/newsroom/_2020/Media-2020-12.png';
import ImgInfinit from '../../../../img/media/newsroom/_2020/Media-2020-18.png';
import ImgClinoSol from '../../../../img/media/newsroom/_2020/Media-2020-16.png';
import ImgSoT from '../../../../img/media/newsroom/_2020/Media-2020-19.png';
import ImgTechCrunch from '../../../../img/media/newsroom/_2020/Media-2020-01.png';
import ImgGartner from '../../../../img/media/newsroom/_2020/Media-2019-03.png';
import ImgRoche from '../../../../img/media/newsroom/_2020/Media-2020-21.jpg';
import ImgStefTalks from '../../../../img/media/newsroom/_2020/Media-2020-20.jpg';
import ImgEverestGroup from '../../../../img/media/newsroom/_2020/Media-2020-22-(1).jpg';
import ImgODI from '../../../../img/media/newsroom/_2020/odi.jpg';
import ImgBecker from '../../../../img/media/newsroom/_2020/becker.png';
import ImgInnovatorMD from '../../../../img/media/newsroom/_2020/Media-2020-21.png';
import ImgTexasLifeScience from '../../../../img/media/newsroom/_2020/Media-2020-20.png';


const template = () => {
  return (
    <>
      <Box id="2020">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2020</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgODI}
            alt="Article Header Image"
            link="https://theodi.org/article/the-six-data-collaborations-chosen-for-our-new-peer-learning-network/"
            title='CliniOps collaborates with Microsoft, iKure & McGill, for AI in the treatment of non-communicable disease (NCD)'
            date="December 15, 2020"
          />
          <NewsArticle
            img={ImgBecker}
            alt="Article Header Image"
            link="https://beckergroupbusinessleadership.com/michael-akinyele-founder-managing-partner-at-the-maximizer-group-on-private-equity-in-healthcare-12-11-20/"
            title='Michael Akinyele talks about CliniOps in The Scott Becker Podcast'
            date="December 11, 2020"
          />
          <NewsArticle
            img={ImgInnovatorMD}
            alt="Article Header Image"
            link="https://www.igs2021.com/"
            title='Clinical Trials for Physicians'
            date="November 19, 2020"
          />
          <NewsArticle
            img={ImgTexasLifeScience}
            alt="Article Header Image"
            link="https://txlifescienceforum.org/agenda.htm"
            title='The Premier Life Science Conference in Texas'
            date="November 10-12, 2020"
          />
          <NewsArticle
            img={ImgStefanini}
            alt="Article Header Image"
            link="https://www.youtube.com/watch?v=ni15AkbZk8Q&list=PLpFaxUHOsZso1ashQjXMt7vAFmfQ60W5O&index=1"
            title='Patient Centricity with Digitization &amp; Decentralization of Trials'
            date="November 5, 2020"
          />
          <NewsArticle
            img={ImgEverestGroup}
            alt="Article Header Image"
            link="https://www2.everestgrp.com/reportaction/EGR-2020-46-R-3958/Marketing"
            title='CliniOps featured in Everest Group’s Clinical Development Platforms - Products - PEAK Matrix®, 2020'
            date="September 24, 2020"
          />
          <NewsArticle
            img={ImgStefTalks}
            alt="Article Header Image"
            link="https://register.gotowebinar.com/recording/recordingView?webinarKey=6322605685021700366&registrantEmail=nagesh.jadhav%40stefanini.com"
            title='Navigating COVID-19 with Smart and Virtual Trials'
            date="September 10, 2020"
          />
          <NewsArticle
            img={ImgRoche}
            alt="Article Header Image"
            link="https://procurementleaders.com/content/roches-virtual-supplier-day-focuses-on-innovation-and-speed-of-delivery/"
            title='Roche Supplier Day'
            date="September 2, 2020"
          />
          <NewsArticle
            img={ImgStefanini}
            alt="Article Header Image"
            link="https://stefanini.com/en/business-segment/life-science"
            title='The TRUST Platform, formed in partnership with CliniOps, supports Digital Clinical Trials with Decentralized / Virtual Trial capabilities'
            date="August 21, 2020"
          />
          <NewsArticle
            img={ImgGartner}
            alt="Article Header Image"
            link="https://www.gartner.com/en/documents/3989224/life-science-cios-map-your-pathway-to-digital-trials"
            title='Life Science CIOs: Map Your Pathway to Digital Trials'
            date="August 18, 2020"
          />
          <NewsArticle
            img={ImgGartner}
            alt="Article Header Image"
            link="https://www.gartner.com/en/documents/3989136/hype-cycle-for-life-science-research-and-development-202"
            title='Hype Cycle for Life Science Research and Development, 2020'
            date="August 13, 2020"
          />
          <NewsArticle
            img={ImgTechCrunch}
            alt="Article Header Image"
            link="https://techcrunch.com/events/tc-early-stage-sf-2020/"
            title='Tech Crunch Early Stage, SF'
            date="July 21 - 22, 2020"
          />
          <NewsArticle
            img={ImgSoT}
            alt="Article Header Image"
            link="https://www.toxicology.org/groups/rc/ncac/events.asp"
            title='Avik Pal spoke at the Society of Toxicology (SOT), at the 2020 Spring Virtual Symposium, on "Data Science for Life Science: In the post COVID-era"'
            date="June 25, 2020"
          />
          <NewsArticle
            img={ImgClinoSol}
            alt="Article Header Image"
            link="https://www.instagram.com/tv/CBqQfniBTT5/"
            title='Avik Pal on "ClinicalTrials in the post COVID era"'
            date="June 22, 2020"
          />
          <NewsArticle
            img={ImgInfinit}
            alt="Article Header Image"
            link="https://www.facebook.com/114576326848229/posts/149256763380185/?vh=e&d=n"
            title='Avik Pal Discussing, "The Future of The Pharma Industry - Where Is It Now And Where Is It Going?'
            date="June 10, 2020"
          />
          <NewsArticle
            img={ImgAIPoweredHealthcare}
            alt="Article Header Image"
            link="https://www.healthcareitnews.com/ai-powered-healthcare/collaborative-effort-taps-ai-enhance-clinical-trials"
            title='Collaborative effort taps AI to enhance clinical trials'
            date="June 05, 2020"
          />
          <NewsArticle
            img={ImgVoicebot}
            alt="Article Header Image"
            link="https://voicebot.ai/2020/06/04/how-a-virtual-assistant-may-speed-up-medical-clinical-trials/"
            title='How a Virtual Assistant May Speed Up Medical Clinical Trials'
            date="June 04, 2020"
          />
          <NewsArticle
            img={ImgDBusiness}
            alt="Article Header Image"
            link="https://www.dbusiness.com/daily-news/stefanini-group-in-southfield-launches-ai-virtual-assistant-sophie-to-power-new-life-science-portal/"
            title='Stefanini Group in Southfield Launches AI Virtual Assistant “Sophie” to Power New Life Science Portal'
            date="June 03, 2020"
          />
          <NewsArticle
            img={ImgMarketCorrespondent}
            alt="Article Header Image"
            link="https://themarketcorrespondent.com/massive-growth-in-global-clinical-data-management-market-set-to-witness-huge-growth-by-2025-ofni-systems-quanticate-oracle-cliniops-cytel-medidata-4g-clinical/"
            title='Global "Clinical Data Management Market" Forecast to 2026'
            date="June 03, 2020"
          />
          <NewsArticle
            img={ImgStefanini}
            alt="Article Header Image"
            link="https://stefanini.com/en/trends/news/stefanini-group-announces-trust-platform-to-transform-clinical-trials"
            title='Stefanini Group partners with CliniOps'
            date="May 26, 2020"
          />
          <NewsArticle
            img={ImgDataBridge}
            alt="Article Header Image"
            link="https://www.databridgemarketresearch.com/reports/global-pharma-clinical-trial-digitization-market"
            title='Global Pharma Clinical Trial Digitization Market Report: Market Trends and Forecast to 2027'
            date="May 05, 2020"
          />
          <NewsArticle
            img={ImgElectraLabs}
            alt="Article Header Image"
            link="https://www.elektralabs.com/clinical-trial-landscape"
            title='Media-2020-14.png'
            date="March 31, 2020"
          />
          <NewsArticle
            img={ImgPubMed}
            alt="Article Header Image"
            link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7098623/"
            title='A PubMed publication on "The safety of combined triple drug therapy in the neglected tropical diseases co-endemic setting of Fiji"'
            date="March 16, 2020"
          />
          <NewsArticle
            img={ImgOutsourcingClinicalTrial}
            alt="Article Header Image"
            link="https://www.arena-international.com/octwestcoast"
            title="Outsourcing in Clinical Trials, West Coast"
            date="March 03 - 04, 2020"
          />
          <NewsArticle
            img={ImgISCR}
            alt="Article Header Image"
            link="https://www.iscr.org/wp-content/uploads/2020/01/ISCR_AnnualConf_2020_BiosTrack_Speaker_Profile-min.pdf"
            title="ISCR Annual Conference, 2020"
            date="January 24 - 25, 2020"
          />
          <NewsArticle
            img={ImgScopeSummit}
            alt="Article Header Image"
            link="https://www.scopesummit.com/20"
            title="Scope Summit 2020"
            date="January 24 - 25, 2020"
          />
          <NewsArticle
            img={ImgHealthXL}
            alt="Article Header Image"
            link="https://www.healthxl.com/blog/healthxl-report-clinical-trials-optimization-with-digital-health"
            title="HealthXL Report: Clinical Trials Optimization with Digital Health"
            date="January 16, 2020"
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;