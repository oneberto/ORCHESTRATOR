import React, { useRef, useState } from "react";
import Select from "../Select";
import { FilterInput, FiltersLabel } from "./styles";

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
    <div className="row" style={{ marginBottom: 30 }}>
      <div className="col-md-4">
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
      </div>

      <div className="col-md-4">
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
      </div>

      <div className="col-md-4">
        <FiltersLabel htmlFor="defi_name">Name</FiltersLabel>

        <FilterInput
          name="defi_name"
          placeholder="Search by name..."
          onChange={(e) => onChangeTextSearch(e.target.value)}
          value={textSearch}
        />
      </div>
    </div>
  );
};

export default Filters;
