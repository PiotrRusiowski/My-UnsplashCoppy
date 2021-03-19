import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledColectionCard = styled.div`
  width: 32%;
  height: 330px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 49%;
    height: 300px;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const StyledCardShowCaseLink = styled(Link)`
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
  background-color: rgb(245, 245, 245);
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
  background-color: rgb(245, 245, 245);
  border: none;
`;

export const StyledLargeImg = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 2px;
  object-fit: cover;
`;

export const StyledCardDescription = styled.div``;
export const StyledAuthor = styled.div``;
export const StyledTags = styled.ul`
  display: flex;
`;
export const StyledImgSmallDiv = styled.div`
  width: 100%;
  height: 50%;

  background-color: rgb(245, 245, 245);
  border: none;
`;
