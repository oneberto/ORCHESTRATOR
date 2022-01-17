import styled from "styled-components";
import { MediaQueries } from "../../utils/mediaQueries";

export const CardContainer = styled.div`
  background: #141a1a;
  flex: 1;
  margin-bottom: 20px;
  border: 2px solid #1f2626;
  display: flex;
  flex-direction: column;

  ${MediaQueries.BIGGER_THAN_TABLET} {
    margin-bottom: 30px;
    height: calc(100% - 30px);
  }
`;

export const CardHeader = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  flex: 1;
`;

export const CardLogo = styled.div<{ url?: string }>`
  width: 25px;
  height: 25px;
  background: url(${({ url }) => url}) no-repeat;
  background-size: contain;
  margin-right: 10px;
`;

export const CardName = styled.strong`
  color: #f1f1f1;
  font-size: 1rem;
`;

export const CardTagTrusted = styled.span`
  border-radius: 8px;
  padding: 4px 8px;
  background-color: #198754;
  display: flex;
  margin-right: auto;
  font-size: 0.8rem;
  font-weight: normal;
  margin-bottom: 15px;
`;

export const CardClickRate = styled.p`
  color: rgba(241, 241, 241, 0.7);
  margin-bottom: 15px;

  strong {
    color: rgb(250, 222, 73, 0.7);
  }
`;

export const CardLabel = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.5rem;
  margin-bottom: 5px;
`;

export const CardBadgeList = styled.div`
  display: flex;
  margin: 0 -5px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

export const CardBadge = styled.span`
  padding: 4px 8px;
  font-size: 0.65rem;
  background: rgba(255, 255, 255, 0.05);
  color: #f1f1f1;
  margin: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
`;

export const CardBadgeImage = styled.span<{ url?: string }>`
  width: 12px;
  height: 12px;
  background: url(${({ url }) => url}) no-repeat;
  background-size: contain;
  margin-right: 10px;
`;
