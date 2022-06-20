import { useState, createContext, useEffect } from "react";
import styled from 'styled-components';
import GlobalStyles from "../../GlobalStyles";
import SideMenu from "../SideMenu";
import Header from "../Header";
import Modal from "../Modal";
import LayoutPanel from "../LayoutPanel";
import PreviewPanel from "../PreviewPanel/PreviewPanel";
import Divider from "../Divider";
import { QUERIES } from "../../constants";
import data from '../../data';
import { useLocalStorage } from "../../Helpers/useLocalStorage";
import MarkdownView from "react-showdown";
import turnTextToMarkDown from "../../Helpers/turnTextToMarkDown";



const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns:  1fr;
  isolation: isolate;
`;

const MainWrapper = styled.div`
  width:100%;
  transition: transform 400ms ease;
  transform: ${props => props.isOpen ? `translateX(calc(250rem / 16))` : `translateX(0)`};
  display: grid;
  grid-template-rows: min-content 1fr ;

  @media ${QUERIES.tabletAndUp} {
    grid-template-rows: min-content  min-content 1fr ;
  }

 
 
`;

const PanelWrapper = styled.div`
    display: grid;
   grid-template-columns:   1fr;
   isolation: isolate;

   width: 100%;


   @media ${QUERIES.tabletAndUp} {
    grid-template-columns: ${props => props.togglePreview ? "1fr" : "1fr min-content 1fr"};
   }


    .previewPanel {
    display: ${props => props.togglePreview ? "none" : "initial"};
     color: var(--grey-2);
     font-size: 14px;
     line-height: 24px;

    @media ${QUERIES.tabletAndUp} {
      display: block;

    }
   }


    & .markdownPanel {
    display: ${props => props.togglePreview ? "initial" : "none"};
    font-family: var(--robotoMono);
    font-size: 14px;
    line-height: 24px;
    font-weight: var(--bold);
    color: var(--black-4);
     @media ${QUERIES.tabletAndUp} {
      display: ${props => props.togglePreview ? "none" : "initial"};
   }

   }
    
`;


export const StateContext = createContext("state");

function App() {

  let [openNav, setOpenNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [togglePreview, setTogglePreview] = useState(false);
  const [files, setFiles] = useLocalStorage('files', data);
  const [arrayPos, setArrayPos] = useState(files.length - 1); 
   

    useEffect(() => {       
          let newArr = files.map((item) =>  {
         
          
            let copy = {...item}; 

                copy.markdown = 
                <MarkdownView
                markdown={files.content}
                options={{ tables: true, emoji: true }}
              />;

                console.log(copy, 'copy');
              return copy;   
          }); 

           setFiles(newArr);   

    }, []);
     





  return (
    <StateContext.Provider value={{ openNav, setOpenNav, showModal, setShowModal, togglePreview, setTogglePreview, files , setFiles, arrayPos, setArrayPos }}>
      <Wrapper>

        <MainWrapper isOpen={openNav}>
          <Header />

          <PanelWrapper togglePreview={togglePreview}>
            <LayoutPanel className='markdownPanel' disabled={false} noIcon={true} />
            <Divider />
            <PreviewPanel className="previewPanel"  noIcon={false} />
          </PanelWrapper>

          <GlobalStyles />
        </MainWrapper>
        <SideMenu />
        <Modal />
      </Wrapper>
    </StateContext.Provider>
  );
}

export default App;
