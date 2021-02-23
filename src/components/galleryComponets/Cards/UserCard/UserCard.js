import React from "react";
import {
  StledAuthorInfoWrapper,
  StyledAuthorProfileImg,
} from "../../../../styles/globalStyledComponents";
import { StyledAuthorInfo } from "../../ModalPhoto/ModalPhotoStyledComponents";
import {
  StyledUserCard,
  StyledImg,
  StyledShowCase,
  StyledFollowBtn,
} from "./UserCardStyledComponents";

const UserCard = ({ user }) => {
  console.log(user);
  const { profile_image, name, id, photos } = user;
  const imgArray = photos.map((photo) => photo.urls.small);
  return (
    <StyledUserCard>
      <StledAuthorInfoWrapper margin>
        <StyledAuthorProfileImg src={profile_image.medium} />
        <StyledAuthorInfo>{name}</StyledAuthorInfo>
      </StledAuthorInfoWrapper>
      <StyledShowCase>
        <StyledImg src={imgArray[0]} />
        <StyledImg src={imgArray[1]} />
        <StyledImg src={imgArray[2]} />
      </StyledShowCase>
      <StyledFollowBtn>follow</StyledFollowBtn>
    </StyledUserCard>
  );
};

export default UserCard;
