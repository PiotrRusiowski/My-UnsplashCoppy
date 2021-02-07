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
