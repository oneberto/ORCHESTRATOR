import styled from "styled-components";
import { MediaQueries } from "../../utils/mediaQueries";

export const FieltersContainer = styled.div.attrs({ className: "row" })`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom-style: dashed;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

export const FiltersLabel = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.7rem;
  margin-bottom: 10px;
  display: block;
`;

export const FilterCol = styled.div.attrs({ className: "col-md-4" })`
  margin-bottom: 15px;

  ${MediaQueries.BIGGER_THAN_TABLET} {
    margin-bottom: 0;
  }
`;

export const FilterInput = styled.input`
  background-color: #141a1a;
  border: 2px solid #1f2626;
  color: rgba(255, 255, 255, 0.8);
  outline: none;
  height: 40px;
  width: 100%;
  padding: 2px 8px;
  font-size: 0.75rem;
`;
