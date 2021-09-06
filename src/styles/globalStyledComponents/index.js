import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  max-width: 800px;
  margin: auto;
  ${({ xl }) =>
    xl &&
    css`
      margin: 0px;
      padding: 0 20px;
      max-width: 100%;
      @media (max-width: 768px) {
        padding: 0 10px;
      }
    `}
`;
export const StyledList = styled.ul`
  margin-top: 50px;
  max-width: 1320px;
  margin-left: 0px;
`;
export const StledAuthorInfoWrapper = styled.div`
  position: absolute;
  color: black;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  ${({ photocard }) =>
    photocard &&
    css`
      display: ${({ isHover }) => (isHover ? "flex" : "none")};
      /* display: flex; */
      bottom: 10px;
      left: 10px;
    `}
  ${({ modal }) =>
    modal &&
    css`
      display: flex;
      top: 0;
      left: 0;
    `}
`;
export const StyledAuthorProfileImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
export const StyledSearchValue = styled.h2`
  display: flex;
  text-transform: capitalize;
  margin-right: auto;
  font-size: 46px;
  padding-bottom: 15px;
`;
