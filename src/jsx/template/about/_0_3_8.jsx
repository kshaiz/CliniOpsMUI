import React from 'react';
import { Typography, Grid } from "@mui/material";
import { green } from '@mui/material/colors';

import { JobListingPage } from '../../component/job-listing';

// Page Imports
import _0 from './_0_3/_0';
import _1 from './_0_3/_1';

const template = () => {
  return (
    <>
      <JobListingPage
        title="Senior Software Engineer"
        location={["Fremont, CA", "Kolkata, India"]}
        summary="If you want to do cool things that matter, if you are willing to change the status quo, if you are the one who knows what is optimal and best technology to solve a specific problem, we may have a challenging position for you."
        color={green}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Responsibilities &amp; Duties
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Guide and lead a team of Software Engineers</li>
              <li>Analyse requirements, innovate solutions</li>
              <li>Design and code Web, mobile apps and microservices</li>
              <li>Perform System Test</li>
              <li>Provide support in performance test</li>
              <li>Design Automated Build, Test, Deployment environment</li>
              <li>Deploy on devices, backup code and other items in Bitbucket / cloud</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2">
            Qualifications &amp; Skills
          </Typography>
          <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
            Technical Skills:
          </Typography>
          <Typography sx={{ mt: -1 }}>
            <ul>
              <li>OS: Linux, windows</li>
              <li>Web application: LAMP stack, python frameworks, MicroServices Development, REST Api, Api gateway</li>
              <li>Mobile development: Cross platform, Android Studio, Xcode, React native/flutter, Firebase &amp; Google notifications</li>
              <li>Database: MySQL, high performance data pipelines, MongoDB</li>
              <li>Source Control: bitbucket/git/SourceTree</li>
              <li>Authentication: OAuth2.0, SAML</li>
            </ul>
          </Typography>
          <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
            Human Skills:
          </Typography>
          <Typography sx={{ mt: -1 }}>
            <ul>
              <li>Leadership: Ability to lead a module and a team of resources</li>
              <li>Inquisitive: Always open to learn and challenge limits</li>
              <li>Communication: Explain ideas easily and stay open-minded</li>
              <li>Decision making: Take design calls based on pros/cons</li>
              <li>Teamwork: Collaborative and ownership on project</li>
            </ul>
          </Typography>
          <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
            Work / Experience:
          </Typography>
          <Typography sx={{ mt: -1 }}>
            <ul>
              <li>Experience in analysis, design, coding and testing</li>
              <li>Experience in leading a cross functional team</li>
              <li>Hands on coding</li>
            </ul>
          </Typography>
        </Grid>
      </JobListingPage>
    </>
  );
}

export default template;