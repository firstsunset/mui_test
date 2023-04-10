import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({value, onChange}) {
 
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Role"
          onChange={onChange}
        >
          <MenuItem value={'All'}>All</MenuItem>
          <MenuItem value={'Telesale'}>Telesale</MenuItem>
          <MenuItem value={'Trainee'}>Trainee</MenuItem>
          <MenuItem value={'Leader'}>Leader</MenuItem>
          <MenuItem value={'Director'}>Trainee</MenuItem>
          <MenuItem value={'Intern'}>Leader</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}