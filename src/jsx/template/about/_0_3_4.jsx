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
        title="Software Engineer, Full Stack"
        location={["Fremont, CA", "Kolkata, India"]}
        summary="If you want to do cool things that matter, if you are willing to change the status quo, if you are the one who knows what is optimal and best web, cloud and database technology to solve a specific problem, we may have a challenging position for you."
        color={green}
      >
        <Grid item>
          <Typography variant="h3" component="h2" className="co-page-heading">
            Responsibilities &amp; Duties
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Write well designed, testable, efficient code by using best software development practices.</li>
              <li>Integrate data from various back-end services and databases.</li>
              <li>Gather and refine specifications and requirements based on technical needs.</li>
              <li>Create and maintain software documentation.</li>
              <li>Stay plugged into emerging technologies/industry trends and apply them into operations and activities.</li>
              <li>Work closely with web designers to incorporate visual design intent.</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2" className="co-page-heading">
            Qualifications &amp; Skills
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <ul>
              <li>Bachelor in computer science or a related field.</li>
              <li>Experience with PHP , javascript , html, angularjs, jquery, python.</li>
              <li>Experience with Mysql database (triggers, optimization, schema development etc).</li>
              <li>A solid understanding of how web applications work including security, session management, and best development practices.</li>
              <li>Good knowledge of relational database systems, Object Oriented Programming and web application development.</li>
              <li>Hands-on experience with network diagnostics, network analytics tools.</li>
              <li>Ability to work and thrive in a fast-paced environment, learn rapidly and master diverse web technologies and techniques.</li>
              <li>LAMP stack and Zend framework a plus.</li>
              <li>Mobile application development using iOS , Android is a plus.</li>
              <li>Experience with AWS is a plus.</li>
              <li>Must be proficient in Linux environment.</li>
            </ul>
          </Typography>
        </Grid>
      </JobListingPage>
    </>
  );
}

export default template;