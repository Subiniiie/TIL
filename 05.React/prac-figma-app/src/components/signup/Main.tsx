import React from 'react';
import Ids from './Ids';
import styled from 'styled-components';
import Passwords from './Passwords';
import Emails from './Emails';
import Agrees from './Agrees';
import { Button } from '../Button';

const Wrapper = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding-top: 40px;
`

const ButtonWrapper = styled.div`
display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    padding-right: 300px;
`

const FormBox = styled.div`
    width: 400px;      
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 20px;
`

const Main = () => {
    return (
        <>
            <Wrapper>
                <FormBox>
                <Ids />
                <Passwords />
                <Emails />
                <Agrees />
                </FormBox>
            </Wrapper>
            <ButtonWrapper>
                <Button title='회원가입' />
            </ButtonWrapper>
        </>
    );
};

export default Main;