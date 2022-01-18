import React, { useMemo, useState } from "react";
import Card from "./components/Card";
import Filters from "./components/Filters";
import Header from "./components/Header";
import { AppContainer } from "./styles";

// Data
import defiItems from "./data/defis.json";
import { IOption } from "./interfaces/IOption";
import Modal from "./components/Modal";

const App = () => {
  const [networks, setNetworks] = useState<IOption[]>([]);
  const [services, setServices] = useState<IOption[]>([]);
  const [textSearch, setTextSearch] = useState("");
  const [defiURL, setDefiURL] = useState("");

  const defis = useMemo(() => {
    if (!networks?.length && !services?.length && !textSearch?.length) {
      return defiItems;
    }

    return defiItems.filter((defi) => {
      const hasMatchedNetworks =
        !!networks?.length &&
        networks.some(({ value }) => defi.networks.includes(value));
      const hasMatchedServices =
        !!services?.length &&
        services.some(({ value }) => defi.services.includes(value));

      const hasMatchedName =
        !!textSearch &&
        defi.name.toLowerCase().includes(textSearch.toLowerCase());

      return hasMatchedNetworks || hasMatchedServices || hasMatchedName;
    });
  }, [services, networks, textSearch]);

  return (
    <>
      <Modal defiURL={defiURL} onClickClose={() => setDefiURL("")} />
      <AppContainer>
        <Header />

        <div className="container">
          <Filters
            networks={networks}
            onChangeNetworks={setNetworks}
            services={services}
            onChangeServices={setServices}
            textSearch={textSearch}
            onChangeTextSearch={setTextSearch}
          />
          <div className="row">
            {defis.map(({ id, ...rest }, index) => (
              <div className="col-md-4" key={id}>
                <Card {...rest} onClick={() => setDefiURL(rest.url)} />
              </div>
            ))}
          </div>
        </div>
      </AppContainer>
    </>
  );
};

export default App;
