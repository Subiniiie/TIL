import React from 'react';
import { Name } from '../Name';
import { Input } from '../Input';
import styled from 'styled-components';

const PasswordWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
`

const PasswordContainer = styled.div`
    /* margin-top: 10px;*/
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`


const Passwords = () => {
    const passwords = {
        '비밀번호' : '8 - 16글자 / 영문, 숫자, 특수기호 포함',
        '비밀번호 확인' : '일치하지 않습니다.'
    };


    return (
        <PasswordWrapper>
            {Object.entries(passwords).map(([key, value]) => (
                <PasswordContainer>
                    <Name value={key} />
                    <Input placeholder={value} />
                </PasswordContainer>
            ))}
        </PasswordWrapper>
    );
};

export default Passwords;