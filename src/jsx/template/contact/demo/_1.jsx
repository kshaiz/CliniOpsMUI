import React from 'react';
import { Stack, TextField, Button, Box, Grid } from '@mui/material';

const template = () => {
  return (
    <>
      <Stack spacing={2} sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <TextField label="Full Name*" />
        <TextField label="Organization*" />
        <TextField label="Email*" />
        <TextField label="Phone*" />
        <TextField label="City and Country*" />
        <TextField label="Message*"
          multiline
          maxRows={4}
        />
        <Box>
          <Button size="large" variant="contained">Send Request</Button>
        </Box>
      </Stack>
    </>
  );
}

export default template;