import React from 'react';
import { Stack, TextField, Button, Box, Grid } from '@mui/material';

const initialVal = {
  fullName: '',
  email: '',
  organization: '',
  subject: '',
  message: ''
}

const template = () => {
  return (
    <>
      <Stack spacing={3} sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <Stack>
          <label className="co-label">Full Name</label>
          <TextField
            size="small"
            placeholder="e.g. John Doe"
            name="fullName"
            variant="outlined"
            fullWidth
            required />
        </Stack>
        <Stack>
          <label className="co-label">Email</label>
          <TextField
            size="small"
            placeholder="e.g. john.doe@example.com"
            name="email"
            variant="outlined"
            fullWidth
            required />
        </Stack>
        <Stack>
          <label className="co-label">Phone</label>
          <TextField
            size="small"
            placeholder="e.g. +1 (123) 456 7890"
            name="phone"
            variant="outlined"
            fullWidth
            required />
        </Stack>
        <Stack>
          <label className="co-label">Organization</label>
          <TextField
            size="small"
            name="organization"
            variant="outlined"
            fullWidth
            required />
        </Stack>
        <Stack>
          <label className="co-label">Subject</label>
          <TextField
            size="small"
            name="subject"
            variant="outlined"
            fullWidth
            required />
        </Stack>
        <Stack>
          <label className="co-label">Message</label>
          <TextField
            size="small"
            name="message"
            variant="outlined"
            fullWidth
            required
            multiline
            maxRows={4} />
        </Stack>
        <Box>
          <Button size="large" variant="contained" type="submit">Send Message</Button>
        </Box>
      </Stack>
    </>
  );
}

export default template;