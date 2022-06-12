import styled from "styled-components";
import Button from "../Button";
import {Portal} from "@reach/portal";


const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: var(--black-1-opaque);
  display: grid;
  place-content: center;

`

const ModalContent = styled.div`
  width: 343px;
  background: var(--white);
  border-radius: 4px;
  padding: 24px;
  font-family: 'Roboto Slab', sans-serif;
  
  & h4 {
    font-weight: var(--bolder);
    font-size: var(--20px);
    padding: 0;
    margin: 0;
  }
  
  & > p {
     color: var(--grey-2);
    font-size: var(--14px);
    line-height: 24px;
    padding: 16px 0;
  }
`;


function targetBackgroundOnly(e, func) {
    let target = document.querySelector('.modalWrapper');
    if (e.target == target) {
        func(false);
    }
}


const Modal = ({showModal, setShowModal}) => {
   if (!showModal) return null;
   const hideModal = () => setShowModal(false);

    return (
            <Portal >
                <ModalWrapper className='modalWrapper' onClick={(e) => targetBackgroundOnly(e, setShowModal)}>
                    <ModalContent>
                        <h4>Delete this document?</h4>
                        <p>
                            Are you sure you want to delete the ‘welcome.md’ document and its contents?
                            This action cannot be reversed.
                        </p>
                        <Button onClick={hideModal} >
                            <p>confirm &amp; delete</p>
                        </Button>
                    </ModalContent>
                </ModalWrapper>
            </Portal>
    )
}

export default Modal;