import React from "react";
import styled from "styled-components";

const StyledRectangle1 = styled.input`
    width: 350px;
    height: 42px;   
    background: rgba(217, 217, 217, 0.38);
    border: none;
    border-radius: 8px;
`;

interface InputProps {
    placeholder: string;
};

export const Input:React.FC<InputProps> = ({ placeholder }) => {
    return (
        <StyledRectangle1 placeholder={placeholder} />
    );
};