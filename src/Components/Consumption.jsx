import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function Consumption() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: 300, m: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">KwT</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={5000}>5000</MenuItem>
          <MenuItem value={10000}>10000</MenuItem>
          <MenuItem value={40000}>40000</MenuItem>
          <MenuItem value={50000}>50000</MenuItem>
        </Select>
        <FormHelperText sx={{fontSize:15}}>Hva er ditt årlige forbruk?</FormHelperText>

      </FormControl>
    </Box>
  );
}