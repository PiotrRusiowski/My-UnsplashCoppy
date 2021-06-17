import styled, { css } from "styled-components";

export const StyledSearchWrapper = styled.div`
  max-width: 800px;
  border-radius: 5px;
  background-color: white;
  height: 54px;
  outline: none;

  ${({ gallery }) =>
    gallery &&
    css`
      background-color: rgb(238, 238, 238);
      border-bottom-left-radius: 40px;
      border-top-left-radius: 40px;
      border-bottom-right-radius: 40px;
      border-top-right-radius: 40px;
      height: 35px;
      &:hover {
        border: solid rgb(238, 238, 238) 1px;
        background-color: white;
      }
    `}
`;
export const StyledForm = styled.form`
  height: 100%;
  position: relative;
`;
export const StyledSearch = styled.div`
  position: relative;

  height: 100%;
  display: flex;
  width: 100%;
`;
export const StyledSearchInput = styled.input`
  border: none;
  height: 100%;
  flex-grow: 1;
  border-radius: 5px;
  font-size: 15px;
  background-color: transparent;
  padding-right: 10px;

  &:focus {
    outline: none;
  }
`;
export const StyledSearchInput2 = styled.input`
  border: none;
  height: 100%;
  flex-grow: 1;
  border-radius: 5px;
  font-size: 15px;
  background-color: transparent;
  padding-right: 10px;

  &:focus {
    outline: none;
  }
`;

export const StyledSearchBtn = styled.div`
  display: flex;
  height: 100%;
  width: 50px;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  color: #767676;
  cursor: pointer;
`;

export const StyledPopper = styled.div`
  width: 100%;
  position: absolute;
  padding: 5px 0px;
  margin-top: 5px;
  z-index: 300;
  color: black;
  border-radius: 5px;
  background-color: white;
  display: flex;
  display: ${({ isPopperVisible }) => (isPopperVisible ? "block" : "none")};
  ${({ gallery }) =>
    gallery &&
    css`
      border: solid rgb(238, 238, 238) 1px;
    `}
`;
export const StyledPopperListElement = styled.div`
  padding: 8px;
  text-align: left;
  &:hover {
    background-color: rgb(203, 203, 203);
  }
`;
