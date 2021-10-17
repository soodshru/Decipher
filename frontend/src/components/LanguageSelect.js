import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LANGUAGES } from '../utils/constants';

import './LanguageSelect.scss'

function LanguageSelect({langOne, langTwo, handleChange}) {
    return (
      <Box className='root' style={{display: 'flex', justifyContent: 'center', marginLeft: '30px'}}>
        <FormControl className='select'>
          <InputLabel id="demo-simple-select-label">1st Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={langOne[0]}
            label="Doctor's Language"
            onChange={e =>handleChange(e.target.value, 0)}
          >
            {Object.entries(LANGUAGES).map(([lang, code]) => 
              <MenuItem value={lang} key={lang}>{lang}</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl className='select' style={{marginLeft: '30px'}}>
          <InputLabel id="demo-simple-select-label">2nd Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={langTwo[0]}
            label="Doctor's Language"
            onChange={e =>handleChange(e.target.value, 1)}
          >
            {Object.entries(LANGUAGES).map(([lang, code]) => 
              <MenuItem value={lang} key={lang}>{lang}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    );
}

export default LanguageSelect;
