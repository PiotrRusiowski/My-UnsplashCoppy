import React, { useContext, useState } from "react";
import RootContext from "../../../../context";
import {
  Container,
  StyledList,
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
  StyledBtnGroup1,
} from "./PhotosListStyledComponent";

const PhotosList = () => {
  // const [isHover, setIsHover] = useState(false);
  const context = useContext(RootContext);
  const {
    photosList,
    findPhoto,
    openModal,
    singlePhoto,
    modalIsOpen,
    addToLikePhotosList,
  } = context;
  // const setIsHoverTrue =()=>{
  // }

  return (
    <>
      <Container xl>
        <StyledList>
          {photosList.map(({ alt_description, urls, tags, id }) => {
            let isHover = false;

            if (id === singlePhoto.id) {
              isHover = true;
              console.log(singlePhoto.id);
              console.log(id, isHover);
            } else {
              isHover = false;
            }

            const hover = () => {
              console.log(id);
              console.log(singlePhoto.id);
              if (id === singlePhoto.id) {
                isHover = true;
                console.log(singlePhoto.id);
                console.log(id, isHover);
              } else {
                isHover = false;
              }
            };

            return (
              <li key={id}>
                <StyledPhotoWrapper
                  onMouseEnter={() => {
                    findPhoto(id);
                    // hover();
                  }}

                  // onMouseLeave={() => (isHover = false)}
                >
                  <StyledPhotoHover isHover={isHover}>
                    <StyledBtnGroup1 modalIsOpen={modalIsOpen}>
                      <StyledBtn>dodaj</StyledBtn>
                      <StyledBtn
                        onClick={() => {
                          findPhoto(id);
                          addToLikePhotosList();
                        }}
                      >
                        like
                      </StyledBtn>
                    </StyledBtnGroup1>
                  </StyledPhotoHover>
                  <StyledPhoto
                    src={urls.small}
                    alt={alt_description}
                    onClick={() => {
                      findPhoto(id);
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
