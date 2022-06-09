import React from 'react';
import { Typography, Box } from '@mui/material';

import ImgInitialImpact from '../../../../img/media/blog/_3/initial-impace.png';

const template = () => {
  return (
    <>
      <Typography variant="body1">For the first time in almost three hundred years, the progress of global Clinical Trials has been brought to a standstill. The first systematic clinical trial was conducted by the physician James Lind in 1747 and had survived through several civil wars, two world wars, the great depression, Civil unrest, among many marked historical events. But now, the COVID-19 pandemic has affected virtually all aspects of life in the world, both personally and professionally. And, Clinical trials for drugs, biologicals and medical devices are not immune from this viral overturning of the world.</Typography>
      <Box mt={2}>
        <img
          src={ImgInitialImpact}
          alt="Initial Impact of Covid-19 on Clinical Trials and Technology Solutions | CliniOps"
          title="Initial Impact of Covid-19 on Clinical Trials and Technology Solutions | CliniOps"
          className="co-image"
          style={{ width: '100%', maxHeight: 'inherit' }}
        />
      </Box>
      <Typography variant="h2" sx={{ mt: 4 }}>Clinical Trials Today!</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>In April 2020, NPR's "Coronavirus Pandemic Brings Hundreds of U.S. Clinical Trials To A Halt" report identified 440 studies, potentially involving as many as 200,000 people, had been halted since March 1, 2020, with a quarter of them involving cancer treatment.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>And as of May 5, 2020, Berlin Institute of Health (BIH) (bgcarlisle.com) has reported over 2,500 clinical trials on ClinicalTrials.gov and were listed as suspended, terminated or stopped between December 1, 2019 and May 5, 2020. Further findings show that almost 44,000 patients were currently involved with those stopped or suspended trials, with a potential impact of 4,000,000 future patient enrollments.</Typography>

      <Typography variant="h2" sx={{ mt: 4 }}>Why are these important Clinical Studies stopped now?</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>These are driven by the following four primary factors:</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        <ol>
          <li><strong>Patients</strong> currently enrolled in clinical studies were unwilling and/or unable to come to physical healthcare centers (sites) to have their labs and other metrics measured, since most sites have become the vital link in responding to Covid-19 crisis.</li>
          <li><strong>Healthcare professionals (HCPs)</strong> involved with clinical studies and interaction with patients in those healthcare centers have been reassigned to “front-line duty” to test and treat patients in their treatment zone potentially or definitely suffering from COVID-19 symptoms and requiring medical management.</li>
          <li><strong>Study monitors</strong> who are part of the study conduct are unwilling and/or unable to visit trial sites, as part of the onsite monitoring responsibilities to carry on with the studies.</li>
        </ol>
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>All this culminating in <strong>sponsors</strong> and <strong>CROs</strong> desperately looking for ways help navigate through these difficult times.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}><strong>Sponsors</strong> including Pharma, biotech and device companies who are experiencing revenue cuts from their existing commercial products and making the decision to reduce and/or eliminate funding of clinical studies in the foreseeable future</Typography>
      
      <Typography variant="h2" sx={{ mt: 4 }}>The Response!</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>The FDA recently updated its guidance and provided clarification on managing protocol deviations and amendments for sponsors to consider when dealing in the area of clinical study interruption caused by Covid-19 (pharmavoice.com)</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Innovative technology solutions are quickly adopting to the changed ground reality and emerging in as the best risk mitigation option to sustain the Clinical Trials and Clinical Data Management.</Typography>
      
      <Typography variant="h2" sx={{ mt: 4 }}>What does the Future Hold for you?</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>CliniOps is diligently working with several Sponsors and CROs to help navigate through these difficult times. Some of the most common challenges and feature requests include but not limited to are telemedicine, connected device integrations, minimize travel for both monitors at sites and patients to hospitals, enabling remote monitoring (rSDV), and a host of other features.</Typography>
      
      <Typography variant="h2" sx={{ mt: 4 }}>Reach out to us now!</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>We can help restart trials that are on hold and regain momentum in the important clinical trial work your organization is conducting in these difficult times. Reach out to us today! We want to hear from you about your clinical trials, and your specific challenges.</Typography>
    </>
  );
}

export default template;