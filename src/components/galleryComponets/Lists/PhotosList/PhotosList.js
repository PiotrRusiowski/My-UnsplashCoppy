import React from "react";
import "./masonry.css";
import Masonry from "react-masonry-css";
import { StyledList } from "../../../../styles/globalStyledComponents";
import ModalPhoto from "../../ModalPhoto/ModalPhoto";
import PhotoCard from "../../Cards/PhotoCard/PhotoCard";

const PhotosList = ({ photosList }) => {
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
          {photosList.map((photo, index) => (
            <li key={index}>
              <PhotoCard photosList={photosList} photo={photo} />
            </li>
          ))}
        </Masonry>
      </StyledList>
      <ModalPhoto />
    </>
  );
};

export default PhotosList;
