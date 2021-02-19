import React, { useContext } from "react";
import {
  StyledNavigation,
  StyledNavigationLink,
} from "./NavigationStyledComponents";
import RootContext from "../../../context";
import { searchTypes } from "../../../utils/searchTypes";

const Navigation = () => {
  const context = useContext(RootContext);
  const {
    getUsersFromApi,
    getCollectionsFromApi,
    searchInputValue,
    handleSetActiveSearchType,
  } = context;
  return (
    <StyledNavigation>
      <StyledNavigationLink
        // to={`search/${searchTypes.photos}/${searchInputValue}`}
        onClick={() => handleSetActiveSearchType(searchTypes.photos)}
        to={`/search/photos/${searchInputValue}`}
      >
        {searchTypes.photos}
      </StyledNavigationLink>
      <StyledNavigationLink
        // to={`search/${searchTypes.collections}/${searchInputValue}`}
        to={`/search/collections/${searchInputValue}`}
        onClick={() => {
          getCollectionsFromApi();
          handleSetActiveSearchType(searchTypes.collections);
        }}
      >
        {searchTypes.collections}
      </StyledNavigationLink>
      <StyledNavigationLink
        // to={`search/${searchTypes.users}/${searchInputValue}`}
        to={`/search/users/${searchInputValue}`}
        onClick={() => {
          getUsersFromApi();
          handleSetActiveSearchType(searchTypes.users);
        }}
      >
        {searchTypes.users}
      </StyledNavigationLink>
    </StyledNavigation>
  );
};

export default Navigation;
