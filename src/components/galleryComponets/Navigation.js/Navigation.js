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
    showSearchValue,
    handleSetActiveSearchType,
  } = context;
  return (
    <StyledNavigation>
      <StyledNavigationLink
        // to={`search/${searchTypes.photos}/${showSearchValue}`}
        onClick={() => handleSetActiveSearchType(searchTypes.photos)}
        to={`/search/photos/${showSearchValue}`}
      >
        {searchTypes.photos}
      </StyledNavigationLink>
      <StyledNavigationLink
        // to={`search/${searchTypes.collections}/${showSearchValue}`}
        to={`/search/collections/${showSearchValue}`}
        onClick={() => {
          getCollectionsFromApi();
          handleSetActiveSearchType(searchTypes.collections);
        }}
      >
        {searchTypes.collections}
      </StyledNavigationLink>
      <StyledNavigationLink
        // to={`search/${searchTypes.users}/${showSearchValue}`}
        to={`/search/users/${showSearchValue}`}
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
