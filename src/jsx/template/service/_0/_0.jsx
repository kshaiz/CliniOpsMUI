import React from 'react';
import { Typography } from '@mui/material';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Our Services
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        CliniOps offers comprehensive data services to augment your in-house team, or the services provided by your CRO partner, throughout study startup, study conduct and study closeout phases. During study startup, our experienced configuration team supports the study build including configuration of forms, edit checks, workflows, reports, notifications et al., across all modules. A complete validation is also performed with CRF completion guidelines and release notes. During the study conduct phase, clinical data management, query resolution, user management and standard support services are provided. In addition, data reconciliation, DB lock, data transfer, data archival and other services are provided during the study closeout phase. Post that, CliniOps also provides, Biostatistics, TLF programming, ADaM, SDTM, and medical writing services.
      </Typography>
    </>
  );
}

export default template;