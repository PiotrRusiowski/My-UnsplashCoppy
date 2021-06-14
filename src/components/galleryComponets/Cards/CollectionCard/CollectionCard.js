import React from "react";
import { useDispatch } from "react-redux";
import { getSingleCollectionPhotos } from "../../../../actions";
import {
  StyledColectionCard,
  StyledCardShowCaseLink,
  StyledCardDescription,
  StyledCardShowCaseBig,
  StyledCardShowCaseSmall,
  StyledImgSmall,
  StyledLargeImg,
  StyledAuthor,
  StyledTags,
} from "./CollectionCardStyledComponents";

const CollectionCard = ({ collection, searchInputValue }) => {
  const dispatch = useDispatch();
  const { title, preview_photos, user, total_photos, tags, id } = collection;
  const photosAarray = preview_photos.map((photo) => photo.urls.regular);
  const tagsArray = tags.map((tag) => tag.title);
  return (
    <StyledColectionCard
      onClick={() => dispatch(getSingleCollectionPhotos(id))}
    >
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
    </StyledColectionCard>
  );
};

export default CollectionCard;
