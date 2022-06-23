
import { useContext} from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import LayoutPanelToggleBar from "../LayoutPanelToggleBar";
import { StateContext } from "../App/App";
import React from "react";
import showdown from "showdown";


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  isolation: isolate;
  padding-bottom: 30px;
`;

const TextArea = styled.div`
  padding: 16px 20px;
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
  overflow-y: scroll;
  background: transparent;


ol {
  padding-left: 32px;

  li {

    padding-left: 8px;

  }
}




ul {
    list-style-type: none;
   
li {
      position: relative;

      
}
    
li::before {
 content: "";
 position: absolute;
 top: 10px;
 left: -19px;
 width: 3px;
 height: 3px;
 border-radius: 50%;
 background-color: var(--dark-orange);
 font-weight: bold;
 display: inline-block; 

}
  }

  blockquote, pre {
    background: ${({ theme }) => theme.markdownBlock};
    transition: .5s;
    border-left: 4px solid  var(--dark-orange);
    border-radius: 4px;
    padding: 0px 32px 0 24px;
    color: ${({ theme }) => theme.markdown};
    font-weight: var(--bolder);

    & a {
      color: inherit;
    }
  }

  pre {
    border: none;
    padding: 24px;
     font-weight: 400;
    code {
      color: ${({ theme }) => theme.markdown};
      transition: .5s;
    }
  

  }



 @media ${QUERIES.tabletAndUp} {
    padding: 22px 16px;
 }
`;


const PreviewPanel = ({ noIcon, className, children }) => {
  const { arrayPos, changes } = useContext(StateContext);



  var converter = new showdown.Converter();
  converter.setOption('noHeaderId', 'true');
  var text = changes[arrayPos].content;
  var html = converter.makeHtml(text);
  return (
    <Wrapper className={className}>
      <LayoutPanelToggleBar noIcon={noIcon} />
      <TextArea dangerouslySetInnerHTML={{ __html: html }}>


      </TextArea>
    </Wrapper>

  )
};





export default PreviewPanel;