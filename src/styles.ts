import styled from "styled-components";
import { CardContainer } from "./components/Card/styles";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;

  ${CardContainer} {
    margin: 10px;
  }
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  flex: 1;
  margin-right: 15px;
`;
