import { useContext } from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import { StateContext } from "../App/App";


const Icon = styled.svg`
  justify-self: end;
  cursor: pointer;
  width: 16px;
  height: 12px;
  display: initial;
  
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }


  &:hover {
    fill: var(--dark-orange);
  }
`

const IconShowPreview = ({onClick , className}) => {
 
  const {setTogglePreview} = useContext(StateContext); 

    return (
        <>
            <Icon onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg">
              <path d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z" />
            </Icon>
        </>

    )
};

export default IconShowPreview;