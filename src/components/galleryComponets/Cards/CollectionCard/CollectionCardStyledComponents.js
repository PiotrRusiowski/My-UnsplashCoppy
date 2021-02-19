import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledCard = styled.div`
  width: 32%;
  height: 330px;
  display: flex;
  flex-direction: column;
`;
export const StyledCardShowCase = styled.div`
  display: flex;
  flex-basis: 80%;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
export const StyledCardShowCaseBig = styled.div`
  width: 70%;
  background-color: cadetblue;
  margin-right: 2px;
  height: 100%;
`;
export const StyledCardShowCaseSmall = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  overflow: hidden;
  height: 100%;
`;
export const StyledImgSmall = styled.img`
  width: 100%;
  height: 50%;
  margin-bottom: 2px;
  object-fit: cover;
`;
export const StyledLargeImg = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 2px;
  object-fit: cover;
`;

export const StyledCardDescription = styled.div``;
