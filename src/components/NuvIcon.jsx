import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';


const NuvIcon = ({children, onClick}) => (
    (
        <IconButton aria-label="Example" onClick={onClick}>
            {children}
        </IconButton>
    )
);
    
export default NuvIcon;