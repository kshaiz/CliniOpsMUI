import React from 'react';
import { Typography, Stack, ToggleButtonGroup, ToggleButton, alpha, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { blueGrey } from "@mui/material/colors";

const template = () => {
  const [categoryFilter, setCategoryFilter] = React.useState();
  const handleCategoryFilter = (
    event,
    newCategoryFilter,
  ) => {
    setCategoryFilter(newCategoryFilter);
  };

  const [ yearFilter, setYearFilter ] = React.useState('');
  const handleChangeYearFilter = (event) => {
    setYearFilter(event.target.value);
  };

  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ backgroundColor: alpha(blueGrey[50],.50), border: `1px solid ${blueGrey[50]}`, borderRadius: 1, padding: '8px 16px' }}>
        <ToggleButtonGroup
          value={categoryFilter}
          exclusive
          onChange={handleCategoryFilter}
          size="small"
          color="primary"
        >
          <ToggleButton value="Recognitions">Recognitions</ToggleButton>
          <ToggleButton value="Press">Press</ToggleButton>
          <ToggleButton value="Publications">Publications</ToggleButton>
          <ToggleButton value="Events">Events</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
}

export default template;