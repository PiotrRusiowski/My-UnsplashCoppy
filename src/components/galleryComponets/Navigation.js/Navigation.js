import React, { useContext } from "react";
import {
  StyledNavigation,
  StyledNavigationElement,
  StyledNavigationLink,
  StyledNavigationList,
  StyledIcon,
} from "./NavigationStyledComponents";
import { setActiveSearchType } from "../../../actions";
import RootContext from "../../../context";
import { searchTypes } from "../../../utils/searchTypes";
import { routes } from "../../../routes";
import PeopleIcon from "@material-ui/icons/People";
import { Container } from "../../../styles/globalStyledComponents";
import CollectionsIcon from "@material-ui/icons/Collections";
import LayersIcon from "@material-ui/icons/Layers";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const context = useContext(RootContext);
  const { searchInputValue, handleSetActiveSearchType } = context;
  const dispatch = useDispatch();
  return (
    <StyledNavigation>
      <Container xl>
        <StyledNavigationList>
          <StyledNavigationElement>
            <StyledNavigationLink
              activeStyle={{ color: "black", boxShadow: "inset 0 -2px #111" }}
              to={`/search/photos/${searchInputValue}`}
              onClick={() => {
                dispatch(setActiveSearchType(searchTypes.photos));
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
              to={`/search/collections/${searchInputValue}`}
              onClick={() => {
                // handleSetActiveSearchType(searchTypes.collections);
                dispatch(setActiveSearchType(searchTypes.collections));
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
              to={`/search/users/${searchInputValue}`}
              onClick={() => {
                // handleSetActiveSearchType(searchTypes.users);
                dispatch(setActiveSearchType(searchTypes.users));
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
