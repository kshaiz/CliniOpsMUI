import React from 'react';
import { Typography, Grid } from "@mui/material";
import { green } from '@mui/material/colors';

import { JobListingPage } from '../../component/job-listing';

// Page Imports
import _0 from './career/_0';
import _1 from './career/_1';

const template = () => {
  return (
    <>
      <JobListingPage
        title="Sales Executive"
        location={["Fremont, CA", "Kolkata, India"]}
        summary="We are seeking an experienced Sales and Business Development executive to lead our sales team. This person will be responsible for the direct sales of CliniOps’s software products and services in the Life Science market. The ideal candidate will be energetic and driven, with an established track record selling enterprise software products and hosted SaaS products, to top tier Pharmaceutical, Biotechnology, Medical Device, and CRO companies. This position will require self-motivation, the ability to communicate at all levels and a good understanding of the CliniOps software solutions."
        color={green}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Responsibilities &amp; Duties
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Work closely with Management to develop and implement sales strategies, in order to achieve maximum revenue potential.</li>
              <li>Develop and maintain sales pipeline and achieve revenue and booking growth targets.</li>
              <li>Excellent presentation skills to perform product capability presentations, perform live product demonstrations via webinar, and develop sales proposals.</li>
              <li>Directly responsible for closing sales transactions with customers including new sales, upsells, cross sells, and renewals.</li>
              <li>Establish and build quality relationships, whilst maintaining a high level of customer service.</li>
              <li>Perform administrative tasks related to account management.</li>
              <li>Constantly maintain and update management of sales contract tracking system.</li>
              <li>Maintain knowledge of market conditions and competitive activities.</li>
              <li>Travel to meet customers when needed.</li>
              <li>Represent the company at conferences as appropriate.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2">
            Qualifications &amp; Skills
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Bachelors degree with atleast 10+ years of pharma software sales experience.</li>
              <li>Increasing sales experience with a proven and consistent track record of success.</li>
              <li>Broad networking skills; demonstrated ability to build relationships and to communicate at senior management level.</li>
              <li>Excellent interpersonal and phone skills for engaging, nurturing and closing customers, including presentation skills over the phone using a web presentation platform.</li>
              <li>Experience in clinical research and/or CRO networks is preferred.</li>
              <li>Experience with B2B sales of SaaS software is preferred.</li>
              <li>Demonstrated communication skills, both written and verbal, to work with customers including MDs, PhDs, and others in the clinical research community.</li>
              <li>An energetic and inspiring leader, with an ability to work in a fast paced, evolving environment.</li>
            </ul>
          </Typography>
        </Grid>
      </JobListingPage>
    </>
  );
}

export default template;