import React, { useContext } from "react";
import RootContext from "../../context";
import styled from "styled-components";
import { Container } from "../../globalStyledComponents";
import { Link } from "react-router-dom";
import GalleryModal from "./ModalPhoto";

const StyledPhotosList = styled.ul`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledTagList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const StyledPhoto = styled.img`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const PhotosList = () => {
  const context = useContext(RootContext);
  const { photosList, findPhoto, openModal } = context;

  return (
    <>
      <Container xl>
        <StyledPhotosList>
          {photosList.map(({ alt_description, urls, tags, id }) => (
            <li>
              <StyledPhoto
                src={urls.small}
                alt={alt_description}
                onClick={() => {
                  findPhoto(id);
                  openModal();
                }}
              />
              <StyledTagList>
                {tags.map((tag) => (
                  <li>
                    <Link>{tag.title}</Link>
                  </li>
                ))}
              </StyledTagList>
            </li>
          ))}
        </StyledPhotosList>
        <GalleryModal />
      </Container>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   photosList: state.photosList,
// });
// export default connect(mapStateToProps)(PhotosList);
export default PhotosList;
