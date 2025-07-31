import React from 'react';
import { Name } from '../Name';
import { Input } from '../Input';
import { Button } from '../Button';
import styled from 'styled-components';

const IdWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const IdContainer = styled.div`
    display: flex;
    flex-direction: column;
`


const Ids = () => {
    return (
        <IdWrapper>
            <IdContainer>
                <Name value='아이디' />
                <Input placeholder='4 - 20글자 / 영문, 숫자 사용 가능' />
                </IdContainer>
            <Button title='중복 확인' />
        </IdWrapper>
    );
};

export default Ids;