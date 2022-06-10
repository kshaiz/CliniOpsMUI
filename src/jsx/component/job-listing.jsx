import React, { useState } from "react";

import { Box, Container, Grid, Typography, Chip, Stack, Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField } from "@mui/material";
import { LocationOnOutlined } from '@mui/icons-material';
import { blueGrey } from "@mui/material/colors";

const JobListingPage = (props) => {
  const [color] = useState(props.color);
  const [title] = useState(props.title);
  const [summary] = useState(props.summary);
  const [locations] = useState(props.location);

  const [open, setOpen] = React.useState(false);
  const handleApplyJob = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Dialog open={open} onClose={handleDialogClose} maxWidth="700px">
        <DialogTitle>Build Your Career With CliniOps</DialogTitle>
        <DialogContent dividers={true}>
          <Stack spacing={3} sx={{ minWidth: '400px', maxWidth: '600px', margin: '0 auto' }}>
            <Stack>
              <label className="co-label">Position Title</label>
              <Typography>{title}</Typography>
            </Stack>
            <Stack>
              <label className="co-label">Full Name</label>
              <TextField
                placeholder="e.g. John Doe"
                variant="outlined"
                fullWidth
                required
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
              />
            </Stack>
            <Stack>
              <label className="co-label">Resume</label>
              <input type="file" />
            </Stack>

          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleDialogClose}>Submit</Button>
          <Button onClick={handleDialogClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      
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
            <Button variant="contained" size="large" onClick={handleApplyJob}>Apply for this Job</Button>
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

export { JobListingPage};