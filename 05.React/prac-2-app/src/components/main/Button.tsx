import React from "react";
import { useButton } from "../../hooks";


const Button = () => {
    const { getFigmaApi } = useButton();


    return (
        <button
            onClick={getFigmaApi}
        >
            피그마 api 받아오기
        </button>
    )
}

export default Button;