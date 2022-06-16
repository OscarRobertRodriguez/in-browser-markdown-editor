import  FileInfo  from './../FileInfo/FileInfo';
import styled from "styled-components";
import LogoImg from '../../assets/logo.svg';
import Button from "../Button";
import {QUERIES} from "../../constants";

import { useContext } from "react";
import { StateContext } from "../App/App";

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--black-2);

  padding:  30px 24px 24px;
  width: 250px;
  visibility: ${props => props.isOpen ? `visible` : `hidden`} ;
  transform: ${props => props.isOpen ? `translateX(0rem)` : `translateX(calc(-250rem / 16))`} ;
  display: grid;
  height: 100%;
  grid-template-rows: min-content 1fr min-content;
  grid-row-gap: 27px;
  transition: transform 400ms ease 0s, visibility 400ms ease 0s;
  position: fixed;
  top: 0;



  @media ${QUERIES.desktopAndUp} {
    grid-template-rows: 1fr min-content;
  }
`;

const Logo = styled.img`
  display: initial;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`

const ContentWrapper = styled.div`
  overflow-y: auto;


`

const Title = styled.h6`
    color: var(--grey-2);
    font-weight: var(--bold);
    font-size: var(--h6-font-size);
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 30px;
    letter-spacing: 2px;
`

const DocumentsWrapper = styled.div`
   margin: 0;
`;






const SideMenu = () => {
    
  const {openNav} = useContext(StateContext); 

    return (
        <Wrapper isOpen={openNav}>
          <Logo src={LogoImg} alt={'markdown'} />
          <ContentWrapper>
           <Title>my documents</Title>
              <Button>
                  <p>+ New Document</p>
              </Button>

              <DocumentsWrapper>
                <FileInfo />
                <FileInfo  />
              </DocumentsWrapper>
          </ContentWrapper>
            <h6>Light switcher</h6>
        </Wrapper>
    )
};

export default SideMenu;