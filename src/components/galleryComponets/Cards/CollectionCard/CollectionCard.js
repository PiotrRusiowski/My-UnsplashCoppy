import React from "react";
import {
  StyledCard,
  StyledCardShowCase,
  StyledCardDescription,
  StyledCardShowCaseBig,
  StyledCardShowCaseSmall,
  StyledImgSmall,
  StyledLargeImg,
} from "./CollectionCardStyledComponents";

const CollectionCard = ({ collection }) => {
  const { title, preview_photos } = collection;
  const photosAarray = preview_photos.map((photo) => photo.urls.regular);

  return (
    <StyledCard>
      <StyledCardShowCase>
        <StyledCardShowCaseBig>
          <StyledLargeImg src={photosAarray[0]} />
        </StyledCardShowCaseBig>
        <StyledCardShowCaseSmall>
          <StyledImgSmall />
          <StyledImgSmall src={photosAarray[2]} />
        </StyledCardShowCaseSmall>
      </StyledCardShowCase>
      <StyledCardDescription></StyledCardDescription>
    </StyledCard>
  );
};

export default CollectionCard;
