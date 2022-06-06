import React from 'react';
import { Typography } from '@mui/material';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Study Setup
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        CliniOps offers a comprehensive study setup services. Our customized services are designed to help you configure your trials more efficiently. We will not only complement your internal team to achieve your goals but will also ensure transparency and collaboration through out the duration of your trial. Subject-matter experts who have experience with everything from simple single arm studies to complex multi-arm randomized global studies will form the core of the study setup team and will ensure that real-world issues are taken into account. We ensure timely study build cycles with early review phases and testing opportunities. In fact, before we provide you your study for User Acceptance Testing, it will go through a rigorous quality assurance and clinical review cycle.
      </Typography>
    </>
  );
}

export default template;