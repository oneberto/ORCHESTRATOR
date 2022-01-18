import React from "react";
import Button from "../Button";
import {
  CardBadge,
  CardBadgeImage,
  CardBadgeList,
  CardContainer,
  CardContent,
  CardHeader,
  CardLabel,
  CardLogo,
  CardName,
} from "./styles";
import _find from "lodash/find";

import networkItems from "../../data/networks.json";
import serviceItems from "../../data/services.json";
import { pluralize } from "../../utils/pluralize";

interface IProps {
  name: string;
  networks: string[];
  services: string[];
  image?: string;
  onClick(): void;
}

const Card: React.FC<IProps> = ({
  name,
  networks,
  services,
  image,
  onClick,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardLogo url={image} />
        <CardName>{name}</CardName>
      </CardHeader>
      <CardContent>
        <CardLabel>{pluralize(networks.length, "Network")}:</CardLabel>
        <CardBadgeList>
          {networks.map((value) => {
            const net = _find<any>(networkItems, { value });
            return (
              <CardBadge key={value}>
                {net?.image && <CardBadgeImage url={net?.image} />}
                {net?.label}
              </CardBadge>
            );
          })}
        </CardBadgeList>

        <CardLabel>{pluralize(services.length, "Service")}:</CardLabel>
        <CardBadgeList>
          {services.map((value) => (
            <CardBadge key={value}>
              {_find(serviceItems, { value })?.label}
            </CardBadge>
          ))}
        </CardBadgeList>
      </CardContent>
      <Button onClick={onClick}>VISIT</Button>
    </CardContainer>
  );
};

export default Card;
