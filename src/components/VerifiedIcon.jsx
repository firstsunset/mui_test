import * as React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function VerifiedIcon({type}) {
 
  return (
    <>
        {type ? 
            <CheckCircleOutlineIcon style={{fill: 'green'}} />
            :
            <AccessTimeIcon style={{fill: 'orange'}} />}

    </>
  );
}