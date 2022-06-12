import styled from "styled-components";
import LogoImg from '../../assets/logo.svg';
import Button from "../Button";
import {QUERIES} from "../../constants";
import IconDocument from '../../assets/icon-document.svg';

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

  
  & h6 {
    color: var(--grey-2);
    font-weight: var(--bold);
    font-size: var(--h6-font-size);
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 30px;
    letter-spacing: 2px;
  }
`


const DocumentsWrapper = styled.div`
   margin: 0;
`;

const ItemWrapper = styled.div`
  display: flex;
  color: hsla(0, 0%, 100%, 1.00);
  align-items: center;
  justify-self: start;
  padding-top :26px;


  & img {
    width: 13.7px;
    height: 16px;
  }



  & span {
    font-size : 13px;
    color: var(--grey-3);
    font-weight: 300;
    padding-left: 17px;
    

  }
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


const SideMenu = ({open}) => {
    return (
        <Wrapper isOpen={open}>
          <Logo src={LogoImg} alt={'markdown'} />
          <ContentWrapper>
           <h6>my documents</h6>
              <Button>
                  <p>+ New Document</p>
              </Button>

              <DocumentsWrapper>
                  <ItemWrapper>
                          <img src={IconDocument} alt={'document'}/>
                          <div style={{display: "flex", flexDirection: 'column'}}>
                              <span>01 April 2022</span>
                              <DocName>untitled-document.md</DocName>
                          </div>
                  </ItemWrapper>
                  <ItemWrapper>
                      <img src={IconDocument} alt={'document'}/>
                      <div style={{display: "flex", flexDirection: 'column'}}>
                          <span>01 April 2022</span>
                          <DocName>welcome.md</DocName>
                      </div>
                  </ItemWrapper>
              </DocumentsWrapper>
          </ContentWrapper>
            <h6>Light switcher</h6>
        </Wrapper>
    )
};

export default SideMenu;