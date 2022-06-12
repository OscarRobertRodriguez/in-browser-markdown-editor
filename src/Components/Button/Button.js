import styled from "styled-components";
import Delete from '../../assets/icon-delete.svg';




const Icon = styled.img`
    width: 18px;
    height: 20px;
  display: grid;
  place-content: center;
`

const IconDelete = () => {
    return (
        <>
          <Icon src={Delete} alt={'delete'} />
        </>

    )
};

export default IconDelete;