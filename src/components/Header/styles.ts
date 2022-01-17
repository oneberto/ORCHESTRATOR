import styled, { keyframes } from "styled-components";
import { MediaQueries } from "../../utils/mediaQueries";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 100px;
  justify-content: center;
  flex-direction: column;
`;

const logoAnimation = keyframes`0% {color: #6dffbf;} 50% {color: green; } 100% {color: #6dffbf;}`;

export const HeaderLogo = styled.h1`
  font-size: 1.3rem;
  transition: color 1s;
  animation: ${logoAnimation} 2s infinite;
  margin-bottom: 15px;

  ${MediaQueries.BIGGER_THAN_TABLET} {
    font-size: 1.6rem;
  }

  ${MediaQueries.BIGGER_THAN_MEDIUM} {
    font-size: 2rem;
  }
`;

export const HeaderMessage = styled.h2`
  font-size: 0.9rem;
  color: #f1f1f1;
`;
