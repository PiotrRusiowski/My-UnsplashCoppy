import React, { useContext } from "react";
import RootContext from "../../context";
import styled from "styled-components";
import { Container } from "../../styles/globalStyledComponents";
import { Link } from "react-router-dom";
import GalleryModal from "./ModalPhoto";

const StyledPhotosList = styled.ul`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledTagList = styled.ul`
  padding: 5px;
  display: flex;
  justify-content: space-around;
`;
const StyledPhoto = styled.img`
  cursor: pointer;
  &:hover {
  opacity:0.9;
  }
  }
`;
const StyledTagListElemnt = styled(Link)`
  color: #767676;
  text-decoration: none;
`;
const PhotosList = () => {
  const context = useContext(RootContext);
  const { photosList, findPhoto, openModal } = context;

  return (
    <>
      <Container xl>
        <StyledPhotosList>
          {photosList.map(({ alt_description, urls, tags, id }) => (
            <li key={id}>
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
                  <li key={tag.title}>
                    <StyledTagListElemnt>
                      <p>{tag.title}</p>
                    </StyledTagListElemnt>
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

export default PhotosList;
