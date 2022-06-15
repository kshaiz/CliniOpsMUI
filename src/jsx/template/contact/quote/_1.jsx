import React from 'react';
import { Grid, Stack, Typography, TextField, Button, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import ConvertToForm from "./../../../../js/convertFormElementsToJSON";
import { QUOTE_FORM_SUBMIT_URL } from "./../../../../js/consts";
import submitData from "./../../../../js/submitData";

const template = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = ConvertToForm(e.target.elements, [
      "studyName",
      "sponsorType",
      "therapeuticArea",
      "expectedStartDate",
      "vendorDecisionBy",
      "numberOfSubjects",
      "numberOfSites",
      "numberOfForks",
      "numberOfVisits",
      "otherInformation",
      "yourOrganizationName",
      "fullName",
      "email",
      "phone",
    ]);
    submitData({
      formData: {
        data: formData,
        subject: "Request A Demo",
      },
      url: QUOTE_FORM_SUBMIT_URL,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
    <Stack spacing={3} sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <Stack>
        <label className="co-label">Study Name*</label>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          name='studyName'
          required />
      </Stack>
      <Stack>
        <label className="co-label">Sponsor Type</label>
        <Select size="small" name='sponsorType'>
          <MenuItem value=""><em>Select Sponsor Type</em></MenuItem>
          <MenuItem value="Academic Institute">Academic Institute</MenuItem>
          <MenuItem value="Biotechnology Company">Biotechnology Company</MenuItem>
          <MenuItem value="Non-profit Organization">Non-profit Organization</MenuItem>
          <MenuItem value="Medical Device Company">Medical Device Company</MenuItem>
          <MenuItem value="Government Organization">Government Organization</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          <MenuItem value="Pharmaceutical Company">Pharmaceutical Company</MenuItem>
          <MenuItem value="Research Organization">Research Organization</MenuItem>
        </Select>
      </Stack>
      <Stack>
        <label className="co-label">Therapeutic Area</label>
        <Select size="small" name="therapeuticArea">
          <MenuItem value=""><em>Select Therapeutic Area</em></MenuItem>
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
      </Stack>
      <Stack direction="row" spacing={4}>
        <Stack>
          <label className="co-label">Expected Start Date*</label>
          <TextField
            sx={{width: '150px'}}
            helperText="MM/YY"
            size="small"
            variant="outlined"
            fullWidth
            name='expectedStartDate'
            required />
        </Stack>
        <Stack>
          <label className="co-label">Vendor Decision by*</label>
          <TextField
            sx={{width: '150px'}}
            helperText="MM/YY"
            size="small"
            variant="outlined"
            fullWidth
            name='vendorDecisionBy'
            required />
        </Stack>
      </Stack>
      <Stack>
        <label className="co-label">Number of Subjects*</label>
        <TextField
          type="number"
          size="small"
          variant="outlined"
          fullWidth
          name='numberOfSubjects'
          required />
      </Stack>
      <Stack>
        <label className="co-label">Number of Sites</label>
        <Select size="small" sx={{width: '150px'}} name="numberOfSites">
          <MenuItem value=""><em>Select</em></MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2 to 5">2 to 5</MenuItem>
          <MenuItem value="6 to 10">6 to 10</MenuItem>
          <MenuItem value="11 to 20">11 to 20</MenuItem>
          <MenuItem value="Greater than 20">Greater than 20</MenuItem>
        </Select>
      </Stack>
      <Stack>
        <label className="co-label">Number of Forms (CRFs)*</label>
        <Select required size="small" sx={{width: '150px'}} name="numberOfForks">
          <MenuItem value=""><em>Select</em></MenuItem>
          <MenuItem value="1 to 10">1 to 10</MenuItem>
          <MenuItem value="11 to 20">11 to 20</MenuItem>
          <MenuItem value="21 to 30">21 to 30</MenuItem>
          <MenuItem value="Greater than 30">Greater than 30</MenuItem>
          <MenuItem value="Greater than 50">Greater than 50</MenuItem>
          <MenuItem value="Greater than 100">Greater than 100</MenuItem>
        </Select>
      </Stack>
      <Stack>
        <label className="co-label">Number of Visits</label>
        <Select size="small" sx={{width: '150px'}} name="numberOfVisits">
          <MenuItem value=""><em>Select</em></MenuItem>
          <MenuItem value="1 to 5">1 to 5</MenuItem>
          <MenuItem value="6 to 10">6 to 10</MenuItem>
          <MenuItem value="11 to 20">11 to 20</MenuItem>
          <MenuItem value="Greater than 20">Greater than 20</MenuItem>
        </Select>
      </Stack>
      <Stack>
        <label className="co-label">Study Modules</label>
        USE AUTOCOMPLETE MULTISELECT CHIP VARIANT with Checkbox. Options are:<br/>
        <ul>
          <li>CliniOps ePRO</li>
          <li>CliniOps Coder</li>
          <li>CliniOps eSource</li>
          <li>CliniOps EDC</li>
          <li>CliniOps eICF</li>
          <li>CliniOps IRT</li>
          <li>CliniOps CTMS</li>
          <li>Telemedicine</li>
        </ul>
      </Stack>
      <Stack>
        <label className="co-label">Professional Services</label>
        USE AUTOCOMPLETE MULTISELECT CHIP VARIANT with Checkbox. Options are:<br/>
        <ul>
          <li>Biostatistics</li>
          <li>Data Management</li>
          <li>SAS Programming</li>
          <li>Medical Coding</li>
          <li>Onsite Training</li>
          <li>Multilingual</li>
        </ul>
      </Stack>
      <Stack>
        <label className="co-label">Other Information</label>
        <TextField
          size="small"
          variant="outlined"
          multiline
          maxRows={4}
          name="otherInformation"
          fullWidth />
      </Stack>
      <Stack>
        <label className="co-label">Your Organization Name*</label>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          name='yourOrganizationName'
          required />
      </Stack>
      <Stack>
        <label className="co-label">Your Full Name*</label>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          name='fullName'
          required />
      </Stack>
      <Stack>
        <label className="co-label">Your Email*</label>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          name='email'
          required />
      </Stack>
      <Stack>
      <Stack>
        <label className="co-label">Additional Recipients*</label>
        USE AUTOCOMPLETE MULTISELECT CHIP VARIANT with Checkbox with custom values
      </Stack>
        <label className="co-label">Phone (include Country Code)*</label>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          name="phone"
          required />
      </Stack>
      <Box>
        <Button size="large" variant="contained" type="submit">Send Request</Button>
      </Box>
    </Stack>
    </form>
  );
}

export default template;