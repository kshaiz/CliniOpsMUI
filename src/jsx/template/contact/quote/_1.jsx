import React from "react";
import {
  Grid,
  Stack,
  Checkbox,
  Typography,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete,
} from "@mui/material";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { blueGrey } from "@mui/material/colors";
import ConvertToForm from "./../../../../js/convertFormElementsToJSON";
import { QUOTE_FORM_SUBMIT_URL } from "./../../../../js/consts";
import submitData from "./../../../../js/submitData";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const template = () => {
  const [disabled, setDisabled] = React.useState(false);
  async function handleSubmit(e) {
    setDisabled(true);
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
      "studyModules",
      "professionalServices",
      "otherInformation",
      "yourOrganizationName",
      "fullName",
      "email",
      "phone",
      "additionalRecipients",
    ]);
    const data = await submitData({
      formData: {
        data: formData,
        subject: "Request A Demo",
      },
      url: QUOTE_FORM_SUBMIT_URL,
    });
    if (data?.message === "Mail send") {
      alert("quote request submitted successfully");
      location.reload();
    } else {
      alert("Form Submission Failed");
    }
    setDisabled(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} sx={{ maxWidth: "600px", margin: "0 auto" }}>
        <Stack>
          <label className="co-label">Study Name*</label>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            name="studyName"
            required
          />
        </Stack>
        <Stack>
          <label className="co-label">Sponsor Type</label>
          <Select size="small" name="sponsorType">
            <MenuItem value="">
              <em>Select Sponsor Type</em>
            </MenuItem>
            <MenuItem value="Academic Institute">Academic Institute</MenuItem>
            <MenuItem value="Biotechnology Company">
              Biotechnology Company
            </MenuItem>
            <MenuItem value="Non-profit Organization">
              Non-profit Organization
            </MenuItem>
            <MenuItem value="Medical Device Company">
              Medical Device Company
            </MenuItem>
            <MenuItem value="Government Organization">
              Government Organization
            </MenuItem>
            <MenuItem value="Other">Other</MenuItem>
            <MenuItem value="Pharmaceutical Company">
              Pharmaceutical Company
            </MenuItem>
            <MenuItem value="Research Organization">
              Research Organization
            </MenuItem>
          </Select>
        </Stack>
        <Stack>
          <label className="co-label">Therapeutic Area</label>
          <Select size="small" name="therapeuticArea">
            <MenuItem value="">
              <em>Select Therapeutic Area</em>
            </MenuItem>
            <MenuItem value="Cardiology/Vascular">Cardiology/Vascular</MenuItem>
            <MenuItem value="Cosmetics">Cosmetics</MenuItem>
            <MenuItem value="Musculoskeletal/Sports Medicine">
              Musculoskeletal/Sports Medicine
            </MenuItem>
            <MenuItem value="Immunology/Infectious Diseases">
              Immunology/Infectious Diseases
            </MenuItem>
            <MenuItem value="Hepatology">Hepatology</MenuItem>
            <MenuItem value="Hematology">Hematology</MenuItem>
            <MenuItem value="Genetic Disease">Genetic Disease</MenuItem>
            <MenuItem value="Gastroenterology">Gastroenterology</MenuItem>
            <MenuItem value="Epidemiology">Epidemiology</MenuItem>
            <MenuItem value="Endocrinology">Endocrinology</MenuItem>
            <MenuItem value="Dermatology/Plastic Surgery">
              Dermatology/Plastic Surgery
            </MenuItem>
            <MenuItem value="Dental and Oral Health">
              Dental and Oral Health
            </MenuItem>
            <MenuItem value="Oncology">Oncology</MenuItem>
            <MenuItem value="Obstetrics/Gynecology">
              Obstetrics/Gynecology
            </MenuItem>
            <MenuItem value="Nutrition and Weight Loss">
              Nutrition and Weight Loss
            </MenuItem>
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
              sx={{ width: "150px" }}
              helperText="MM/YY"
              size="small"
              variant="outlined"
              fullWidth
              name="expectedStartDate"
              type="month"
              required
            />
          </Stack>
          <Stack>
            <label className="co-label">Vendor Decision by*</label>
            <TextField
              sx={{ width: "150px" }}
              helperText="MM/YY"
              size="small"
              variant="outlined"
              fullWidth
              name="vendorDecisionBy"
              type="month"
              required
            />
          </Stack>
        </Stack>
        <Stack>
          <label className="co-label">Number of Subjects*</label>
          <TextField
            type="number"
            size="small"
            variant="outlined"
            fullWidth
            name="numberOfSubjects"
            required
          />
        </Stack>
        <Stack>
          <label className="co-label">Number of Sites</label>
          <Select size="small" sx={{ width: "150px" }} name="numberOfSites">
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2 to 5">2 to 5</MenuItem>
            <MenuItem value="6 to 10">6 to 10</MenuItem>
            <MenuItem value="11 to 20">11 to 20</MenuItem>
            <MenuItem value="Greater than 20">Greater than 20</MenuItem>
          </Select>
        </Stack>
        <Stack>
          <label className="co-label">Number of Forms (CRFs)*</label>
          <Select
            required
            size="small"
            sx={{ width: "150px" }}
            name="numberOfForks"
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
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
          <Select size="small" sx={{ width: "150px" }} name="numberOfVisits">
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="1 to 5">1 to 5</MenuItem>
            <MenuItem value="6 to 10">6 to 10</MenuItem>
            <MenuItem value="11 to 20">11 to 20</MenuItem>
            <MenuItem value="Greater than 20">Greater than 20</MenuItem>
          </Select>
        </Stack>
        <Stack>
          <label className="co-label">Study Modules</label>
          <CheckboxesTags
            inputOptions={[
              "CliniOps ePRO",
              "CliniOps Coder",
              "CliniOps eSource",
              "CliniOps EDC",
              "CliniOps eICF",
              "CliniOps IRT",
              "CliniOps CTMS",
              "Telemedicine",
            ]}
            name="studyModules"
          />
        </Stack>
        <Stack>
          <label className="co-label">Professional Services</label>
          <CheckboxesTags
            inputOptions={[
              "Biostatistics",
              "Data Management",
              "SAS Programming",
              "Medical Coding",
              "Onsite Training",
              "Multilingual",
            ]}
            name="professionalServices"
          />
        </Stack>
        <Stack>
          <label className="co-label">Other Information</label>
          <TextField
            size="small"
            variant="outlined"
            multiline
            maxRows={4}
            name="otherInformation"
            fullWidth
          />
        </Stack>
        <Stack>
          <label className="co-label">Your Organization Name*</label>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            name="yourOrganizationName"
            required
          />
        </Stack>
        <Stack>
          <label className="co-label">Your Full Name*</label>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            name="fullName"
            required
          />
        </Stack>
        <Stack>
          <label className="co-label">Your Email*</label>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            required
          />
        </Stack>
        <Stack>
          <Stack>
            <label className="co-label">
              Additional Recipients(comma sperated email addresses)
            </label>
            <TextField
              variant="outlined"
              name="additionalRecipients"
              multiline
              rows={4}
            />
          </Stack>
          <label className="co-label">Phone (include Country Code)*</label>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            name="phone"
            required
          />
        </Stack>
        <Box>
          <Button size="large" variant="contained" type="submit">
            Send Request
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

function CheckboxesTags({ inputOptions, name }) {
  const [value, setValue] = React.useState([]);
  return (
    <>
      <Autocomplete
        multiple
        options={inputOptions}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => <TextField {...params} />}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <input type={"hidden"} name={name} value={value?.join?.(', ')}/>
    </>
  );
}

export default template;
