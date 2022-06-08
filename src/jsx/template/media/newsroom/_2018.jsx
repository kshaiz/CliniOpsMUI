import React from 'react';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, Link } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

import NewsArticle from '../../../component/news-article';

import Img from '../../../../img/media/newsroom/_2018/';


const template = () => {
  return (
    <>
      <Box id="2018">
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" color={blueGrey[200]}>
            <strong>2018</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <NewsArticle
            img={ImgMedhealthoutlook}
            alt=""
            link=""
            title=""
            date=""
          />
        </Grid>                
      </Box>
    </>
  );
}

export default template;