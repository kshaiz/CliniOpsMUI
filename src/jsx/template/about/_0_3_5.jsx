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
        title="Software Engineer, Mobile Development"
        location={["Fremont, CA", "Kolkata, India"]}
        summary="If you live and breathe mobile technologies, want to work on the cutting edge of iOS and Android app development, make a paradigm shift in an industry which has limited exposure to mobile technologies so far, we may have a challenging position for you."
        color={green}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Responsibilities &amp; Duties
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Act as lead iOS and/ or Android developer, and lead the entire app lifecycle right from concept stage until delivery and post launch support.</li>
              <li>Hands on developer, with ability to perform in both individual and team capacity.</li>
              <li>Work directly with developers and product managers to conceptualize, build, test and realize products.</li>
              <li>Gather requirements around functionality and translate those requirements into elegant functional solutions.</li>
              <li>Work along with the web developers to create and maintain a robust framework to support the apps.</li>
              <li>Work with the front end developers to build the interface with focus on usability features.</li>
              <li>Create compelling device specific user interfaces and experiences.</li>
              <li>Standardize the platform to deliver across multiple brands with minimal duplication of effort.</li>
              <li>Optimize performance for the apps.</li>
              <li>Keep up to date on the latest industry trends in the mobile technologies.</li>
              <li>Successful candidate will be heavily involved in driving the mobile strategy globally.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2">
            Qualifications &amp; Skills
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Bachelor degree on computer science or respective fields</li>
              <li>At least 5 years Experience in Development of Mobile Applications in Android (or) iOS.</li>
              <li>Familiar with iOS SDK (UIKit, Cocoa Touch, Core Data, Core Location, etc).</li>
              <li>Familiar with xcode, Objective C, Encryption.</li>
              <li>Strong OO design and programming skills in Java (J2EE/ J2ME).</li>
              <li>Familiar with the Android SDK.</li>
              <li>Knowledge of SQLite, MySQL or similar database management system.</li>
              <li>Experience on web service integration (SOAP, REST, JSON, XML).</li>
              <li>Good understanding of HTML5, JavaScript, jQuery, Ajax and PHP.</li>
              <li>Excellent debugging and optimization skills.</li>
            </ul>
          </Typography>
        </Grid>
      </JobListingPage>
    </>
  );
}

export default template;