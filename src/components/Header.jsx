import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

// import SearchIcon from '../assets/SearchIcon';
import Logo from '../assets/linde.svg';
import SunIcon from '../assets/sun-icon.png';
import NotificationIcon from '../assets/notification-icon.png';
import GroupIcon from '../assets/group-icon.png';
import NuvIcon from './NuvIcon';

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; 
`
const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`
const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
`
const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`

const Header = ({change, hadleDarkMode}) => {
    return (
      // <StyledHeader>
      //   <LeftBlock>
      //     <StyledLogo src={Logo} />
      //     <SearchIcon />
      //   </LeftBlock>
      //   <RightBlock>
      //     <NuvIcon onClick={() => null} >
      //       <img src={SunIcon} alt='' />
      //     </NuvIcon>
      //     <NuvIcon onClick={() => {console.log('click');}}>
      //       <StyledIcon src={NotificationIcon} alt='' />
      //     </NuvIcon>
      //     <NuvIcon onClick={() => {console.log('click');}}>
      //       <StyledIcon src={GroupIcon} alt='' />
      //     </NuvIcon>
      //     <NuvIcon onClick={() => {console.log('click');}}>
      //       <Avatar
      //         alt="Avatar"
      //         src="/static/images/avatar/1.jpg"
      //         sx={{ width: 24, height: 24 }}
      //       />
      //     </NuvIcon>
      //   </RightBlock>
      // </StyledHeader>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
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
            >
              <Badge badgeContent={8} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
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