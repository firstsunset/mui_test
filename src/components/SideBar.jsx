import React, { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import NewsIcon from '@mui/icons-material/FeedTwoTone';
import BlogIcon from '@mui/icons-material/BookTwoTone';
import PortfolioIcon from '@mui/icons-material/TableRowsTwoTone';

import SidebarItem from './SidebarItem';


// const StyledSideBar = styled.div`
//     height: 89vh;
//     width: 25%;
//     margin-bottom: 40px;
//     background-color: #f1f1f1;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
// `

// const Menu = styled.div`
//     width: 100%;
// `

// const StyledButton = styled.button`
//     height: 45px;
//     width: 60%;
//     padding: 5px 10px;
//     background-color: cornflowerblue;
//     border-radius: 6px;
//     border: none;
// `
const Wrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const ButtonContainer = styled('div')(({ theme }) => ({
    alignSelf: 'center'
}));

const menuList = [
    {
        text: 'News',
        image: <NewsIcon />
    },
    {
        text: 'Blog',
        image: <BlogIcon />
    },
    {
        text: 'Portfolio',
        image: <PortfolioIcon />
    },
]

const drawerWidth = 240;

const SideBar = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const mobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        if (!mobile) {
            setOpen(true);
        }
    }, [mobile])
    

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return (
        <Wrapper >
            {
                mobile &&
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="center"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
            }

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        justifyContent: 'space-between',
                        paddingBottom: '150px',
                        marginTop: '64px',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <DrawerHeader style={mobile ? { display: 'flex'} : {display: 'none' }}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                    {menuList.map((item) => (
                        <SidebarItem 
                            key={item.text}
                            text={item.text}
                            image={item.image}
                        />
                    ))}
                    </List>
                </div>
                <ButtonContainer>
                    <Button size="small" variant="contained">Support</Button>
                </ButtonContainer>
            </Drawer>
        </Wrapper>
    )
};
    
export default SideBar;