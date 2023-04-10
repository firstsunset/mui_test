import React, {useState} from 'react';
import { styled } from '@mui/material/styles';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


const SearchInput = ({value, onChange}) => {
      
    return (
        <>
       <form>
            <TextField
              id="search-bar"
              className="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
        </form>
    </>
    )
};
    
export default SearchInput;