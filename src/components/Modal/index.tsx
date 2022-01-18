import React from "react";
import Button from "../Button";
import { ModalBackground, ModalCard, ModalCardCloseButton } from "./styles";

interface IProps {
  defiURL?: string;
  onClickClose(): void;
}

const Modal: React.FC<IProps> = ({ defiURL, onClickClose }) => {
  if (!defiURL) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalCard>
        <ModalCardCloseButton onClick={onClickClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </ModalCardCloseButton>

        <h4>ATTENTION</h4>

        <p>
          Please make sure you know what you are doing. We are not responsible
          for possible losses. All projects are tested by our team but the risk
          still exists.
        </p>

        <p>If you agree, click the button below to access the project.</p>

        <Button
          type="button"
          as="a"
          href={defiURL}
          target="_blank"
          onClick={onClickClose}
        >
          I AGREE
        </Button>
      </ModalCard>
    </ModalBackground>
  );
};

export default Modal;
