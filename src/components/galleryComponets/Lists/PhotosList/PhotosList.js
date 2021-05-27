import React, { useContext } from "react";
import RootContext from "../../../../context";
import "./masonry.css";
import Masonry from "react-masonry-css";
import { StyledList } from "../../../../styles/globalStyledComponents";
import GalleryModal from "../../ModalPhoto/ModalPhoto";
import PhotoCard from "../../Cards/PhotoCard/PhotoCard";

const PhotosList = ({ photosList }) => {
  const context = useContext(RootContext);
  const { singlePhoto } = context;
  const breakpointColumnsObj = {
    default: 3,
    700: 1,
    500: 1,
  };
  return (
    <>
      <StyledList>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {photosList.map((photo) => {
            let isHover = false;
            if (photo.id === singlePhoto.id) {
              isHover = true;
            } else {
              isHover = false;
            }
            return (
              <PhotoCard
                photosList={photosList}
                photo={photo}
                isHover={isHover}
              />
            );
          })}
        </Masonry>
      </StyledList>
      <GalleryModal />
    </>
  );
};

export default PhotosList;
