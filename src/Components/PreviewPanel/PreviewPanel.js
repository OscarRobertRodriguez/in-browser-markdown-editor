
import { useContext, Fragment } from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import LayoutPanelToggleBar from "../LayoutPanelToggleBar";
import { StateContext } from "../App/App";
import React from "react";
import MarkdownView, { Markdown } from "react-showdown";
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
    background: var(--grey-5);
    border-left: 4px solid  var(--dark-orange);
    border-radius: 4px;
    padding: 0px 32px 0 24px;
    color: var(--black-4);
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
    color: var(--black-4);
    }
  

  }



 @media ${QUERIES.tabletAndUp} {
    padding: 22px 16px;
 }
`;


const PreviewPanel = ({ noIcon, className, children }) => {
  const { openNav, files, setFiles, arrayPos, setArrayPos } = useContext(StateContext);



  var converter = new showdown.Converter();
  converter.setOption('noHeaderId', 'true');
  console.log(converter.getOptions());
  var text = files[arrayPos].content;
  var html = converter.makeHtml(text);
  console.log(html);
  return (
    <Wrapper className={className}>
      <LayoutPanelToggleBar noIcon={noIcon} />
      <TextArea dangerouslySetInnerHTML={{ __html: html }}>


      </TextArea>
    </Wrapper>

  )
};





export default PreviewPanel;