import styled from "styled-components";
import { QUERIES } from "../../constants";



const Wrapper = styled.div`
  width: 1px;
 height: 100%;
  background-color: ${({ theme }) => theme.dividerBg};
  align-self: center;
  display: none;
  transition: .5s;

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