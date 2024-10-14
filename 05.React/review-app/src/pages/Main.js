import React from 'react'
import { useNavigate } from 'react-router-dom'
import Counter from './Counter';

export default function Main() {
    const navigate = useNavigate();

    return (
        <div>
            메인
            <div>
                <button onClick={() => navigate('/product')}>product</button>
                <button onClick={() => navigate('/parents')}>useMemo</button>
            </div>
            <Counter />
        </div>
    )
}
