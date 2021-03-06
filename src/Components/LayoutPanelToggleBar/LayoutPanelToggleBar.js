import styled from "styled-components";
import { QUERIES } from "../../constants";
import IconShowPreview from "../IconShowPreview/IconShowPreview";
import IconHidePreview from "../IconHidePreview/IconHidePreview";
import { useContext } from "react";
import { StateContext } from "../App/App";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.toggleBar};
  height: 42px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  padding: 0 16px;
  position: sticky;
  top: 56px;
  z-index: 999;
  transition: 0.5s;

  @media ${QUERIES.tabletAndUp} {
    top: 72px;
  }

  .hide {
    display: initial;

    @media ${QUERIES.tabletAndUp} {
      display: none;
    }
  }

  .hideIcon {
    display: none;

    @media ${QUERIES.tabletAndUp} {
      display: initial;
    }
  }
`;

const Title = styled.h6`
  font-size: var(--14px);
  font-weight: var(--bold);
  font-family: var(--roboto);
  text-transform: uppercase;
  color: var(--grey-2);
  letter-spacing: 2px;
`;

const LayoutPanelToggleBar = ({ noIcon = false }) => {
  const { togglePreview, setTogglePreview } = useContext(StateContext);
  const panelExist = document.querySelector(".markdownPanel");

  const showPreview = () => {
    setTogglePreview(false);
  };

  const hidePreview = () => {
    setTogglePreview(true);
  };

  return (
    <Wrapper>
      {noIcon ? <Title>Markdown</Title> : <Title>Preview</Title>}

      {/* if noIcon prop is true will show Icon on Mobile for Markdown  bar */}
      {/* code is for tablet and greater for eye icon */}
      {noIcon ? (
        <IconShowPreview onClick={showPreview} />
      ) : togglePreview && panelExist ? (
        <IconHidePreview onClick={showPreview} />
      ) : (
        <IconShowPreview onClick={hidePreview} className="hideIcon" />
      )}

      {/* this will show Iconhide on mobile screens as style is different on tablet and greater and will hide on tab and greater  */}

      {!togglePreview && (
        <IconHidePreview onClick={hidePreview} className="hide" />
      )}
    </Wrapper>
  );
};

export default LayoutPanelToggleBar;
