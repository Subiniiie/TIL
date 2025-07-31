import React from "react";
import styled from "styled-components";

interface StyledRectangle1Props {
  placeholder : string;
  isEmpty: boolean;
};

const StyledRectangle1: React.FC<StyledRectangle1Props> = styled.input`
  width: ${(props) => (props.isEmpty ? '200px' : '350px')};
  height: 42px;
  background: rgba(217, 217, 217, 0.38);
  border: none;
  border-radius: 8px;
`;

interface InputProps {
    placeholder: string;
};

export const Input:React.FC<InputProps> = ({ placeholder }) => {
  const isEmpty = placeholder.trim() === '';

  return (
    <StyledRectangle1 placeholder={placeholder} isEmpty={isEmpty} />
  );
};