import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Stack spacing={2}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.950296041014!2d88.47822881549494!3d22.580962238353145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020acd7b011da3%3A0x945936cc3b1d6253!2sWebel%20IT%20Park!5e0!3m2!1sen!2sus!4v1628451951316!5m2!1sen!2sus" width="100%" height="220px" style={{border:0, borderRadius: '8px'}} allowFullScreen="" loading="lazy"></iframe>
        <Box>
          <Typography variant="h4">India Contact</Typography>
          <Stack spacing={1} sx={{ mt: 1 }}>
            <Stack direction="row" spacing={2}>
              <LocationOnOutlinedIcon sx={{ color: blueGrey[500], mt: .25 }} />
              <Stack spacing={0}>
                <Typography>Webel IT Park, Module # 112, Action Area 1D, New Town</Typography>
                <Typography variant="body2" color={blueGrey[700]}>Kolkata, North 24 Parganas, 700160, WB, India</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <LocalPhoneOutlinedIcon sx={{ color: blueGrey[500], mt: .25 }} />
              <Stack spacing={0}>
                <Typography>+91 98319 96139</Typography>
                {/* <Typography variant="body2" color={blueGrey[700]}>Mon to Fri 9am to 6pm</Typography> */}
              </Stack>
            </Stack>
            {/* <Stack direction="row" spacing={2}>
              <EmailOutlinedIcon sx={{ color: blueGrey[500], mt: .25 }} />
              <Stack spacing={0}>
                <Typography>info@cliniops.com</Typography>
                <Typography variant="body2" color={blueGrey[700]}>Send us your query anytime!</Typography>
              </Stack>
            </Stack> */}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default template;