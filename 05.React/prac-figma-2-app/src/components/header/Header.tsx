import React from "react";
import styled from "styled-components";

const StyledAbcdspan = styled.span`
    color: black;
    font-size: 20px;
    font-family: Gmarket Sans TTF;
    font-weight: 300;
  
`;

const StyledSpan = styled.span`
    color: #D7D7D7;
    font-size: 16px;
    font-family: Gmarket Sans TTF;
    font-weight: 500;
  
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
`;

export const Header = () => {
    return (
        <StyledDiv>
            <StyledAbcdspan>abcd 회원가입</StyledAbcdspan>
            <StyledSpan>홈으로 | 로그인</StyledSpan>
        </StyledDiv>
    );
};