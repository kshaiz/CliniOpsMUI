import React from 'react';
import { Typography, Box } from '@mui/material';

import ImgCovid19 from '../../../../img/media/blog/_5/covid19.png';

const template = () => {
  return (
    <>
      <Typography variant="body1">Clinical trials came to a complete standstill after CoronaVirus hit worldwide, as the impact of the virus has hit hospitals hard. Research has been forced to take a back seat because the hospitals (sites) did not want non critical care patients to visit the sites at all. Countries around the world have executed shelter-in-place policies, shutting businesses down and the impact was deeply felt by the clinical research industry.</Typography>
      <Box mt={2}>
        <img
          src={ImgCovid19}
          alt="COVID-19 Pandemic stalls Clinical trials worldwide! | CliniOps"
          title="COVID-19 Pandemic stalls Clinical trials worldwide! | CliniOps"
          className="co-image"
          style={{ width: '100%', maxHeight: 'inherit' }}
        />
        <Typography variant="body1" sx={{ mt: 2 }}>Much attention, and rightly so, is focused on the drugs the biopharma industry is developing to treat COVID-19. But those efforts could disguise a cost to public health, too, in the form of stalled progress on experimental medicines for other diseases.</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>Since March, 2020, nearly 100* companies have reported some sort of disruption to a clinical trial as a result of the coronavirus pandemic. Key among the issues faced by the Clinical Trials was the risk of having your patient visit a medical site during the pandemic. But with the eSource platform already deployed and used widely, CliniOps Clinical Operations DeCentralized Clinical Trial platform promises to restart the stalled trials worldwide.</Typography>
      </Box>
      <Typography variant="h2" sx={{ mt: 4 }}>Patients can’t visit the sites</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>With the ability to centralize the entire clinical trial process, and change the requirements by responding to the unique landscape we are in, CliniOps presents an unique opportunity to the Sponsors, the Clinical Research Organizations worldwide to essentially resume the stalled trials. Patients can be remote, can collect the data securely by themselves, wherever possible, or have a remote medical professional source the data.</Typography>
      
      <Typography variant="h2" sx={{ mt: 4 }}>Single Source</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Since the Source is electronic from day one, there is absolutely no delay to process and present the analysis, which CliniOps presents to the sponsors and Clinical Research Organizations near real time.</Typography>
      
      <Typography variant="h2" sx={{ mt: 4 }}>Source to Analytics in Real Time</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Secondly, since the source is electronic and available to the sites and Clinical Research Organizations, Real Time Data Analysis is readily available to the sponsors and the CROs. This saves a ton of time and money.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>If you or your CRO has a stalled trial that is hampering your quest to find a solution, please reach out to us right away, We would be more than happy to find ways to help you.</Typography>
    </>
  );
}

export default template;