import React, {useState} from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import SideBar from './components/SideBar';
import MainTable from './components/MainTable';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const MainPage = () => {

    return (
        <Container>
            <SideBar />
            <MainTable />
        </Container>
    )
};
    
export default MainPage;