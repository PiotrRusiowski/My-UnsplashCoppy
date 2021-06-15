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
import {
  findPhotoDetails,
  addToLikesPhotosList,
  removeFromLikesPhotos,
} from "../../../../actions";
import RootContext from "../../../../context";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import AddBoxIcon from "@material-ui/icons/AddBox";
import withHoverEffect from "../../../../hoc/withHoverEffect";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const PhotoCard = ({ photosList, photo, isHover, toggleIsHover }) => {
  const context = useContext(RootContext);
  const dispatch = useDispatch();
  const likesPhotosList = useSelector(({ likesPhotosList }) => likesPhotosList);
  const { openModal } = context;
  const { id, urls, alt_description } = photo;
  return (
    <StyledPhotoWrapper
      key={id}
      onMouseEnter={() => {
        toggleIsHover(false);
      }}
      onClick={() => {
        openModal();
        dispatch(findPhotoDetails(id, photosList));
      }}
      onMouseLeave={() => {
        toggleIsHover(true);
      }}
      isHover={isHover}
    >
      <StyledPhotoHover isHover={isHover}>
        <StyledBtnGroup>
          {likesPhotosList === photosList ? (
            <>
              <StyledBtn onClick={() => dispatch(removeFromLikesPhotos(id))}>
                <HighlightOffIcon fontSize="large" />
              </StyledBtn>
            </>
          ) : (
            <>
              <StyledBtn>
                <AddBoxIcon fontSize="large" />
              </StyledBtn>
              <StyledBtn
                onClick={() => {
                  dispatch(findPhotoDetails(id, photosList));
                  dispatch(addToLikesPhotosList());
                }}
              >
                <LoyaltyIcon fontSize="large" />
              </StyledBtn>
            </>
          )}
        </StyledBtnGroup>
        <StyledBtnGroup width>
          <StledAuthorInfoWrapper>
            <StyledAuthorProfileImg
              src={photo.user.profile_image.small}
              alt="author profile image"
            />
            <StyledUserName>{photo.user.name}</StyledUserName>
          </StledAuthorInfoWrapper>

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
