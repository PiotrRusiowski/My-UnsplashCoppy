import React, { useContext } from "react";
import RootContext from "../../../../context";
import {
  Container,
  StyledList,
} from "../../../../styles/globalStyledComponents";
import GalleryModal from "../../ModalPhoto/ModalPhoto";
import {
  StyledTagList,
  StyledTagListElemnt,
  StyledPhoto,
  StyledPhotoHover,
  StyledPhotosListElement,
} from "./PhotosListStyledComponent";

const PhotosList = () => {
  const context = useContext(RootContext);
  const { photosList, findPhoto, openModal } = context;

  return (
    <>
      <Container xl>
        <StyledList>
          {photosList.map(({ alt_description, urls, tags, id }) => (
            <StyledPhotosListElement
              onClick={() => {
                findPhoto(id);
                openModal();
              }}
              key={id}
            >
              <StyledPhotoHover>
                <StyledPhoto src={urls.small} alt={alt_description} />
              </StyledPhotoHover>
              <StyledTagList>
                {tags.map((tag) => (
                  <li key={tag.title}>
                    <StyledTagListElemnt>
                      <p>{tag.title}</p>
                    </StyledTagListElemnt>
                  </li>
                ))}
              </StyledTagList>
            </StyledPhotosListElement>
          ))}
        </StyledList>
        <GalleryModal />
      </Container>
    </>
  );
};

export default PhotosList;
