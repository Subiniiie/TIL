import React, { useState } from 'react'
import Child from './Child'

export default function Parents() {
    const [ title, setTitle ] = useState('제목');
    const [ dataList, setDataList ] = useState([1, 2, 3, 4, 5]);

    return (
        <div>
            <button onClick={() => setTitle('새로운 제목')}>제목 변경</button>
            <Child title={title} dataList={dataList} />
        </div>
    )
}
