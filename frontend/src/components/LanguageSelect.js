import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './LanguageSelect.scss'
import { flexbox } from '@mui/system';

function LanguageSelect() {
    const [langOne, setLangOne] = React.useState('');
    const [langTwo, setLangTwo] = React.useState('');

    const handleChange = (value, index) => {
      if (!index) setLangOne(value)
      else setLangTwo(value)
    };
  
    return (
      <Box className='root' style={{display: 'flex', justifyContent: 'center', marginLeft: '30px'}}>
        <FormControl className='select'>
          <InputLabel id="demo-simple-select-label">1st Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={langOne}
            label="Doctor's Language"
            onChange={e =>handleChange(e.target.value, 0)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className='select' style={{marginLeft: '30px'}}>
          <InputLabel id="demo-simple-select-label">2nd Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={langTwo}
            label="Doctor's Language"
            onChange={e =>handleChange(e.target.value, 1)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
}

export default LanguageSelect;
