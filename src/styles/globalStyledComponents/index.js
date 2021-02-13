import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-width: 800px;
  margin: auto;
  ${({ xl }) =>
    xl &&
    css`
      max-width: 95vw;
    `}
`;
export const StyledList = styled.ul`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
