
import styled from "styled-components";
import { QUERIES } from "../../constants";
import LayoutPanelToggleBar from "../LayoutPanelToggleBar/LayoutPanelToggleBar";


const Wrapper = styled.div`
  height: 100%;
  width: 100%;

`; 

const TextArea = styled.textarea`
  padding: 16px 20px;
  height: 100vh;
  width: min(672px, 100%);
  resize: none;
  border: none;
  outline: none;
  background: var(--white);
  display: block;
  margin: 0 auto;
  
 @media ${QUERIES.tabletAndUp} {
    padding: 22px 16px;
 }
  

 

`;




const LayoutPanel = ({disabled, noIcon, className, children}) => {
  return (
    <Wrapper className={className}>
      <LayoutPanelToggleBar noIcon={noIcon}/>
      <TextArea disabled={disabled}>
           
      </TextArea>
    </Wrapper>

  )
};

export default LayoutPanel;