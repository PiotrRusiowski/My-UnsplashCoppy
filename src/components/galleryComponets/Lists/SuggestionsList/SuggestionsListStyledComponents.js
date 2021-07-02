import styled, { css } from "styled-components";

export const StyledSuggestionsList = styled.div`
  margin: 20px 40px;
  height: 42px;
  @media (max-width: 320px) {
    display: ${({ main }) => (main ? "block" : "none")};
  }
`;
export const StyledSugestListElement = styled.div`
  width: 135px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.darkGrey};
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-radius: 5px;
  outline: none;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-color: ${({ theme }) => theme.darkGrey};
    color: black;
  }

  ${({ main }) =>
    main &&
    css`
      text-decoration: none;
      text-transform: capitalize;
      height: 100%;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.darkGrey};
      transition: 0.2s;
      border: none;
    `}
`;
export const StyledCarouselBtnGroup = styled.div``;
export const StyledCarouselBtn = styled.button`
  font-size: 18px;
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  border: none;
  height: 60px;
  width: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  color: ${({ theme }) => theme.darkGrey};

  outline: none;
  display: flex;
  align-items: center;
  ${({ left }) =>
    left &&
    css`
      left: "10px";
    `}
  ${({ right }) =>
    right &&
    css`
      right: "10px";
      justify-content: flex-end;
    `}
  &:hover {
    color: black;
  }
`;
export const StyledSuggestLink = styled.button`
  text-decoration: none;
  text-transform: capitalize;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.darkGrey};
  transition: 0.2s;
  &:hover {
    color: black;
  }
`;
