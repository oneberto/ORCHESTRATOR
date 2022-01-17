import styled from "styled-components";

import ReactSelect from "react-select";

export const SelectWrap = styled(ReactSelect)`
  .orchestrator__control {
    background-color: #141a1a;
    border-color: #1f2626;
    border-radius: 0;
    border-width: 2px;
    box-shadow: unset;

    :hover {
      border-color: #1f2626;
    }
  }

  .orchestrator__control--is-focused {
    border-color: #1f2626;
  }

  .orchestrator__indicator-separator {
    background-color: #1f2626;
  }

  .orchestrator__menu-list {
    background-color: #141a1a;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  .orchestrator__option {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .orchestrator__option--is-focused {
    color: #fff;
    background-color: #1f2626;
  }

  .orchestrator__placeholder {
    font-size: 0.8rem;
  }

  .orchestrator__input-container {
    font-size: 0.8rem;
    color: #fff;
  }

  // ALREADY SELECTED OPTION
  .orchestrator__multi-value {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0;
    border: 1px solid #1f2626;
  }

  .orchestrator__multi-value__label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
  }

  .orchestrator__multi-value__remove {
    :hover {
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
  }

  .orchestrator__menu-notice {
    font-size: 0.7rem;
  }
`;
