import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material';


import SunIcon from '../assets/sun-icon.png';
import NotificationIcon from '../assets/notification-icon.png';
import GroupIcon from '../assets/group-icon.png';
import NuvIcon from './NuvIcon';
import ProfileIcon from './ProfileIcon';

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`

const iconList = [SunIcon, NotificationIcon, GroupIcon] 

const Nuvbar = () => {
    
    return (
        <RightBlock>
            {
                iconList.map((item) => {
                    return (
                        <NuvIcon onClick={() => null} >
                            <img src={item} alt='' />
                        </NuvIcon>
                    )
                })
            }
      </RightBlock>
    )
};
    
export default Nuvbar;