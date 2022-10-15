import React, { useState } from "react";

import { Box, Container, Grid, Typography, Chip, Stack, Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { LocationOnOutlined } from '@mui/icons-material';
import { blueGrey } from "@mui/material/colors";

import ConvertToForm from "./../../js/convertFormElementsToJSON";
import { RESUME_FORM_SUBMIT_URL } from "./../../js/consts";
import { SubmitAttachFormData } from "./../../js/submitData";

const JobListingPage = (props) => {
  const [color] = useState(props.color);
  const [title] = useState(props.title);
  const [summary] = useState(props.summary);
  const [locations] = useState(props.location);
  const [disabled, setDisabled] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const formRef = React.useRef(null);
  const formRefSubmit = React.useRef(null);

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

  const handleApplyJob = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    formRefSubmit.current.click();
  };

  const handleDialogCancel = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    setDisabled(true);
    e.preventDefault();
    const formData = ConvertToForm(formRef.current.elements, [
      "title",
      "fullName",
      "email",
      "coverLetter",
      // "resume",
    ]);

    const dataArray = new FormData();

    Object.keys(formData).forEach(item => {
      dataArray.append(item, formData[item]);
    })

    dataArray.append('resume', formRef.current.elements.resume.files[0]);
    dataArray.append('subject', "Resume");

    const data = await SubmitAttachFormData({
      formData: dataArray,
      url: RESUME_FORM_SUBMIT_URL,
    });
    if (data?.message === "Mail send") {
      setOpenSnackBar(true);
    } else {
      alert("Form submission failed");
    }
    setDisabled(false);
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} onClose={handleDialogClose} maxWidth="700px">
        <DialogTitle>Build Your Career With CliniOps</DialogTitle>
        <DialogContent dividers={true}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <Stack spacing={3} sx={{ minWidth: '400px', maxWidth: '600px', margin: '0 auto' }}>
              <Stack>
                <label className="co-label">Position Title</label>
                <Typography>{title}</Typography>
                <input type="hidden" name="title" value={title} />
              </Stack>
              <Stack>
                <label className="co-label">Full Name</label>
                <TextField
                  placeholder="e.g. John Doe"
                  variant="outlined"
                  fullWidth
                  required
                  name="fullName"
                  size="small"
                />
              </Stack>
              <Stack>
                <label className="co-label">Email</label>
                <TextField
                  type="email"
                  placeholder="e.g. john.doe@example.com"
                  variant="outlined"
                  fullWidth
                  required
                  name="email"
                  size="small"
                />
              </Stack>
              <Stack>
                <label className="co-label">Cover Letter</label>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  maxRows={4}
                  name="coverLetter"
                  size="small"
                />
              </Stack>
              <Stack>
                <label className="co-label">Resume</label>
                <input type="file" name="resume" />
              </Stack>
            </Stack>
            <input type="submit" style={{ display: 'none' }} ref={formRefSubmit} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disabled={disabled} onClick={handleDialogClose}>Submit</Button>
          <Button onClick={handleDialogCancel} disabled={disabled}>Cancel</Button>
        </DialogActions>
      </Dialog>
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

      <Box
        sx={{ pb: 10, pt: `calc(72px + 80px)` }}
        style={{
          backgroundColor: color[50],
          borderBottom: '8px solid',
          borderImageSlice: 1,
          borderWidth: '8px',
          borderImageSource: `linear-gradient(to left, ${color[50]}, ${color[100]}, ${color[50]})`
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h1" component="h1">{title}</Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button variant="contained" size="large" onClick={handleApplyJob}>Apply for this Job</Button>
            </Box>
          </Stack>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>{summary}</Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 2 }}
          >
            {locations.map((location) => (
              <Chip
                key={location}
                color="secondary"
                size="small"
                icon={<LocationOnOutlined />}
                label={location}
                sx={{ backgroundColor: blueGrey[500] }}
              />
            ))}
          </Stack>
          <Box mt={2} sx={{ display: { xs: 'block', md: 'none' } }}>
            <Button variant="contained" size="large" onClick={handleApplyJob}>Apply for this Job</Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={5} direction='column' sx={{ py: 10 }}>{props.children}</Grid>
        <Box sx={{ pb: 10, mt: -5 }}>
          <Button variant="contained" size="large" onClick={handleApplyJob}>Apply for this Job</Button>
        </Box>
      </Container>
    </>
  )
};

export { JobListingPage };