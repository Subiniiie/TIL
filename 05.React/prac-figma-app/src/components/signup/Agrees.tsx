import React from 'react';
import { Name } from '../Name';
import { AgreeBox } from '../AgreeBox';

const Agrees = () => {
    const Agrees = {
        'allAgree' : '전체 동의',
        'partAgree' : [
            '(필수) 개인회원 약관 동의', 
            '(선택) 마케팅 정보 수신 동의'
        ]
    };


    return (
        <div>
            <Name value='약관 동의' />
            {Object.entries(Agrees).map(([key, value]) => (
                <AgreeBox id={key} value={value} />
            ))}
        </div>
    );
};

export default Agrees;