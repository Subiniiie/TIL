import React from "react";
import styled from "styled-components";

interface AgreeBoxProps {
    id: string,
    value: string | string[];
};

interface StyledRectangle2Props {
    con : boolean;
};

const StyledRectangle4 = styled.div`
  width: 18px;
  height: 18px;
  background: rgba(31.38, 29.94, 29.94, 0);
  border: 1px black solid;
`;

const StyledRectangle2: React.FC<StyledRectangle2Props> = styled.div`
  width: 360px;
  height: ${(props) => (props.con ? '81px' : '42px')};
  background: rgba(0, 0, 0, 0);
  border-radius: 8px;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledRectangle3: React.FC<StyledRectangle2Props> = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  color: black;
  font-size: 16px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
  line-height: 22px;
`;

const StyledIcon = styled.div`
  width: 7.50px;
  height: 15px;
  outline: 4px var(--Icon-Default-Default, #1E1E1E) solid;
  margin-right: 10px;
`;

const StyledChevronright = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const PartAgreeContianer = styled.div`
        display: flex;
    flex-direction: row;
`


export const AgreeBox: React.FC<AgreeBoxProps> = ({ id, value }) => {
    const isPart = id === 'partAgree';

  if (isPart) {
    console.log('부분동의', value)
    if (!Array.isArray(value)) {
        return <div>Error: Expected string value when id is 'partAgree'</div>;
    }
    return (
      <>
          <StyledRectangle2 con={true}>
        {value.map((v, idx) => (
          <StyledRectangle3>
            <StyledChevronright>
            <PartAgreeContianer>
              <StyledRectangle4 />
              <StyledSpan>{v}</StyledSpan>
            </PartAgreeContianer>
            <StyledIcon />
            </StyledChevronright>
          </StyledRectangle3>
        ))}
        </StyledRectangle2>
      </>
    );
    
} else {
    console.log(value)
    if (typeof value !== 'string') {
      return <div>Error: Expected array value when id is not 'partAgree'</div>;
    }
    return (
        <StyledRectangle2 con={false}>
        <StyledChevronright>
          <PartAgreeContianer>
          <StyledRectangle4 />
          <StyledSpan>{value}</StyledSpan>
          </PartAgreeContianer>
        <StyledIcon />
        </StyledChevronright>
      </StyledRectangle2>
    );
  }
};