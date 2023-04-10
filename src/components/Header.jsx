import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from '../assets/linde.svg';



const Header = ({change, hadleDarkMode}) => {
    return (
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} style={{width: '40px', height: '40px', marginRight: '40px'}}/>
          <SearchIcon />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={hadleDarkMode}
              onChange={change}
            >
              <Badge>
                <LightModeIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 8 new notifications"
              color="inherit"
              onClick={() => null}
            >
              <Badge badgeContent={8} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={() => null}
            >
              <PeopleIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={() => null}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        </AppBar>
    );
}
    
export default Header;