import styled from "styled-components";
import Menu from '../../assets/icon-menu.svg';
import CloseIcon from '../../assets/icon-close.svg';
import {QUERIES} from "../../constants";
import { useContext } from "react";
import { StateContext } from "../App/App";

const Wrapper = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  place-content: center;
  background-color: var(--black-4);
  cursor: pointer;
  transition: background-color 400ms ease 0s;
  
  &:hover {
    background-color: var(--dark-orange);
  }
  


  @media ${QUERIES.tabletAndUp} {
    height: 72px;
    width: 72px;
  }
 
`;

const Icon = styled.img`
    width: 23px;
    height: 14px;
  border: none;

  @media ${QUERIES.tabletAndUp} {
    width: 30px;
    height: 18px;
  }
`
const IconClose = styled.img`
  width: 18px;
  height: 18px;
  border: none;

  @media ${QUERIES.tabletAndUp} {
    height: 23px;
    width: 23px;
  }
`;

const IconMenu = () => {

   const {openNav, setOpenNav} = useContext(StateContext);


    return (
        <Wrapper onClick={() => setOpenNav(!openNav)}>
            { openNav ? <IconClose src={CloseIcon} alt='close' /> : <Icon src={Menu} alt={'menu'} /> }
        </Wrapper>

    )
};

export default IconMenu;