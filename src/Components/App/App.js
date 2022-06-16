import { useState, createContext, useEffect } from "react";
import styled from 'styled-components';
import GlobalStyles from "../../GlobalStyles";
import SideMenu from "../SideMenu";
import Header from "../Header";
import Modal from "../Modal";
import LayoutPanel from "../LayoutPanel";
import Divider from "../Divider";
import { QUERIES } from "../../constants";


const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns:  1fr;
  isolation: isolate;
`;

const MainWrapper = styled.div`
  width:100%;
 min-height: 100%;
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

   width: 100%;


   @media ${QUERIES.tabletAndUp} {
    grid-template-columns: ${props => props.togglePreview ? "1fr" : "1fr min-content 1fr"};
   }


   & .previewPanel {
    display: ${props => props.togglePreview ? "none" : "initial"};

    @media ${QUERIES.tabletAndUp} {
      display: block;
    }
   }


   & .markdownPanel {
    display: ${props => props.togglePreview ? "initial" : "none"};
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


  

  return (
    <StateContext.Provider value={{ openNav, setOpenNav, showModal, setShowModal, togglePreview, setTogglePreview }}>
      <Wrapper>

        <MainWrapper isOpen={openNav}>
          <Header />

          <PanelWrapper togglePreview={togglePreview}>
            <LayoutPanel className='markdownPanel' noIcon={true} />
            <Divider />
            <LayoutPanel className="previewPanel" disabled={true} noIcon={false}>
               lskdfjskjfksj    skdjfks      kdsjflsk jslkdfjs
              </LayoutPanel>
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
