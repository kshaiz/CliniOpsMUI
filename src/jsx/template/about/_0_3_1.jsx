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
        title="Project Manager"
        location={["Fremont, CA", "Kolkata, India"]}
        summary="We are seeking an experienced project manager with experience in Information technology and Data Analytics, to join our team in India and support projects globally."
        color={green}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Responsibilities &amp; Duties
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Manage the operational aspects of projects and programs. Will ensure that all project work is completed in accordance with SOPs, policies and practices.</li>
              <li>Create, track and report on project timelines.</li>
              <li>Produce and distribute status and tracking for internal and external team members and senior management.</li>
              <li>Responsible for resource allocation tracking deliverables.</li>
              <li>May participate in proposal development and sales/proposal presentations.</li>
              <li>Monitor and coordinate efforts of cross-functional project teams and project resources within and outside the organization.</li>
              <li>Meet with team members on a regular basis regarding project tasks to ensure project milestones are met.</li>
              <li>Lead problem solving and resolution efforts.</li>
              <li>Should be self-driven and display leadership skills.</li>
              <li>Produce and distribute reports and presentation materials.</li>
              <li>Partner with senior management to develop and implement process improvements.</li>
              <li>Prepare and present project information at internal and external meetings.</li>
              <li>Ensure that work is conducted in compliance with standard processes, policies and procedures and meets project timeline metrics.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2">
            Qualifications &amp; Skills
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Bachelors degree 10 years of related experience; or equivalent combination of education, training and experience.</li>
              <li>Ability to manage multifunctional teams and build a conducive work atmosphere including Onshore-offshore coordination experience.</li>
              <li>Strong communication and interpersonal skills.</li>
              <li>Good problem solving skills.</li>
              <li>Demonstrated ability to deliver results to the appropriate quality and timeline metrics.</li>
              <li>Good teamwork skills, and good judgment.</li>
              <li>Excellent customer service skills.</li>
              <li>Ability to work with minimal direction</li>
              <li>Strong software and computer skills, including MS Office applications.</li>
              <li>Ability to establish and maintain effective working relationships with coworkers, managers and clients.</li>
              <li>25% Travel may be required.</li>
            </ul>
          </Typography>
        </Grid>
      </JobListingPage>
    </>
  );
}

export default template;