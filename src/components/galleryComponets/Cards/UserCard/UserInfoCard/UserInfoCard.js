import React, { useContext } from "react";
import RootContext from "../../../../../context";
import {
  StyledAuthorInfo,
  StyledUserInfoCard,
  StyledAuthorName,
  StyledAuthorContact,
  StyledAuthorLinkContent,
} from "./UserInfoCardStyledComponents";
import { StyledAuthorProfileImg } from "../../../../../styles/globalStyledComponents";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";

const UserInfoCard = () => {
  const context = useContext(RootContext);
  const { singleUser } = context;
  const { name, bio, location, profile_image, portfolio_url } = singleUser;

  return (
    <StyledUserInfoCard>
      <StyledAuthorProfileImg src={profile_image.large} />
      <StyledAuthorInfo>
        <StyledAuthorName>{name}.</StyledAuthorName>
        <p>{bio}</p>
        {location ? (
          <StyledAuthorContact>
            <LocationOnIcon color="inerit" fontSize="" />
            <StyledAuthorLinkContent>{location}</StyledAuthorLinkContent>
          </StyledAuthorContact>
        ) : (
          ""
        )}

        {portfolio_url ? (
          <StyledAuthorContact href={portfolio_url}>
            <LanguageIcon />
            <StyledAuthorLinkContent>
              {portfolio_url.slice(12)}
            </StyledAuthorLinkContent>
          </StyledAuthorContact>
        ) : (
          ""
        )}
      </StyledAuthorInfo>
    </StyledUserInfoCard>
  );
};

export default UserInfoCard;
