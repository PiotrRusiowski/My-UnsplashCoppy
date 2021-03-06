import styled, { css } from "styled-components";

export const StyledSuggestionsList = styled.ul`
  margin-left: 20px;
  margin-right: 20px;
  height: 42px;
`;
export const StyledSugestBtn = styled.button`
  padding: 13px 0;
  width: 135px;
  font-size: 14px;
  background-color: white;
  color: ${(props) => props.theme.darkGrey};
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-radius: 5px;
  outline: none;
  height: 42px;

  &:hover {
    border-color: ${({ theme }) => theme.darkGrey};
    color: black;
  }
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
