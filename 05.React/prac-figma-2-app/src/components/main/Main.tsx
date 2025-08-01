import React from 'react';
import { Name } from '../Name';
import { Input } from '../Input';
import { Button } from '../Button';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const Main = () => {
    const names = {
        '아이디': '4 - 20글자 / 영문, 숫자 사용 가능',
        '비밀번호': '8 - 16글자 / 영문, 숫자, 특수기호 포함',
        '비밀번호 확인': '일치하지 않습니다',
        '이메일': 'abcd@abcd.com'
    };




    return (
        <StyledDiv>
            {Object.entries(names).map(([ k, v ]) => (
                <>
                <Name name={k} />
                <Input placeholder={v} />
                </>
            ))}
            <Button></Button>
        </StyledDiv>
    );
};

export default Main;