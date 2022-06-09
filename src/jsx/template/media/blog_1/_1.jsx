import React from 'react';
import { Typography, Box } from '@mui/material';

import ImgDiversity from '../../../../img/media/blog/_1/diversity.jpg';

const template = () => {
  return (
    <>
      <Typography variant="body1">Only 3% of the world population have ever participated in a Clinical trial. This has been a major issue for the clinical research industry. The “Lack of Diversity in Clinical Research” affects the trial outcomes and impacts the studies where people spend millions of dollars and decades of research. Among the key issues plaguing the effort to bring diversity to every clinical trial often is the ability to reach a diverse population. Either the site is too far, or the diversity within a region is too low, high travel times, and other hazards often are detrimental to diversity efforts. Many clinical trial companies are forced to exclude certain populations, age categories, and pre-existing conditions (or not, as the case may be) to ensure they are setting up proper trials as per the established procedures. Take for example, for several decades, research studies were completely focused on men, not allowing women to participate. (Another popular example may be people who suffer from <strong>comorbidities</strong>, such as: someone who is <strong>HIV positive</strong> and also diagnosed with cancer, typically are not allowed to participate).</Typography>
      <Box mt={2}>
        <img
          src={ImgDiversity}
          alt="Diversity in Clinical Research | CliniOps"
          title="Diversity in Clinical Research | CliniOps"
          className="co-image"
          style={{ width: '100%', maxHeight: 'inherit' }}
        />
        <Typography variant="body1" sx={{ mt: 2 }}>Telemedicine is here to change all that. It has become a savior for not just clinical research but also to the healthcare industry thanks to the rich echo system of remote patient care monitors and apps. Telemedicine ensures a much wider outreach to tap into patients located far and wide from the trial site, ensuring a much wider access to the patient population and thereby increasing diversity.</Typography>
      </Box>
      <Typography variant="h2" sx={{ mt: 4 }}>Clinical Research with Integrated Telemedicine</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Clinical Research Organizations (CROs) rely on the traditional methods to conduct and deliver clinical research. But often that results in limiting them to patients who are available locally. Integrated Telemedicine allows CROs to reach out to a wider population, recruit all available patients seamlessly onto the integrated platform. A Single Database and a Single source of Truth (eSource) helps CROs to ensure that they focus their time on the research rather than on operational modalities for endless hours.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>However, beyond Telemedicine, sponsors and study teams need to make a conscious effort to explore multiple aspects across various other ideas to ensure true diversity to their trials.</Typography>

      <Typography variant="h2" sx={{ mt: 4 }}>Here are six best ways to increase diversity in clinical trial industry:</Typography>
      <Typography variant="h4" component="h3" sx={{ mt: 1 }}>1. Leverage into community-based medical centers</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Clinical trials often take place in large research firms and academic facilities like Boston, New York, and Atlanta mainly due to their academic credentials and experience. But many patients who really require care, live in rural areas. The total time and cost for patients to commute between their home and doctor’s clinic is quite difficult. Therefore, stepping into the community-based medical centers and clinics can surely help in the research as they have more accessibility and a keen understanding of their local community if not for the big name.</Typography>
      
      <Typography variant="h4" component="h3" sx={{ mt: 1 }}>2. Develop Strong Relationships with patient advocacy groups</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>While some illnesses are common in a particular minority population, it might still be difficult for <strong>clinical trial companies</strong> to reach the right individuals. Typically, where patient advocacy groups enter. Patient Advocacy groups serve as a direct plug-in to the patient population and understands the organization's vision early on in the <strong>drug development process</strong>. It is highly necessary to educate the advocacy group on the trial. It might take some time to develop strong relationships with the patient advocacy groups, but once trust has been established, the result of the trial will surely leave the company with success.</Typography>
      
      <Typography variant="h4" component="h3" sx={{ mt: 1 }}>3. Use technology</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Everyone in the Clinical trial industry wants to be more <strong>patient-centric</strong>. It is very vital to adapt virtual clinical trials using technologies that enable the expansion of the trial into areas that are least concentrated and also minimize the difficulties for patients.</Typography>
      
      <Typography variant="h4" component="h3" sx={{ mt: 1 }}>4. Ensure Diversity in Policy decisions</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Maintaining diversity in clinical trials has been made mandatory in some countries. But, still not in the USA. Considering diverse representation in drug development has a higher priority for the clinical trial industry. The major power to enable diversity in clinical trials would be for the <strong>Food and Drug Administration Department</strong>. Making diversity in <strong>clinical trials</strong> mandatory would give answers to the existing and future illnesses.</Typography>
      
      <Typography variant="h4" component="h3" sx={{ mt: 1 }}>5. Make diversity in Clinical Research an internal namdate</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Real change in clinical trials will not happen unless diversity is enabled within an organization. There must be transparency within the organization and every professional must be goal-oriented and communicate properly to ensure diverse representation at every phase of the development.</Typography>
      
      <Typography variant="h4" component="h3" sx={{ mt: 1 }}>6. Expand the eligibility criteria</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Map out wider <strong>eligibility criteria</strong> earlier in the <strong>drug development process</strong> and clearly understand this is not an easy task for smaller companies, which have less resources and capital on hand. However, making minor changes to how we recruit patients for <strong>clinical trials</strong> will help us in predicting the onset of the disease and treat patients effectively with the practical data.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Therefore, the Clinical research industry must consider diverse groups, not just those that are easiest to access. Together, Telemedicine, <strong>patient experience, home health/phlebotomist</strong>, all are responsible for achieving the goal of bringing diversity in clinical research.</Typography>
    </>
  );
}

export default template;