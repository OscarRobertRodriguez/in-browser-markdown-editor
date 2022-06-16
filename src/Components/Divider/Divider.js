import styled from "styled-components";
import { QUERIES } from "../../constants";



const Wrapper = styled.div`
  width: 1px;
 height: 100%;
  background-color: var(--grey-4);
  align-self: center;
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: initial;
  }
`; 

const Divider = () => {
    return (
        <Wrapper />
    )
};

export default Divider; 