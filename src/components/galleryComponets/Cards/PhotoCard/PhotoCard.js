import React, { useContext } from "react";
import {
  StledAuthorInfoWrapper,
  StyledAuthorProfileImg,
} from "../../../../styles/globalStyledComponents";
import {
  StyledPhoto,
  StyledPhotoWrapper,
  StyledBtn,
  StyledPhotoHover,
  StyledBtnGroup,
  StyledUserName,
} from "./StyledPhotoCard";
import RootContext from "../../../../context";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import AddBoxIcon from "@material-ui/icons/AddBox";
import withHoverEffect from "../../../../hoc/withHoverEffect";

const PhotoCard = ({ photosList, photo, isHover, toggleIsHover }) => {
  const context = useContext(RootContext);
  const { findPhoto, openModal, singlePhoto, addToLikePhotosList } = context;
  const { id, urls, alt_description } = photo;
  return (
    <StyledPhotoWrapper
      key={id}
      onMouseEnter={() => {
        toggleIsHover(false);
      }}
      onClick={() => {
        openModal();
        findPhoto(id, photosList);
      }}
      onMouseLeave={() => {
        toggleIsHover(true);
      }}
      isHover={isHover}
    >
      <StyledPhotoHover isHover={isHover}>
        <StyledBtnGroup>
          <StyledBtn>
            <AddBoxIcon fontSize="large" />
          </StyledBtn>
          <StyledBtn
            onClick={() => {
              addToLikePhotosList();
            }}
          >
            <LoyaltyIcon fontSize="large" />
          </StyledBtn>
        </StyledBtnGroup>
        <StyledBtnGroup width>
          <StyledBtn>
            <StledAuthorInfoWrapper>
              <StyledAuthorProfileImg
                src={photo.user.profile_image.small}
                alt="author profile image"
              />
              <StyledUserName>{photo.user.name}</StyledUserName>
            </StledAuthorInfoWrapper>
          </StyledBtn>
          <StyledBtn>
            <ArrowDropDownCircleIcon fontSize="large" />
          </StyledBtn>
        </StyledBtnGroup>
      </StyledPhotoHover>
      <StyledPhoto src={urls.small} alt={alt_description} />
    </StyledPhotoWrapper>
  );
};

export default withHoverEffect(PhotoCard);
