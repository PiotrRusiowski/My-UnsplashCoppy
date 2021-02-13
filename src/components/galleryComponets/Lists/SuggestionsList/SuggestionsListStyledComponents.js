import styled from "styled-components";

export const StyledSuggestionsList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const StyledSugestBtn = styled.button`
  padding: 13px 0;
  width: 135px;
  font-size: 14px;
  background-color: white;
  color: #767676;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  outline: none;

  &:hover {
    border-color: #767676;
    color: black;
  }
`;
