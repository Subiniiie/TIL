import React from 'react';
import Ids from './Ids';
import styled from 'styled-components';
import Passwords from './Passwords';
import Emails from './Emails';
import Agrees from './Agrees';


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    gap: 20px;
`


const Main = () => {
    return (
        <Wrapper>
            <Ids />
            <Passwords />
            <Emails />
            <Agrees />
        </Wrapper>
    );
};

export default Main;