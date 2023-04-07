import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';

import SearchIcon from '../assets/SearchIcon';
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

const Header = () => (
    (
      <StyledHeader>
        <LeftBlock>
          <StyledLogo src={Logo} />
          <SearchIcon />
        </LeftBlock>
        <RightBlock>
          <NuvIcon onClick={() => null} >
            <img src={SunIcon} alt='' />
          </NuvIcon>
          <NuvIcon onClick={() => {console.log('click');}}>
            <StyledIcon src={NotificationIcon} alt='' />
          </NuvIcon>
          <NuvIcon onClick={() => {console.log('click');}}>
            <StyledIcon src={GroupIcon} alt='' />
          </NuvIcon>
          <NuvIcon onClick={() => {console.log('click');}}>
            <Avatar
              alt="Avatar"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 24, height: 24 }}
            />
          </NuvIcon>
        </RightBlock>
      </StyledHeader>
    )
);
    
export default Header;