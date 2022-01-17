import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;

  tr,
  td {
    border: none;
  }

  thead {
    background: rgba(255, 255, 255, 0.05);
  }

  th,
  td {
    text-align: left;
    padding: 15px;
  }
`;
