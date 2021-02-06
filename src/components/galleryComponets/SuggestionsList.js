import React, { useContext } from "react";
import RootContext from "../../context";
import styled from "styled-components";

const StyledSuggestionsList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const StyledSugestBtn = styled.button`
  padding: 13px 0;
  width: 135px;
  font-size: 14px;
  background-color: white;
  color: #767676;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  &:hover {
    border-color: #767676;
    color: black;
  }
`;
const SuggestionsList = () => {
  const context = useContext(RootContext);
  const { suggestionsArray } = context;
  return (
    <StyledSuggestionsList>
      {suggestionsArray.map((suggest) => (
        <li>
          <StyledSugestBtn>{suggest}</StyledSugestBtn>
        </li>
      ))}
    </StyledSuggestionsList>
  );
};

export default SuggestionsList;
