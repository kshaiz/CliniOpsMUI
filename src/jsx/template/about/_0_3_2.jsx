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
        title="Biostatistician"
        location={["Fremont, CA", "Kolkata, India"]}
        summary="We are seeking a highly-motivated Senior Biostatistician to join our team. This position provides statistical support for all phases of clinical development. Specific responsibilities include reviewing statistical sections of protocols, writing statistical analysis plans (SAP), developing SAS programs, and interacting with clients, and participate in FDA meetings as needed."
        color={green}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Responsibilities &amp; Duties
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Generate randomization schedules.</li>
              <li>Provide sample size calculations.</li>
              <li>Provide input into development of case report forms (CRFs).</li>
              <li>Author statistical analysis plans, including development of table and listing shells.</li>
              <li>Write analysis plans for eCTD submissions.</li>
              <li>Generate analysis datasets, tables, figures, and listings to support the analysis of clinical trials data using SAS.</li>
              <li>Provide programming support to supplemental or exploratory analyses for regulatory agencies or any other internal and external ad-hoc requests.</li>
              <li>Perform quality control for SAS programs and other study documents (e.g., presentations and reports).</li>
              <li>Provide statistical analysis and reports to Data Monitoring Committees (DMCs).</li>
              <li>Review output across programs to ensure consistency.</li>
              <li>Prepare statistical sections of clinical study reports.</li>
              <li>Interact directly with clients.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2">
            Qualifications &amp; Skills
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>MS or degree in Statistics and a minimum of 5 years of relevant industry experience.</li>
              <li>Knowledge of industry standards, such as the ICH guidelines, CDISC data structures, 21 CFR Part 11, and FDA guidelines.</li>
              <li>Experience with SAS.</li>
              <li>Excellent organizational skills, time management, and ability to coordinate workload and meet established deadlines.</li>
              <li>Excellent communication and interpersonal skills to effectively interface with others.</li>
            </ul>
          </Typography>
        </Grid>
      </JobListingPage>
    </>
  );
}

export default template;