import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  position: fixed;
  justify-content: center;
  align-items: center;
`;

export const ModalCard = styled.div`
  background-color: #141a1a;
  /* border: 2px solid #1f2626; */
  padding: 20px;
  max-width: calc(100% - 30px);
  width: 500px;
  margin: 50px auto;
  display: flex;
  position: absolute;
  flex-direction: column;
  box-shadow: 5px 5px 0px 0px #1f2626;

  > h4 {
    font-size: 1rem;
    color: #f1f1f1;
    margin-bottom: 25px;
    text-align: center;
  }

  > p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.65rem;
    text-align: justify;
    line-height: 1.01rem;
    margin-bottom: 12px;
  }
`;

export const ModalCardCloseButton = styled.button`
  background: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;

  > svg {
    fill: rgba(255, 255, 255, 0.7);
  }

  :hover {
    > svg {
      fill: #fff;
    }
  }
`;
