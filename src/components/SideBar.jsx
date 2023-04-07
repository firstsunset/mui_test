import React from 'react';
import styled from 'styled-components';

import SidebarItem from './SidebarItem';
import NewsIcon from '../assets/newspaper.png';
import BlogIcon from '../assets/blog.png';
import PortfolioIcon from '../assets/professional-portfolio.png';

const StyledSideBar = styled.div`
    height: 89vh;
    width: 25%;
    margin-bottom: 40px;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Menu = styled.div`
    width: 100%;
`

const StyledButton = styled.button`
    height: 45px;
    width: 90%;
    padding: 5px 10px;
    background-color: cornflowerblue;
    border-radius: 6px;
    border: none;
`

const menuList = [
    {
        text: 'News',
        image: `${NewsIcon}`
    },
    {
        text: 'Blog',
        image: `${BlogIcon}`
    },
    {
        text: 'Portfolio',
        image: `${PortfolioIcon}`
    },
]

const SideBar = () => {
    
    return (
        <StyledSideBar>
            <Menu>
                {
                    menuList.map((item) => {
                        return (
                            <SidebarItem 
                                text={item.text}
                                imageUrl={item.image}
                            />
                        )
                    })
                }
            </Menu>
            <StyledButton>Support</StyledButton>
        </StyledSideBar>
    )
};
    
export default SideBar;