import React from 'react';
import { Name } from '../Name';
import { Input } from '../Input';
import { Button } from '../Button';
import styled from 'styled-components';

const IdWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const IdContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`


const Ids = () => {
    return (
        <IdWrapper>
                <Name value='아이디' />
            <IdContainer>
                <Input placeholder='4 - 20글자 / 영문, 숫자 사용 가능' />
                 <Button title='중복 확인' />
            </IdContainer>
        </IdWrapper>
    );
};

export default Ids;