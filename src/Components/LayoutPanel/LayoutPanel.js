
import { useContext } from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import LayoutPanelToggleBar from "../LayoutPanelToggleBar";
import { StateContext } from "../App/App";
import React from "react";




const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

`;

const TextArea = styled.textarea`
  padding: 16px 20px;
 height: 100%;
  width: min(672px, 100%);
  resize: none;
  border: none;
  outline: none;
  background: var(--white);
  display: block;
  margin: 0 auto;
  color: inherit;
  font-family: inherit;
  white-space: pre-line; 
  width: 100%;
  background: transparent;

  
 @media ${QUERIES.tabletAndUp} {
    padding: 22px 16px;
    width: min(672px, 100%);
 }
  

 

`;

const LayoutPanel = ({ noIcon, className }) => {
  const { arrayPos, setChanges, changes } = useContext(StateContext);

  return (
    <Wrapper className={className}>
      <LayoutPanelToggleBar noIcon={noIcon} />
      <TextArea value={changes[arrayPos].content} onChange={(e) => setChanges(prev => {
        var newArray = [...prev];
        newArray[arrayPos].content = e.target.value;
        return newArray;
      })}>
        {changes[arrayPos].content}
      </TextArea>
    </Wrapper>

  )
};

export default LayoutPanel;



