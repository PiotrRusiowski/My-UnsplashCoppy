import React, { useContext } from "react";
import RootContext from "../../../../../context";
import {
  StyledAuthorInfo,
  StyledUserInfoCard,
} from "./UserInfoCardStyledComponents";
import {
  StledAuthorInfoWrapper,
  StyledAuthorProfileImg,
} from "../../../../../styles/globalStyledComponents";

const UserInfoCard = () => {
  const context = useContext(RootContext);
  const { singleUser } = context;
  const { name, bio, location, profile_image } = singleUser;

  return (
    <StyledUserInfoCard>
      <StledAuthorInfoWrapper>
        <StyledAuthorProfileImg src={profile_image.large} />
        <StyledAuthorInfo>
          <h1>{name}</h1>
          <p>{bio}</p>
          <p>{location}</p>
        </StyledAuthorInfo>
      </StledAuthorInfoWrapper>
    </StyledUserInfoCard>
  );
};

export default UserInfoCard;
