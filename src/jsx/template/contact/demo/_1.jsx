import React from 'react';
import { Stack, TextField, Button, Box, Grid } from '@mui/material';
import ConvertToForm from "./../../../../js/convertFormElementsToJSON";
import { DEMO_FORM_SUBMIT_URL } from "./../../../../js/consts";
import submitData from "./../../../../js/submitData";

const template = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = ConvertToForm(e.target.elements, [
      "fullName",
      "email",
      "phone",
      "organization",
      "cityCountry",
      "message",
    ]);
    submitData({
      formData: {
        data: formData,
        subject: "Request A Demo",
      },
      url: DEMO_FORM_SUBMIT_URL,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
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
          <label className="co-label">Organization</label>
          <TextField
            size="small"
            name="organization"
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
            placeholder="e.g. +1 123 456 7890"
            name="phone"
            variant="outlined"
            fullWidth
            required />
        </Stack>
        <Stack>
          <label className="co-label">City &amp; Country</label>
          <TextField
            size="small"
            name="cityCountry"
            variant="outlined"
            fullWidth
            required />
        </Stack>
        <Stack>
          <label className="co-label">Message</label>
          <TextField
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
    </form>
  );
}

export default template;