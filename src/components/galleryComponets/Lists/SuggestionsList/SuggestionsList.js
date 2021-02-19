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
    getPhotos,
  } = context;

  return (
    <StyledSuggestionsList>
      {suggestionsArray.map((suggest, index) => (
        <>
          {index <= 8 ? (
            <Link to={`/search/${activeSearchType}/${suggest}`}>
              {/* Zrobic osobne zapytania na klika */}
              <li key={`${index}${suggest}`} onClick={getPhotos}>
                <StyledSugestBtn>{suggest}</StyledSugestBtn>
              </li>
            </Link>
          ) : null}
        </>
      ))}
    </StyledSuggestionsList>
  );
};

export default SuggestionsList;
