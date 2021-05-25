import styled, { css } from "styled-components";

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
  width: 100%;
  max-width: 1320px;
  margin-left: 0px;
  /* flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  @media (max-width: 768px) {
    margin-left: -15px;
  }
`;
export const StledAuthorInfoWrapper = styled.div`
  position: static;
  ${({ modal }) =>
    modal &&
    css`
      position: absolute;
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin-right: auto;
    `}
  top: 0;
  left: 0;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
`;
export const StyledAuthorProfileImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
