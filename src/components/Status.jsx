import * as React from 'react';
import styled from 'styled-components';

const ActiveStyled = styled('div')(() => ({
    backgroundColor: 'azure',
    color: 'green',
    textAlign: 'center',
    borderRadius: '6px',  
    fontWeight: 'bold',
}));

const BannedStyled = styled('div')(() => ({
    backgroundColor: '#BC544B',
    color: '#60100B',
    textAlign: 'center',
    borderRadius: '6px',
    fontWeight: 'bold',
}));
export default function Status({type}) {

 
  return (
    <>
        {type === 'Active' ?
            <ActiveStyled>{type}</ActiveStyled>
            :
            <BannedStyled>{type}</BannedStyled>
        }

    </>
  );
}