import React from 'react';
import { Stack, TextField, Button, Box, Grid } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ConvertToForm from "./../../../../js/convertFormElementsToJSON";
import { DEMO_FORM_SUBMIT_URL } from "./../../../../js/consts";
import submitData from "./../../../../js/submitData";

const template = () => {
  const [openSnackbar, setOpenSnackBar] = React.useState(false);

  const handleSnackbarClose = (reason) => {
    setOpenSnackBar(false);
  };

  const actionSnackbar = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const [disabled, setDisabled] = React.useState(false);
  async function handleSubmit(e) {
    setDisabled(true);
    e.preventDefault();
    const formData = ConvertToForm(e.target.elements, [
      "fullName",
      "email",
      "phone",
      "organization",
      "cityCountry",
      "message",
    ]);
    const data = await submitData({
      formData: {
        data: formData,
        subject: "Request A Demo",
      },
      url: DEMO_FORM_SUBMIT_URL,
    });
    if (data?.message === "Mail send") {
      alert("Demo request submitted successfully");
      location.reload();
    } else {
      alert("Form Submission Failed");
    }
    setDisabled(false);
  }
  return (
    <>
    <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Your application has been submitted"
        action={actionSnackbar}
        sx={{ mt: "70px" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
          Your application has been submitted
        </Alert>
      </Snackbar>
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
            type="email"
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
            size="small"
            name="message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4} />
        </Stack>
        <Box>
          <Button id="submitButton" size="large" variant="contained" type="submit">Send Message</Button>
        </Box>
      </Stack>
    </form>
    </>
  );
}

export default template;