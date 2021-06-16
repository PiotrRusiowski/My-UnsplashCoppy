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
import { findUserDetails, getSingleUserPhotos } from "../../../../actions";
import { useDispatch } from "react-redux";

const UserCard = ({ singleUser }) => {
  const dispatch = useDispatch();
  const { profile_image, username, name, photos } = singleUser;
  const imgArray = photos.map((photo) => photo.urls.small);

  return (
    <StyledUserCard
      to={`/${username}`}
      onClick={() => {
        dispatch(findUserDetails(singleUser));
        dispatch(getSingleUserPhotos(username));
      }}
    >
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
