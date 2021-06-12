import React, { useContext } from "react";
import {
  StyledNavigation,
  StyledNavigationElement,
  StyledNavigationLink,
  StyledNavigationList,
  StyledIcon,
} from "./NavigationStyledComponents";
import RootContext from "../../../context";
import { searchTypes } from "../../../utils/searchTypes";
import { routes } from "../../../routes";
import PeopleIcon from "@material-ui/icons/People";
import { Container } from "../../../styles/globalStyledComponents";
import CollectionsIcon from "@material-ui/icons/Collections";
import LayersIcon from "@material-ui/icons/Layers";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Navigation = () => {
  const context = useContext(RootContext);
  const {
    getUsersFromApi,
    getCollectionsFromApi,
    searchInputValue,
    showSearchValue,
    handleSetActiveSearchType,
    getPhotos,
  } = context;
  return (
    <StyledNavigation>
      <Container xl>
        <StyledNavigationList>
          <StyledNavigationElement>
            <StyledNavigationLink
              activeStyle={{ color: "black", boxShadow: "inset 0 -2px #111" }}
              // to={`search/${searchTypes.photos}/${searchInputValue}`}
              to={`/search/photos/${searchInputValue}`}
              onClick={() => {
                handleSetActiveSearchType(searchTypes.photos);
              }}
            >
              <StyledIcon>
                <CollectionsIcon fontSize="inherit" color="inherit" />
              </StyledIcon>
              {searchTypes.photos}
            </StyledNavigationLink>
          </StyledNavigationElement>
          <StyledNavigationElement>
            <StyledNavigationLink
              activeStyle={{ color: "black", boxShadow: "inset 0 -2px #111" }}
              // to={`search/${searchTypes.collections}/${searchInputValue}`}
              to={`/search/collections/${searchInputValue}`}
              onClick={() => {
                handleSetActiveSearchType(searchTypes.collections);
              }}
            >
              <StyledIcon>
                <LayersIcon fontSize="inherit" color="inherit" />
              </StyledIcon>

              {searchTypes.collections}
            </StyledNavigationLink>
          </StyledNavigationElement>
          <StyledNavigationElement>
            <StyledNavigationLink
              activeStyle={{ color: "black", boxShadow: "inset 0 -2px #111" }}
              // to={`search/${searchTypes.users}/${searchInputValue}`}
              to={`/search/users/${searchInputValue}`}
              onClick={() => {
                // getUsersFromApi();
                handleSetActiveSearchType(searchTypes.users);
              }}
            >
              <StyledIcon>
                <PeopleIcon fontSize="inherit" color="inherit" />
              </StyledIcon>
              {searchTypes.users}
            </StyledNavigationLink>
          </StyledNavigationElement>
          <StyledNavigationElement>
            <StyledNavigationLink
              activeStyle={{ color: "black", boxShadow: "inset 0 -2px #111" }}
              // to={`search/${searchTypes.users}/${searchInputValue}`}
              to={routes.likesPhotosGallery}
            >
              <StyledIcon>
                <FavoriteIcon fontSize="inherit" color="inherit" />
              </StyledIcon>
              Likes
            </StyledNavigationLink>
          </StyledNavigationElement>
        </StyledNavigationList>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
