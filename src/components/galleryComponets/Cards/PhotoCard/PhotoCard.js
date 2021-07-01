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
import withHoverEffect from "../../../../hoc/withHoverEffect";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const PhotoCard = ({ photosList, photo, isHover, toggleIsHover }) => {
  const context = useContext(RootContext);
  const dispatch = useDispatch();
  const likesPhotosList = useSelector(
    (state) => state.supportReducer.likesPhotosList
  );
  const { openModal } = context;
  const { id, urls, alt_description } = photo;
  return (
    <StyledPhotoWrapper
      key={id}
      onMouseEnter={() => {
        toggleIsHover(false);
      }}
      onMouseLeave={() => {
        toggleIsHover(true);
      }}
      isHover={isHover}
    >
      {likesPhotosList === photosList ? (
        <>
          <StyledBtn
            isHover={isHover}
            top="true"
            onClick={() => dispatch(removeFromLikesPhotos(id))}
          >
            <HighlightOffIcon fontSize="large" />
          </StyledBtn>
        </>
      ) : (
        <>
          <StyledBtn
            isHover={isHover}
            top="true"
            onClick={() => {
              dispatch(findPhotoDetails(id, photosList));
              dispatch(addToLikesPhotosList());
            }}
          >
            <LoyaltyIcon fontSize="large" />
          </StyledBtn>
        </>
      )}
      <StyledPhotoHover
        isHover={isHover}
        onClick={() => {
          openModal();
          dispatch(findPhotoDetails(id, photosList));
        }}
      >
        <StyledBtn>
          <ArrowDropDownCircleIcon fontSize="large" />
        </StyledBtn>
      </StyledPhotoHover>
      <StledAuthorInfoWrapper
        // to={`/${username}`}
        // onClick={() => {
        //   dispatch(findUserDetails(singleUser));
        //   dispatch(getSingleUserPhotos(username));
        // }}
        isHover={isHover}
        photoCard
      >
        <StyledAuthorProfileImg
          src={photo.user.profile_image.small}
          alt="author profile image"
        />
        <StyledUserName>{photo.user.name}</StyledUserName>
      </StledAuthorInfoWrapper>

      <StyledPhoto src={urls.small} alt={alt_description} key={id} />
    </StyledPhotoWrapper>
  );
};

export default withHoverEffect(PhotoCard);
