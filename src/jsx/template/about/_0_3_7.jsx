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
        title="Manager, Quality Control"
        location={["Fremont, CA", "Kolkata, India"]}
        summary="You have worked with several cross-functional teams, across geographic locations to develop quality management system, information security and overall quality control. You have an attention to details."
        color={green}
      >
        <Grid item>
          <Typography variant="h3" component="h2" className="co-page-heading">
            Responsibilities &amp; Duties
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Implement quality management and quality controls for the organization.</li>
              <li>Develop the organizational structure, responsibilities, procedures, processes, standards and specifications.</li>
              <li>Perform systematic and independent examination of all activities and documents, to determine whether the evaluated activities were appropriately conducted and that the data were generated,recorded,analyzed, and accurately reported according to protocol, standard operating procedures (SOPs), and good clinical practices (GCPs).</li>
              <li>Conduct periodic operational checks within each functional department to ensure overall quality.</li>
              <li>Monitor production processes documenting and reporting deviations from SOPs, writing new and revising SOPs.</li>
              <li>Develop relevant quality tools and make sure managers and other staff understand how to improve the business; and stay compliant with the highest level of quality control.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2" className="co-page-heading">
            Qualifications &amp; Skills
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Relevant degree with knowledge of quality management modules.</li>
              <li>At least 10 years work experience in pharmaceutical, biotech or medical device industry.</li>
              <li>Developed and implemented quality management systems at other organizations.</li>
            </ul>
          </Typography>
        </Grid>
      </JobListingPage>
    </>
  );
}

export default template;