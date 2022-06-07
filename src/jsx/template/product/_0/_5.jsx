import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Grid, Box, Typography, Button } from '@mui/material';

import RouterList from '../../../router';

import ImgLogoCdisc from '../../../../img/product/_0/cdisc.png';
import ImgLogoScdm from '../../../../img/product/_0/scom.png';
import ImgLogoMeddra from '../../../../img/product/_0/meddra.png';
import ImgLogoUmc from '../../../../img/product/_0/umc.png';

const template = () => {
  return (
    <>
      <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
        Industry Recognitions
      </Typography>
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={6} direction='row' justifyContent="space-between" alignItems="center">
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
            <img
              src={`${ImgLogoCdisc}`}
              alt='Clinical Data Interchange Standards Consortium (CDISC)'
              title='Clinical Data Interchange Standards Consortium (CDISC)'
              style={{ maxWidth: '175px' }}
            />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Typography variant="body2">
                Clinical Data Interchange Standards Consortium (CDISC)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
            <img
              src={`${ImgLogoScdm}`}
              alt='Society for Clinical Data Management (SCDM)'
              title='Society for Clinical Data Management (SCDM)'
              style={{ maxWidth: '175px' }}
            />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Typography variant="body2">
                Society for Clinical Data Management (SCDM)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
            <img
              src={`${ImgLogoMeddra}`}
              alt='Medical Dictionary for Regulatory Activities (MedDRA)'
              title='Medical Dictionary for Regulatory Activities (MedDRA)'
              style={{ maxWidth: '175px' }}
            />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Typography variant="body2">
                Medical Dictionary for Regulatory Activities (MedDRA)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'center' }}>
            <img
              src={`${ImgLogoUmc}`}
              alt='Uppsala Monitoring Center (WhoDRUG)'
              title='Uppsala Monitoring Center (WhoDRUG)'
              style={{ maxWidth: '175px' }}
            />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Typography variant="body2">
                Uppsala Monitoring Center (WhoDRUG)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={2} direction='row' justifyContent="center" alignItems="center">
          <Grid item>
            <Typography>
              Interested in implementing CliniOps for your Clinical Trials?
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" to={RouterList.contact._0_1} component={RouterLink} sx={{ ml: -1 }}>Request Quote</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default template;