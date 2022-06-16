import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import IconDocument from '../../assets/icon-document.svg';



const Wrapper = styled.div`
  display: flex;
  color: hsla(0, 0%, 100%, 1.00);
  align-items: center;
  justify-self: start;
  padding-top :26px;

  & img {
    width: 13.7px;
    height: 16px;
  }
`;


const InfoWrapper = styled.div`
   display: "flex";
   flex-direction: 'column';
`;

const Date = styled.span`
font-size : 13px;
color: var(--grey-3);
font-weight: 300;
padding-left: 17px;

`;


const DocName = styled.p`
  font-family: 'Roboto', sans-serif;
  padding-left: 17px;
  font-size: 15px;
  border: none;;
  background: transparent;
  outline: none;
  transition: 400ms ease-in-out 0s;
  color: var(--white);
  cursor: pointer;
  
  &:hover {
    color: var(--dark-orange);
    
  }
`



const FileInfo = () => {
    return (
        <Wrapper>
            <img src={IconDocument} alt={'document'} />
            <InfoWrapper>
                <Date>01 April 2022</Date>
                <DocName>welcome.md</DocName>
            </InfoWrapper>
        </Wrapper>
    )
};

export default FileInfo;