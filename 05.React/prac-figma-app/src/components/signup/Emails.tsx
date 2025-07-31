import React from 'react';
import { Name } from '../Name';
import { Input } from '../Input';
import styled from 'styled-components';

const EmailWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const EmailContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const EmailSpan = styled.span`
    font-size: larger;
`

const EmailOptions = styled.input`
    border: 1px solid black;
      border-radius: 8px;
`

const Emails = () => {
    return (
        <EmailWrapper>
            <Name value='이메일' />
            <EmailContainer>

                <Input placeholder='' />
                <EmailSpan>@</EmailSpan>
                <EmailOptions placeholder='이메일 선택'/>
        
            </EmailContainer>

        </EmailWrapper>
    );
};

export default Emails;