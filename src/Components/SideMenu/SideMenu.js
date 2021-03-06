import FileInfo from "./../FileInfo/FileInfo";
import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";
import Button from "../Button";
import { QUERIES } from "../../constants";
import todayStringDateFormat from "../../Helpers/todayStringDateFormat";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useContext } from "react";
import { StateContext } from "../App/App";
import { nanoid } from "nanoid";

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--black-2);

  padding: 30px 24px 24px;
  width: 250px;
  visibility: ${(props) => (props.isOpen ? `visible` : `hidden`)};
  transform: ${(props) =>
    props.isOpen ? `translateX(0rem)` : `translateX(calc(-250rem / 16))`};
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
`;

const ContentWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Title = styled.h6`
  color: var(--grey-2);
  font-weight: var(--bold);
  font-size: var(--h6-font-size);
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  padding-bottom: 30px;
  letter-spacing: 2px;
`;

const FilesWrapper = styled.ul`
  margin: 0;
  padding: 0;
  color: #fff;
`;

const SideMenu = ({ themeToggler }) => {
  const { openNav, setArrayPos, setChanges, changes } =
    useContext(StateContext);

  function addNewFileToStorage(setValue) {
    setValue((prev) => [
      ...prev,
      {
        id: nanoid(),
        createdAt: todayStringDateFormat(),
        name: "untitled-document.md",
        content: ` Created on ${todayStringDateFormat()}`,
      },
    ]);
  }

  return (
    <Wrapper isOpen={openNav}>
      <Logo src={LogoImg} alt={"markdown"} />
      <ContentWrapper>
        <Title>my documents</Title>
        <Button onClick={() => addNewFileToStorage(setChanges)}>
          <p>+ New Document</p>
        </Button>

        <FilesWrapper>
          {changes.map((changes, index) => {
            return (
              <FileInfo
                key={changes.id}
                date={changes.createdAt}
                name={changes.name}
                onClick={() => setArrayPos(index)}
              />
            );
          })}
        </FilesWrapper>
      </ContentWrapper>
      <ThemeSwitcher themeToggler={themeToggler} />
    </Wrapper>
  );
};

export default SideMenu;
