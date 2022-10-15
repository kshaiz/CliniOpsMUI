import React from "react";
import { Stack, TextField, Button, Box, Grid } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ConvertToForm from "./../../../../js/convertFormElementsToJSON";
import { CONTACT_FORM_SUBMIT_URL } from "./../../../../js/consts";
import submitData from "./../../../../js/submitData";

const initialVal = {
  fullName: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
};

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
      "subject",
      "message",
    ]);
    const data = await submitData({
      formData: {
        data: formData,
        subject: "Contact Form",
      },
      url: CONTACT_FORM_SUBMIT_URL,
    });
    if (data?.message === "Mail send") {
      alert("Your Information Submitted Successfully");
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
        message="Thanks for contacting us! We will be in touch with you shortly."
        action={actionSnackbar}
        sx={{ mt: "70px" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
        Thanks for contacting us! We will be in touch with you shortly.
        </Alert>
      </Snackbar>
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} sx={{ maxWidth: "100%", margin: "0 auto" }}>
        <Stack spacing={.5}>
          <label className="co-label">Full Name</label>
          <TextField
            size="small"
            placeholder="e.g. John Doe"
            name="fullName"
            variant="outlined"
            fullWidth
            required
          />
        </Stack>
        <Stack spacing={.5}>
          <label className="co-label">Email</label>
          <TextField
            size="small"
            placeholder="e.g. john.doe@example.com"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
        </Stack>
        <Stack spacing={.5}>
          <label className="co-label">Phone</label>
          <TextField
            size="small"
            placeholder="e.g. +1 (123) 456 7890"
            name="phone"
            variant="outlined"
            fullWidth
            required
          />
        </Stack>
        <Stack spacing={.5}>
          <label className="co-label">Organization</label>
          <TextField
            size="small"
            name="organization"
            variant="outlined"
            fullWidth
            required
          />
        </Stack>
        <Stack spacing={.5}>
          <label className="co-label">Subject</label>
          <TextField
            size="small"
            name="subject"
            variant="outlined"
            fullWidth
            required
          />
        </Stack>
        <Stack spacing={.5}>
          <label className="co-label">Message</label>
          <TextField
            size="small"
            name="message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
          />
        </Stack>
        <Box>
          <Button disabled={disabled} id="submitButton" size="large" variant="contained" type="submit">
            Send Message
          </Button>
        </Box>
      </Stack>
    </form>
    </>
  );
};

export default template;
