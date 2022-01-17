import React from "react";
import { HeaderContainer, HeaderLogo, HeaderMessage } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>ORCHESTRATOR</HeaderLogo>
      <HeaderMessage>Your trusted DeFi aggregator</HeaderMessage>
    </HeaderContainer>
  );
};

export default Header;
