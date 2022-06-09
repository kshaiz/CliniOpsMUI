import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Box, Container, Grid, Divider, Link, Button } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { grey, common } from '@mui/material/colors';

import ImgCliniOps from '../../../img/CliniOps.svg';

import RouterList from '../../router';

const template = () => {
  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', top: 0, left: 0, backgroundColor: common.white, zIndex: 10 }}>
        <Container>
          <Grid container spacing={0} alignItems='center' justifyContent='stretch' direction="row">
            <Grid item sx={{ ml: -1 }}>
              <Link to={RouterList.home._0} component={RouterLink}>
                <Box
                  style={{
                    width: '170px',
                    height: '46px',
                    backgroundImage: `url(${ImgCliniOps})`,
                    backgroundSize: 'contain'
                  }}
                />
              </Link>
            </Grid>
            <Grid item>
              <Divider orientation="vertical" variant="middle" sx={{ height: '36px', margin: '0 8px 0 24px' }} flexItem />
            </Grid>
            <Grid item>
              <Link color={grey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.product._0} component={RouterLink}>Products</Link>
            </Grid>
            <Grid item>
              <Link color={grey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.service._0} component={RouterLink}>Services</Link>
            </Grid>
            <Grid item>
              <Link color={grey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.service._0} component={RouterLink}>
                  About
                  <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ ml: .5, mr: -1 }} />
              </Link>
            </Grid>
            <Grid item>
              <Link color={grey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.service._0} component={RouterLink}>
                Media
                <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ ml: .5, mr: -1 }} />
              </Link>
            </Grid>
            <Grid item>
              <Link color={grey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.contact._0} component={RouterLink}>Contact</Link>
            </Grid>
            <Grid item xs={true} />
            <Grid item>
              <Button variant="outlined" to={RouterList.contact.demo} component={RouterLink}>Request Demo</Button>
            </Grid>
          </Grid>
        </Container>
        <Divider />
      </Box>
    </>
  );
}

export default template;