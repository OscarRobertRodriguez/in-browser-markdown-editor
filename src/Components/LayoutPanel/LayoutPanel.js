
import styled from "styled-components";
import {QUERIES} from "../../constants";

const Wrapper = styled.div`
 
  padding: 20px;
  min-height: 100%;
  
  
  &:first-of-type {
    display: none;


    @media ${QUERIES.tabletAndUp} {
      display: initial;
    }
  }
  
  &:last-of-type {
    border-left: 1px solid var(--grey-4);
  }
`;


const LayoutPanel = ({children}) => {
    return (
      <Wrapper>
          {children}
      </Wrapper>
    )
};

export default LayoutPanel;