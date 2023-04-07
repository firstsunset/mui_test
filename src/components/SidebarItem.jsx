import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    height: 40px;
    background-color: white;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
`
const SedebarItem = ({text, imageUrl}) => (
    (
        <StyledItem >
            <h3>{text}</h3>
            <img src={imageUrl} alt='Icon' />
        </StyledItem>
    )
);
    
export default SedebarItem;