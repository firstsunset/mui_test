import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SidebarItem = ({text, image}) => (
    (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={text} />
                <ListItemIcon>
                {image}
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
);
    
export default SidebarItem;