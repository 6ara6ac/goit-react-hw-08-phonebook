import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Filter = ({filter, filterInput}) => {
  
    return (
      <Box sx={{display:'grid', justifyContent:'center'}}>
        <FormControl fullWidth sx={{ m:1}}>
          <Select
            value={filter}
            label="Age"
            onChange={filterInput}
            displayEmpty
            autoWidth
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={'show all'}>show all</MenuItem>
            <MenuItem value={'follow'}>follow</MenuItem>
            <MenuItem value={'following'}>following</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
}