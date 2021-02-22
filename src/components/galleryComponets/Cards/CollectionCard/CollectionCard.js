import React from "react";
import {
  StyledCard,
  StyledCardShowCase,
  StyledCardDescription,
  StyledCardShowCaseBig,
  StyledCardShowCaseSmall,
  StyledImgSmall,
  StyledLargeImg,
  StyledAuthor,
  StyledTags,
  StyledImgSmallDiv,
} from "./CollectionCardStyledComponents";

const CollectionCard = ({ collection }) => {
  const { title, preview_photos, user, total_photos, tags } = collection;
  const photosAarray = preview_photos.map((photo) => photo.urls.regular);
  const tagsArray = tags.map((tag) => tag.title);
  return (
    <StyledCard>
      <StyledCardShowCase>
        <StyledCardShowCaseBig>
          <StyledLargeImg src={photosAarray[0]} />
        </StyledCardShowCaseBig>
        <StyledCardShowCaseSmall>
          {" "}
          <StyledImgSmall src={photosAarray[3]} />
          <StyledImgSmall src={photosAarray[2]} />
        </StyledCardShowCaseSmall>
      </StyledCardShowCase>
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
