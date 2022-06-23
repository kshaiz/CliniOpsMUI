import React from 'react';
import { Typography, Box, Link } from '@mui/material';

import ImgClinicalTrials from '../../../../img/media/blog/_2/clinical-trials.png';

const template = () => {
  return (
    <>
      <img
        src={ImgClinicalTrials}
        alt="What the Future Holds for Clinical Trials | CliniOps"
        title="What the Future Holds for Clinical Trials | CliniOps"
        className="co-image"
        style={{ width: '100%', maxHeight: 'inherit' }}
      />
      <Link variant="link" href="https://www.crowdcast.io/e/half-time-special-June10th" target="_blank" underline="hover">Watch it here</Link>
      <Typography variant="h2" sx={{ mt: 2 }}>The Problem Today</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>CliniOps is heavily involved in addressing the issues post Covid-19 where over 70% of the studies are struggling to find new patients thanks to Covid-19 pandemic. And as of May 5, 2020, Berlin Institute of Health (BIH) (bgcarlisle.com) has reported over 2,500 clinical trials on ClinicalTrials.gov and were listed as suspended, terminated or stopped between December 1, 2019 and May 5, 2020. Further findings show that almost 44,000 patients were currently involved with those stopped or suspended trials, with a potential impact of 4,000,000 future patient enrollments. The real impact right now with COVID is that a lot of the big trial sites, and some smaller ones, are having to blend virtual with on-site.</Typography>
      <Typography variant="h2" sx={{ mt: 4 }}>CliniOps brings Smart Data Solutions to deCentralize to future proof the studies</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>And with CliniOps DeCentralized Clinical Trial platform, restarting stalled trials worldwide has become an easy task. With the ability to centralize the entire clinical trial process, and change the requirements by responding to the unique landscape we are in, CliniOps presents an unique opportunity to the Sponsors, the Clinical Research Organizations (CROs) worldwide to essentially resume the stalled trials. Patients can be remote, can collect the data securely by themselves, wherever possible, or have a remote medical professional source the data.</Typography>

      <Typography variant="h2" sx={{ mt: 4 }}>DeCentralized Trials - Key to Successful Trials during and after Covid-19</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>However, with the advent of decentralized clinical trials and CliniOps ability to incorporate virtual components such as ecourse, the big-scale oncology trials and other critical longer term trials, such as dermatology, as well as patients with Alzheimer's, Parkinson's disease or schizophrenia, may also benefit from a more comfortable experience at home and inspires participants to volunteer for clinical trials in the first place.</Typography>
    </>
  );
}

export default template;