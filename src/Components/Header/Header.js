import styled from "styled-components";
import {useState, useEffect} from "react";
import IconMenu from "../IconMenu";
import IconDocument from '../../assets/icon-document.svg';
import IconDelete from "../IconDelete";
import LogoImg from '../../assets/logo.svg';
import SaveIcon from '../../assets/icon-save.svg';
import {SaveButton} from "../Button";
import {QUERIES} from "../../constants";
import {Portal} from "@reach/portal";
import Button from "../Button";
import { useContext } from "react";
import { StateContext } from "../App/App";


const Wrapper = styled.header`
  background-color: var(--black-3);
  height: 56px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content  1fr max-content min-content;
  grid-column-gap: 24px;
  align-items: center;
  padding-right: 8px;
  position: sticky;
  top: 0;
  
  

  @media ${QUERIES.tabletAndUp} {
    height: 72px;
    
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: min-content max-content 1fr max-content min-content;
  }
`;


const Logo = styled.img`
    display: none;

  @media ${QUERIES.desktopAndUp} {
    display: initial;
  }
`;


const DocWrapper = styled.div`
  display: flex;
  color: hsla(0, 0%, 100%, 1.00);
  align-items: center;
  justify-self: start;


  @media ${QUERIES.desktopAndUp} {
    border-left:  1px solid var(--grey-1);
    padding-left: 24px;
  }

  & img {
    width: 13.7px;
    height: 16px;
  }

  & input {
    font-family: 'Roboto', sans-serif;
    margin-left: 16px;
    font-size: var(--15px);
    border: none;;
    background: transparent;
    outline: none;
    transition: 400ms ease-in-out 0s;
    color: var(--white);
    width: 100%;
    
    
    @media ${QUERIES.tabletAndUp} {
      min-width: 100%;
    }
    
    @media ${QUERIES.laptopAndUp} {
      width: 430px;
    }

   
    &::placeholder {
      color: var(--white);
    }
    &:focus {
      border-bottom: 1px solid var(--white);
    }
  }

  &  p {
    font-size : var(--13px);
    color: var(--grey-3);
    font-weight: 300;
    padding-left: 16px;
    display: none;

    @media ${QUERIES.tabletAndUp} {
      display: initial;
    }
  }
`;








const Header = () => {


  const { files, setFiles, arrayPos } = useContext(StateContext);


  


    return (
        <Wrapper>
            <IconMenu />
            <Logo src={LogoImg} />
            <DocWrapper>
                <img src={IconDocument} alt={'document'}/>
                <div style={{display: "flex", flexDirection: 'column', width: '100%'}}>
                    <p>Document Name</p>
                    <input type='text'  value={files[arrayPos].name} onChange={ (e) => changeFileName(e, arrayPos, setFiles) } />
                </div>
            </DocWrapper>
            <IconDelete />
            <SaveButton width={40}>
                <img src={SaveIcon} alt='save' />
                <p>save changes</p>
            </SaveButton>
        </Wrapper>
    )
};

export default Header;



function changeFileName(e, position, setValue) {
  setValue(prev => {
    const newItems = [...prev];

    newItems[position].name = e.target.value;
    return newItems; 
  })
}


function checkFileExtenstionExist(value) {
  const regex = new RegExp('\.md$'); 
    console.log( regex.test(value) ? value : `${value}.md` )
    return regex.test(value) ? value : `${value}.md`; 

   
  
}