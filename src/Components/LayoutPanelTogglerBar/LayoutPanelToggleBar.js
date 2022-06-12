import styled from "styled-components";
import {QUERIES} from "../../constants";
import IconShow from '../../assets/icon-show-preview.svg';
import IconHide from '../../assets/icon-hide-preview.svg';
import {useState} from "react";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--grey-5);
  height: 42px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  padding: 0 16px;
  position: sticky;
  top: 56px;

  @media ${QUERIES.tabletAndUp} {
    top: 72px;
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.h6`
  font-size: var(--14px);
  font-weight: var(--bold);
  font-family: var(--roboto);
  text-transform: uppercase;
  color: var(--grey-2);
  letter-spacing: 2px;
  display: none;


  @media ${QUERIES.tabletAndUp} {
    display: initial;
  }
    

`

const Icon = styled.img`
  justify-self: end;
`;

const SectionWrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns:  1fr 1fr;
  
  & .mobileTitle {
    display: initial;


    @media ${QUERIES.tabletAndUp} {
     display: none;
    }
  }
      @media ${QUERIES.tabletAndUp} {
         display: grid; 
         
        &:last-of-type {
          border-left: 1px solid var(--grey-4);
          padding-left: 16px;
        }
      
      }
      
    }
  
  &:first-of-type {
    display: none;
    
    @media ${QUERIES.tabletAndUp} {
      display:  grid;
    
    }
  }

`;

const LayoutPanelToggleBar = ({togglePreview, setTogglePreview}) => {


    return (
        <Wrapper>
            {
                togglePreview ? null :
                <SectionWrapper>
                    <Title>Markdown</Title>
                </SectionWrapper>
            }


            <SectionWrapper>
                <Title>Preview</Title>
               <Title className='mobileTitle'>{togglePreview ? 'Preview' : 'Markdown'}</Title>
                {
                    togglePreview ?
                        <Icon src={IconHide} onClick={() => setTogglePreview(false)} alt='hide icon'/> :
                        <Icon src={IconShow} onClick={() => setTogglePreview(true)} alt='show'/>
                }
            </SectionWrapper>
        </Wrapper>
    )
};


export default LayoutPanelToggleBar;