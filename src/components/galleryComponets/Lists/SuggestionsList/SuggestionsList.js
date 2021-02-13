import React, { useContext } from "react";
import RootContext from "../../../../context";
import { Link } from "react-router-dom";
import {
  StyledSuggestionsList,
  StyledSugestBtn,
} from "./SuggestionsListStyledComponents.js";

const SuggestionsList = () => {
  const context = useContext(RootContext);
  const {
    suggestionsArray,
    getPhotosFromApiByClickingOnSuggestionList,
    setshowSearchValue,
    activeSearchType,
  } = context;
  return (
    <StyledSuggestionsList>
      {suggestionsArray.map((suggest, index) => (
        <>
          {index <= 8 ? (
            <li key={`${index}${suggest}`}>
              <Link
                to={`/search/${activeSearchType}/${suggest}`}
                onClick={() => {
                  getPhotosFromApiByClickingOnSuggestionList(suggest);
                  setshowSearchValue(suggest);
                }}
              >
                <StyledSugestBtn>{suggest}</StyledSugestBtn>
              </Link>
            </li>
          ) : null}
        </>
      ))}
    </StyledSuggestionsList>
  );
};

export default SuggestionsList;
