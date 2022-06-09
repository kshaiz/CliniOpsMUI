import React from 'react';
import { Grid, Stack, Typography, TextField, Button, Box, Select, MenuItem, FormControl, FormControlLabel, FormLabel, FormGroup, InputLabel, Checkbox } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const template = () => {
  const [ sponsorType, setSponsorType ] = React.useState('');
  const handleChangeSponsorType = (event) => {
    setSponsorType(event.target.value);
  };

  const [ therapeuticArea, setTherapeuticArea ] = React.useState('');
  const handleChangeTherapeuticArea = (event) => {
    setTherapeuticArea(event.target.value);
  }

  const [ startDateMonth, setStartDateMonth ] = React.useState('');
  const handleChangeStartDateMonth = (event) => {
    setStartDateMonth(event.target.value);
  }

  const [ vendorDecisionMonth, setVendorDecisionMonth ] = React.useState('');
  const handleChangeVendorDecisionMonth = (event) => {
    setVendorDecisionMonth(event.target.value);
  }

  const [ numberOfSite, setNumberOfSite ] = React.useState('');
  const handleChangeNumberOfSite = (event) => {
    setNumberOfSite(event.target.value);
  }

  const [ numberOfForm, setNumberOfForm ] = React.useState('');
  const handleChangeNumberOfForm = (event) => {
    setNumberOfForm(event.target.value);
  }

  const [ numberOfVisit, setNumberOfVisit ] = React.useState('');
  const handleChangeNumberOfVisit = (event) => {
    setNumberOfVisit(event.target.value);
  }

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  
  return (
    <>
      <Stack spacing={4} sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <TextField label="Study Name*" />
        <FormControl fullWidth>
          <InputLabel id="quote-sponsor-type-label">Sponsor Type</InputLabel>
          <Select
            labelId="quote-sponsor-type-label"
            id="quote-sponsor-type"
            value={sponsorType}
            label="Sponsor Type"
            onChange={handleChangeSponsorType}
          >
            <MenuItem value="" sx={{color: blueGrey[300] }}>Select Sponsor Type</MenuItem>
            <MenuItem value="Academic Institute">Academic Institute</MenuItem>
            <MenuItem value="Biotechnology Company">Biotechnology Company</MenuItem>
            <MenuItem value="Non-profit Organization">Non-profit Organization</MenuItem>
            <MenuItem value="Medical Device Company">Medical Device Company</MenuItem>
            <MenuItem value="Government Organization">Government Organization</MenuItem>
            <MenuItem value="Pharmaceutical Company">Pharmaceutical Company</MenuItem>
            <MenuItem value="Research Organization">Research Organization</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="quote-therapeutic-area-label">Therapeutic Area</InputLabel>
          <Select
            labelId="quote-therapeutic-area-label"
            id="quote-therapeutic-area"
            value={therapeuticArea}
            label="Therapeutic Area"
            onChange={handleChangeTherapeuticArea}
          >
            <MenuItem value="" sx={{color: blueGrey[300] }}>Select Therapeutic Area</MenuItem>
            <MenuItem value="Cardiology/Vascular">Cardiology/Vascular</MenuItem>
            <MenuItem value="Cosmetics">Cosmetics</MenuItem>
            <MenuItem value="Musculoskeletal/Sports Medicine">Musculoskeletal/Sports Medicine</MenuItem>
            <MenuItem value="Immunology/Infectious Diseases">Immunology/Infectious Diseases</MenuItem>
            <MenuItem value="Hepatology">Hepatology</MenuItem>
            <MenuItem value="Hematology">Hematology</MenuItem>
            <MenuItem value="Genetic Disease">Genetic Disease</MenuItem>
            <MenuItem value="Gastroenterology">Gastroenterology</MenuItem>
            <MenuItem value="Epidemiology">Epidemiology</MenuItem>
            <MenuItem value="Endocrinology">Endocrinology</MenuItem>
            <MenuItem value="Dermatology/Plastic Surgery">Dermatology/Plastic Surgery</MenuItem>
            <MenuItem value="Dental and Oral Health">Dental and Oral Health</MenuItem>
            <MenuItem value="Oncology">Oncology</MenuItem>
            <MenuItem value="Obstetrics/Gynecology">Obstetrics/Gynecology</MenuItem>
            <MenuItem value="Nutrition and Weight Loss">Nutrition and Weight Loss</MenuItem>
            <MenuItem value="Neurology">Neurology</MenuItem>
            <MenuItem value="Nephrology/Urology">Nephrology/Urology</MenuItem>
            <MenuItem value="Otolaryngology">Otolaryngology</MenuItem>
            <MenuItem value="Opthamology">Opthamology</MenuItem>
          </Select>
        </FormControl>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>Expected Start Date</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            <FormControl sx={{ width: '130px' }}>
              <InputLabel id="quote-start-date-month">Month</InputLabel>
              <Select
                labelId="quote-start-date-month"
                id="quote-start-date-month"
                value={startDateMonth}
                label="Month"
                onChange={handleChangeStartDateMonth}
              >
                <MenuItem value="" sx={{color: blueGrey[300] }}>Select Month</MenuItem>
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
            <TextField type="number" label="Year*" value="2022" inputProps={{ min: "2022", max: "2050", step: "1" }} sx={{ width: '100px' }} />
          </Stack>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>Vendor Decision by</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            <FormControl sx={{ width: '130px' }}>
              <InputLabel id="quote-vendor-decision-month">Month</InputLabel>
              <Select
                labelId="quote-vendor-decision-month"
                id="quote-vendor-decision-month"
                value={vendorDecisionMonth}
                label="Month"
                onChange={handleChangeVendorDecisionMonth}
              >
                <MenuItem value="" sx={{color: blueGrey[300] }}>Select Month</MenuItem>
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
            <TextField type="number" label="Year*" value="2022" inputProps={{ min: "2022", max: "2050", step: "1" }} sx={{ width: '100px' }} />
          </Stack>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField type="number" label="Study Duration" inputProps={{ min: "0", step: "1" }} sx={{ width: '140px' }} />
          <Typography>Months</Typography>
        </Stack>
        <FormControl sx={{ width: '230px' }}>
          <InputLabel id="quote-number-of-site-label">Number of Sites</InputLabel>
          <Select
            labelId="quote-number-of-site-label"
            id="quote-number-of-site"
            value={numberOfSite}
            label="Number of Sites"
            onChange={handleChangeNumberOfSite}
          >
            <MenuItem value="" sx={{color: blueGrey[300] }}>Select Number of Sites</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2 to 5">2 to 5</MenuItem>
            <MenuItem value="6 to 10">6 to 10</MenuItem>
            <MenuItem value="11 to 20">11 to 20</MenuItem>
            <MenuItem value="Greater than 20">Greater than 20</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '230px' }}>
          <InputLabel id="quote-number-of-form-label">Number of Forms (CRFs)</InputLabel>
          <Select
            labelId="quote-number-of-form-label"
            id="quote-number-of-form"
            value={numberOfForm}
            label="Number of Forms (CRFs)"
            onChange={handleChangeNumberOfForm}
          >
            <MenuItem value="" sx={{color: blueGrey[300] }}>Select Number of Forms</MenuItem>
            <MenuItem value="1 to 10">1 to 10</MenuItem>
            <MenuItem value="11 to 20">11 to 20</MenuItem>
            <MenuItem value="21 to 30">21 to 30</MenuItem>
            <MenuItem value="Greater than 30">Greater than 30</MenuItem>
            <MenuItem value="Greater than 50">Greater than 50</MenuItem>
            <MenuItem value="Greater than 100">Greater than 100</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '230px' }}>
          <InputLabel id="quote-number-of-visit-label">Number of Visits</InputLabel>
          <Select
            labelId="quote-number-of-visit-label"
            id="quote-number-of-visit"
            value={numberOfVisit}
            label="Number of Visits (CRFs)"
            onChange={handleChangeNumberOfVisit}
          >
            <MenuItem value="" sx={{color: blueGrey[300] }}>Select Number of Visits</MenuItem>
            <MenuItem value="1 to 5">1 to 5</MenuItem>
            <MenuItem value="6 to 10">6 to 10</MenuItem>
            <MenuItem value="11 to 20">11 to 20</MenuItem>
            <MenuItem value="Greater than 20">Greater than 20</MenuItem>
          </Select>
        </FormControl>
        <Typography color="error">Study Modules</Typography>
        <Typography color="error">Professional Services</Typography>
        <TextField label="Other Information" maxRows={4} multiline />
        <TextField label="Your Organization Name" />
        <TextField label="Your Full Name" />
        <TextField label="Your Email" />
        <TextField label="Phone Number" helperText="Mention Country Code" />
        <Typography color="error">Additional Emails</Typography>
        <Box>
          <Button size="large" variant="contained">Send Request</Button>
        </Box>
      </Stack>
    </>
  );
}

export default template;