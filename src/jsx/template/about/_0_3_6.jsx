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
        title="Clinical Data Management"
        location={["Fremont, CA", "Kolkata, India"]}
        summary="If you have worked with several cross-functional teams, across geographic locations to manage clinical data, here is your next challenge."
        color={green}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Responsibilities &amp; Duties
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Review documentation and requirements for new projects and anticipate impact to Data Management (DM) standards/processes.</li>
              <li>Collaborate with client team for all requirement gathering of CRFs, edit checks, subject calendars, user management, reporting requirements etc.</li>
              <li>Collaborate with internal project team (both onshore-offshore) as needed to stay abreast of and changes that could affect data collection, cleaning, change requests and/or transfers.</li>
              <li>Develop Data Management Plan (DMP), maintain DMP throughout lifecycle of study project and ensures DMP is followed according to study design and requirements.</li>
              <li>Review Protocols, and develop Case Report Forms and study reports.</li>
              <li>Develop trial database, including eCRF design, user requirements, edit rules/checks, query logic and data validations.</li>
              <li>Coordination of UAT of eCRF build and validation documents, included but not limited to: edit check document, issue logs, UAT summary report.</li>
              <li>Manage eSource/EDC users and other Clinical databases, including but not limited to, compiling master user lists and activating/deactivating user accounts.</li>
              <li>Perform user training both web-based and in-person at client locations, and create user guides.</li>
              <li>Assist in reconciling AE/SAE data in Safety DB and/or other Data Management DB, including but not limited to, performing MedDRA and/or WHO coding.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2">
            Qualifications &amp; Skills
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Bachelor’s degree in Technology, Medicine, Science or related field.</li>
              <li>At least five (5) years data management and/or related work experience in the pharmaceutical or CRO industry.</li>
              <li>Working knowledge of Good Clinical Practices, Good Manufacturing Practices, Clinical research, Clinical trial process and related regulatory requirements and terminology.</li>
              <li>Working knowledge of Clinical database applications such as EDC and CTMS.</li>
              <li>Excellent verbal and written skills, good organizational, interpersonal, and team skills.</li>
              <li>Applicable knowledge working with other clinical databases such as Oracle Clinical, Medidata Rave, etc.</li>
              <li>Experience with AE/SAE Coding, will be nice to have.</li>
              <li>Experience with working on Phase I- IV study trials.</li>
              <li>Ability to travel to site locations as needed (10-25%).</li>
            </ul>
          </Typography>
        </Grid>
      </JobListingPage>
    </>
  );
}

export default template;