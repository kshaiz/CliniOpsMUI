import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

const PageHero = (props) => {
    const [color] = useState(props.color);
    
    return (
        <>
            <Box
                sx={{ pb: {xs: 5, md: 10}, pt: {xs:`calc(72px + 40px)`, md:`calc(72px + 80px)`} }}
                style={{
                    backgroundColor: color[50],
                    borderBottom: '8px solid',
                    borderImageSlice: 1,
                    borderWidth: '8px',
                    borderImageSource: `linear-gradient(to left, ${color[50]}, ${color[100]}, ${color[50]})`
                }}>
                <Container>
                    {props.children}
                </Container>
            </Box>
        </>
    )
};

const PageContent = (props) => {
    const [color] = useState(props.color);
    
    return (
        <>
            <Container>
                <Grid container spacing={{xs:5, md:10}} direction='column' sx={{ py: 10 }}>
                    {props.children}
                </Grid>
            </Container>
        </>
    )
};

const PageSectionLeftImg = (props) => {
  const heading = useState(props.heading);
  const [imgUrl] = useState(props.imgUrl);
  const imgTitle = useState(props.imgTitle);

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <img
            src={imgUrl}
            className='co-image'
            alt={imgTitle}
            title={imgTitle}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {heading}
          <Box sx={{ display: {sx: 'block', md: 'none'}, mt: 2, textAlign: 'center' }}>
            <img
              src={imgUrl}
              className='co-image'
              alt={imgTitle}
              title={imgTitle}
            />
          </Box>
          <Box sx={{ mt: 1, textAlign: {xs: 'center', md: 'left'} }}>
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </>
  )
};

const PageSectionRightImg = (props) => {
  const heading = useState(props.heading);
  const [imgUrl] = useState(props.imgUrl);
  const imgTitle = useState(props.imgTitle);

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          {heading}
          <Box sx={{ display: {sx: 'block', md: 'none'}, mt: 2, textAlign: 'center' }}>
            <img
              src={imgUrl}
              className='co-image'
              alt={imgTitle}
              title={imgTitle}
            />
          </Box>
          <Box sx={{ mt: 1, textAlign: {xs: 'center', md: 'left'} }}>
            {props.children}
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <img
            src={imgUrl}
            className='co-image'
            alt={imgTitle}
            title={imgTitle}
          />
        </Grid>
      </Grid>
    </>
  )
};
export { PageHero, PageContent, PageSectionLeftImg, PageSectionRightImg};