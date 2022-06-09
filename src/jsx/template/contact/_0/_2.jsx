import React from 'react';
import { Stack, Grid, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Grid container direction="row" spacing={4}>
        <Grid item xs={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d404860.6630182387!2d-121.983968!3d37.555678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc085d455ae0b%3A0xf3c0cc7a328847d5!2sMurco%20Building%2C%2038750%20Paseo%20Padre%20Pkwy%2C%20Fremont%2C%20CA%2094536!5e0!3m2!1sen!2sus!4v1628171696500!5m2!1sen!2sus" width="100%" height="300px" style={{border:0, borderRadius: '8px'}} allowFullScreen="" loading="lazy"></iframe>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">USA Contact</Typography>
          <Stack spacing={1} sx={{ mt: 1 }}>
            <Stack direction="row" spacing={2}>
              <LocationOnOutlinedIcon sx={{ color: blueGrey[500], mt: .25 }} />
              <Stack spacing={0}>
                <Typography>38750 Paseo Padre Parkway, Suite C8</Typography>
                <Typography variant="body2" color={blueGrey[700]}>Fremont, CA 94536, USA</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <LocalPhoneOutlinedIcon sx={{ color: blueGrey[500], mt: .25 }} />
              <Stack spacing={0}>
                <Typography>+1 (408) 829-4677</Typography>
                <Typography variant="body2" color={blueGrey[700]}>Mon to Fri 9am to 6pm</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <EmailOutlinedIcon sx={{ color: blueGrey[500], mt: .25 }} />
              <Stack spacing={0}>
                <Typography>info@cliniops.com</Typography>
                <Typography variant="body2" color={blueGrey[700]}>Send us your query anytime!</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default template;