import React from "react";
import styled from "styled-components";


const StyledRectangle4 = styled.input`
    width: 18px;
    height: 18px;
    background: rgba(31.38, 29.94, 29.94, 0);
    border: 1px black solid;
`;

const StyledRectangle2 = styled.div`
    width: 360px;
    height: 42px;
    background: rgba(0, 0, 0, 0);
    border-radius: 8px;
    border: 1px black solid;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledSpan = styled.span`
    color: black;
    font-size: 16px;
    font-family: Gmarket Sans TTF;
    font-weight: 500;
`;

const StyledIcon = styled.div`
    width: 7.50px;
    height: 15px;
`;

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const Container = () => {
    return (
        <StyledDiv>
            <StyledRectangle2>
                <StyledRectangle4 type="checkbox"/>
                <StyledSpan>전체 동의</StyledSpan>
                    <StyledIcon />
            </StyledRectangle2>
        </StyledDiv>
    );
};