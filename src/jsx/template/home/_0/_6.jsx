import React from "react";

import { Container, Box, Grid, Typography } from '@mui/material';
import { teal, common } from '@mui/material/colors';

import { AwardTile } from '../../../component/home';

import ImgAward1 from '../../../../img/home/hm-award-1-col.png';
import ImgAward2 from '../../../../img/home/hm-award-2-col.png';
import ImgAward3 from '../../../../img/home/hm-award-3-col.png';
import ImgAward4 from '../../../../img/home/hm-award-4-col.png';

const template = () => {
  return (
    <>
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography variant="h2" className="co-page-heading" sx={{ textAlign: 'center' }}>
            Awards and Recognition
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
            pt={4}
          >
            <Grid item>
              <AwardTile
                imgSrc={ImgAward1}
                source='Gartner'
                summary='Hype Cycle for Life Sciences'
                link='https://www.gartner.com/en/documents/3989136'
              />
            </Grid>
            <Grid item>
              <AwardTile
                imgSrc={ImgAward2}
                source='Frost &amp; Sullivan'
                summary='Technology Leadership Award'
                link='https://www.prweb.com/releases/2017/06/prweb14414347.htm'
              />
            </Grid>
            <Grid item>
              <AwardTile
                imgSrc={ImgAward3}
                source='FDA'
                summary='FDA Innovation Summit'
                link='https://www.fda.gov/about-fda/innovation-fda/innovate-today-summit-2019'
              />
            </Grid>
            <Grid item>
              <AwardTile
                imgSrc={ImgAward4}
                source='Pharma Voice'
                summary='Technology Innovation'
                link='https://www.pharmavoice.com/news/innovations-technologies/615901/'
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default template;