import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";

import {
  StyledCard,
  StyledCardShowCaseLink,
  StyledCardDescription,
  StyledCardShowCaseBig,
  StyledCardShowCaseSmall,
  StyledImgSmall,
  StyledLargeImg,
  StyledAuthor,
  StyledTags,
  StyledImgSmallDiv,
} from "./CollectionCardStyledComponents";

const CollectionCard = ({
  collection,
  getCollectionsPhotos,
  searchInputValue,
}) => {
  const { title, preview_photos, user, total_photos, tags, id } = collection;
  const photosAarray = preview_photos.map((photo) => photo.urls.regular);
  const tagsArray = tags.map((tag) => tag.title);
  return (
    <StyledCard onClick={() => getCollectionsPhotos(id)}>
      <StyledCardShowCaseLink
        to={`/search/collections/${collection.id}/${searchInputValue}`}
      >
        <StyledCardShowCaseBig>
          <StyledLargeImg src={photosAarray[0]} />
        </StyledCardShowCaseBig>

        <StyledCardShowCaseSmall>
          <StyledImgSmall src={photosAarray[3]} />
          <StyledImgSmall src={photosAarray[2]} />
        </StyledCardShowCaseSmall>
      </StyledCardShowCaseLink>

      <StyledCardDescription>
        <h5>{title}</h5>
        <StyledAuthor>
          <p>
            total photos{total_photos} Curated by:{user.name}
          </p>
        </StyledAuthor>
        <StyledTags>
          <li>{tagsArray[0]}</li>
          <li>{tagsArray[1]}</li>
          <li>{tagsArray[2]}</li>
        </StyledTags>
      </StyledCardDescription>
    </StyledCard>
  );
};

export default CollectionCard;
