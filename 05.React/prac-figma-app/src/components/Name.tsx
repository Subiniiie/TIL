import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: black;
  font-size: 16px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
`;

interface NameProps {
    value: string;
};

export const Name: React.FC<NameProps> = ({ value }) => {
  return (
    <StyledSpan>{value}</StyledSpan>
  );
};