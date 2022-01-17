import React, { useRef } from "react";
import Select from "../Select";
import {
  FilterCol,
  FilterInput,
  FiltersLabel,
  FieltersContainer,
} from "./styles";

import networkItems from "../../data/networks.json";
import serviceItems from "../../data/services.json";
import { IOption } from "../../interfaces/IOption";

interface IProps {
  networks: IOption[];
  onChangeNetworks(items: IOption[]): void;
  services: IOption[];
  onChangeServices(items: IOption[]): void;
  textSearch: string;
  onChangeTextSearch(text: string): void;
}

const Filters: React.FC<IProps> = ({
  networks,
  onChangeNetworks,
  services,
  onChangeServices,
  textSearch,
  onChangeTextSearch,
}) => {
  const networkRef = useRef<any>();
  const serviceRef = useRef<any>();

  return (
    <FieltersContainer>
      <FilterCol>
        <FiltersLabel
          htmlFor="chain"
          onClick={() => networkRef.current?.focus()}
        >
          Network
        </FiltersLabel>
        <Select
          value={networks}
          options={networkItems}
          name="network"
          onChange={(v) => onChangeNetworks(v)}
          placeholder="All"
          ref={networkRef}
        />
      </FilterCol>

      <FilterCol>
        <FiltersLabel
          htmlFor="chain"
          onClick={() => serviceRef.current?.focus()}
        >
          Service
        </FiltersLabel>
        <Select
          value={services}
          options={serviceItems}
          name="network"
          onChange={(v) => onChangeServices(v)}
          placeholder="All"
          ref={serviceRef}
        />
      </FilterCol>

      <FilterCol>
        <FiltersLabel htmlFor="defi_name">Name</FiltersLabel>

        <FilterInput
          name="defi_name"
          placeholder="Search by name..."
          onChange={(e) => onChangeTextSearch(e.target.value)}
          value={textSearch}
        />
      </FilterCol>
    </FieltersContainer>
  );
};

export default Filters;
