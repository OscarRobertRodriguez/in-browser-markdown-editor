import {useState} from "react";
import styled from 'styled-components';
import GlobalStyles from "../../GlobalStyles";
import SideMenu from "../SideMenu";
import Header from "../Header";
import Modal from "../Modal";
import LayoutPanel from "../LayoutPanel";
import LayoutPanelToggleBar from "../LayoutPanelTogglerBar";


const Wrapper = styled.div`
  display: grid;
  min-height: 100%;
  grid-template-columns:  1fr;
`;

const MainWrapper = styled.div`
  width:100%;
  transition: transform 400ms ease;
  transform: ${props => props.isOpen ? `translateX(calc(250rem / 16))` : `translateX(0)`};
  display: grid;
  grid-template-rows: min-content  min-content 1fr ;
 
`;

const PanelWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  
  
  & .markdown {
    color: #fff;
  }
`;


function App() {

    let [open, setOpen] = useState(false);
    const [showModal,  setShowModal] = useState(false);
    const [togglePreview, setTogglePreview] = useState(false);


    return (
        <Wrapper>
            <SideMenu open={open}/>
            <MainWrapper isOpen={open}>
                <Header open={open} setOpen={setOpen} setShowModal={setShowModal} setTogglePreviewPanel={setTogglePreview}/>
                <LayoutPanelToggleBar togglePreview={togglePreview} setTogglePreview={setTogglePreview} />
                <PanelWrapper>
                    {
                        togglePreview ? null
                        : 
                             <LayoutPanel className='markdown'>
                                <h1>Markdown</h1>
                            </LayoutPanel>
                    }
     
                    <LayoutPanel className='preview'>
                        <h1>Preview</h1>
                    </LayoutPanel>
                </PanelWrapper>

                <GlobalStyles/>
            </MainWrapper>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </Wrapper>
    );
}

export default App;
