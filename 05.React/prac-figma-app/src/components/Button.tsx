import React from "react";
import styled from "styled-components";

const StyledRectangle3 = styled.button`
  width: 132px;
  height: 42px;
  background: #3D4AFF;
  border: none;
  border-radius: 8px;
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 16px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
  line-height: 22px;
`;


interface ButtonProps {
    title: string;
};

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
      <StyledRectangle3>
        <StyledSpan>{title}</StyledSpan>
        </StyledRectangle3>
  );
};