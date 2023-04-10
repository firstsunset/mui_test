import React, {useState} from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import SideBar from './components/SideBar';
import MainTable from './components/MainTable';
import Main from './components/SearchInput';
import MainFilterMenu from './components/MainTabs';
import MainTabs from './components/MainTabs';


const Container = styled('div')(({ theme }) => ({
    margin: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
}));

const MainPage = () => {

    return (
        <Container>
            <SideBar />
            <MainTabs />
        </Container>
    )
};
    
export default MainPage;