import styled from "styled-components";

const Button = styled.button.attrs({ type: "button" })`
  padding: 10px 15px;
  font-weight: bold;
  background-color: rgba(109, 255, 191, 0.5);
  font-size: 0.7rem;
  border: none;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;

  :hover {
    background-color: rgba(109, 255, 191, 0.7);
  }
`;
export default Button;
