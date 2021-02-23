import React, { useContext, useState } from "react";
import RootContext from "../../../../context";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

import {
  Container,
  StyledList,
  StledAuthorInfoWrapper,
  StyledAuthorProfileImg,
} from "../../../../styles/globalStyledComponents";
import GalleryHeader from "../../GalleryHeader/GalleryHeader";
import GalleryModal from "../../ModalPhoto/ModalPhoto";
import {
  StyledTagList,
  StyledTagListElemnt,
  StyledPhoto,
  StyledPhotoWrapper,
  StyledBtn,
  StyledPhotoHover,
  StyledBtnGroup,
  StyledUserName,
} from "./PhotosListStyledComponent";

const PhotosList = ({ photosList }) => {
  // const [isHover, setIsHover] = useState(false);
  const context = useContext(RootContext);
  const {
    findPhoto,
    openModal,
    singlePhoto,
    modalIsOpen,
    addToLikePhotosList,
    resetSinglePhoto,
    selectedCollectionList,
  } = context;
  // const setIsHoverTrue =()=>{
  // }

  const showButtons = () => {};

  return (
    <>
      <Container xl>
        <StyledList>
          {photosList.map(({ id, alt_description, urls }) => {
            let isHover = false;
            if (id === singlePhoto.id) {
              isHover = true;
              console.log(singlePhoto.id);
              console.log(id, isHover);
            } else {
              isHover = false;
            }
            return (
              <li>
                <StyledPhotoWrapper
                  key={id}
                  onMouseEnter={() => {
                    findPhoto(id, photosList);
                  }}
                  onMouseLeave={resetSinglePhoto}
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
                          <StyledUserName>
                            {singlePhoto.user.name}
                          </StyledUserName>
                        </StledAuthorInfoWrapper>
                      </StyledBtn>
                      <StyledBtn>
                        <ArrowDropDownCircleIcon fontSize="large" />
                      </StyledBtn>
                    </StyledBtnGroup>
                  </StyledPhotoHover>
                  <StyledPhoto
                    src={urls.small}
                    alt={alt_description}
                    onClick={() => {
                      openModal();
                    }}
                  />
                </StyledPhotoWrapper>
              </li>
            );
          })}
        </StyledList>
        <GalleryModal />
      </Container>
    </>
  );
};

export default PhotosList;
