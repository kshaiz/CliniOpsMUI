import React from 'react';
import { Typography, Box, Link } from '@mui/material';

import ImgTelemedicine from '../../../../img/media/blog/_4/telemedicine.png';

const template = () => {
  return (
    <>
      <img
        src={ImgTelemedicine}
        alt="TeleMedicine Is the Answer to Clinical Trials During Covid -19 | CliniOps"
        title="TeleMedicine Is the Answer to Clinical Trials During Covid -19 | CliniOps"
        className="co-image"
        style={{ width: '100%', maxHeight: 'inherit' }}
      />
      <Typography variant="h2" sx={{ mt: 2 }}>Clinical Trials come to a screeching halt around the world</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Executing a <strong>clinical trial</strong> takes willing participants and patience for years of <strong>data collection</strong>, among other things. <strong>COVID-19</strong> has halted the traditional method of clinical trials, in which participants usually travel to a clinical site for an in-person evaluation. Also, engaging <strong>principal investigators</strong> and <strong>research staff</strong> to find ways to keep participants connected with studies.</Typography>

      <Typography variant="h2" sx={{ mt: 4 }}>Participants Not Available</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Finding participants during COVID-19 has become harder. The real impact right now with COVID is that a lot of the big trial sites, and some smaller ones, are having to blend virtual with on-site. However, the key goal is to ensure the organization has all of the tools to be ‘crisis robust,’ inorder to minimize the face-to-face, but also be selective on who is in the trial.</Typography>
      
      <Typography variant="h2" sx={{ mt: 4 }}>Long Term Trials Impacted Today</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Even the long term mission critical trials such as the oncology trials, Alzhemiers, Parkinson’s or schizophrenia among various others were stalled due to the pandemic and the impact is huge. However, with the advent of <strong>decentralized clinical trials</strong> and CliniOps ability to incorporate virtual components such as ecourse, the big-scale <strong>oncology trials</strong> and other critical longer term trials, such as dermatology, as well as patients with <strong>Alzheimer’s, Parkinson’s disease or schizophrenia</strong>, may also benefit from a more comfortable experience at home and inspires participants to volunteer for clinical trials in the first place.</Typography>
      
      <Typography variant="h2" sx={{ mt: 4 }}>The Clinical Trial Future - With CliniOps Solutions</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>CliniOps is working to fix the problems that are faced in clinical trials, from recruiting enough patients to moving toward more virtual aspects. Even before the pandemic, some clinical trials sectors were trying to implement virtual components, such as wearables for data collection. While, others adopted <strong>decentralized clinical trials</strong>, those executed through <strong>telemedicine</strong> and mobile or local <strong>health care providers</strong>.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}><strong>CliniOps</strong> platform supports both virtual and decentralized clinical trials, helping enroll patients and keep them engaged in the trials. In March, the <strong>U.S. Food and Drug Administration</strong> provided recommendations such as phone contact, virtual visits and “additional safety monitoring for those trial participants who may no longer have access to investigational products or the investigational site.”</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Meanwhile, the Centers for <strong>Medicare</strong> and <strong>Medicaid</strong> Services relaxed its reimbursement rates for telemedicine visits. As of May 15, the <strong>U.S. National Library of Medicine’s</strong> <Link href="https://clinicalTrials.gov" target="_blank" underline="hover">ClinicalTrials.gov</Link> site listed about 300,000 global research studies, including 1,500 related to COVID-19. Experts say 55,000 clinical trials are actively enrolling and providing care for participants worldwide.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Clinical trials need to have the same offerings as ordering food. For example: People will appreciate the convenience of doing it remotely, just like placing a food order. The key is to have relatable data. In the clinical trial world, a group of trials will still need to be on-site, especially those in which toxic compounds are administered, one group could go totally virtual and the last group could be a hybrid of the two.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>CliniOps has worked on its platform and <strong>data research</strong> for over five years now, with a singular goal to accelerate and optimize clinical trial design, <strong>recruitment and management</strong>. The process of evaluating patients is time-consuming and more than 85 percent of trials are delayed and even fail due to poor recruitment. While virtual clinical trials may attract a more diverse subset of participants, without some sort of consistent “facetime,” it may prove difficult to keep the participants.</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>In the quest to create a hybrid model, some clinical site operators are tapping into local resources, where the participants live, to manage certain aspects of the trial to keep them engaged. However, Adding some components of decentralized clinical trials could help revolutionize the industry, and help keep clinical trials going amid COVID-19, and even create an opportunity for trials that address the 7,000 rare diseases with no therapies on the market.</Typography>
    </>
  );
}

export default template;