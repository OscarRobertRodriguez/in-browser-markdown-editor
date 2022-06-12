import styled from "styled-components";
import {QUERIES} from "../../constants";




const Wrapper = styled.button`
  width: ${props => props.width ? `${props.width}px` : `100%`};
  height: 40px;
  display: grid;
  place-content: center;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  color: var(--white);
  border: none;
  background-color: var(--dark-orange);
  border-radius: 4px;
  padding: 10px 0;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 400ms ease;
  text-transform: capitalize;
  
 &:hover {
    background-color: var(--light-orange);
 }
  
`;

export const SaveButton = styled(Wrapper)`
  width: 40px;
  
  & p {
    display: none;
  }

  @media ${QUERIES.tabletAndUp} {
    width: 152px;
    display: flex;
    align-items: center;
    
    & p {
      display: initial;
      padding-left: 8px;
    }
  }
`;

 const Button = (props) => {

    return (
        <Wrapper  {...props}>
            {props.children}
        </Wrapper>
    )
};

export default Button;