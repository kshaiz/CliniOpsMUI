import React, { useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { common } from "@mui/material/colors";

const HeroTile = (props) => {
  const [heading] = useState(props.heading);
  const [subheading] = useState(props.subheading);
    
  return (
    <>
      <Grid item>
        <Stack spacing={.25} sx={{ backgroundColor: 'rgba(255,255,255, .25)', padding: '20px 0', borderRadius: 1, textAlign: 'center', width: '150px' }}>
          <Typography color={common.white} variant="h1" component="body1" sx={{ fontWeight: 500 }}>
            {heading}
          </Typography>
          <Typography color={common.white} variant="body2" sx={{ fontWeight: 500 }}>
            {subheading}
          </Typography>
        </Stack>
      </Grid>
    </>
  )
};

export { HeroTile };