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

const PhotoCard = ({ photosList, photo, isHover }) => {
  const context = useContext(RootContext);
  const {
    findPhoto,
    openModal,
    singlePhoto,
    addToLikePhotosList,
    resetSinglePhoto,
  } = context;
  const { id, urls, alt_description } = photo;
  return (
    <StyledPhotoWrapper
      key={id}
      onMouseEnter={() => {
        findPhoto(id, photosList);
      }}
      onClick={() => {
        openModal();
      }}
      onMouseLeave={resetSinglePhoto}
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
                src={singlePhoto.user.profile_image.small}
                alt="author profile image"
              />
              <StyledUserName>{singlePhoto.user.name}</StyledUserName>
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

export default PhotoCard;
