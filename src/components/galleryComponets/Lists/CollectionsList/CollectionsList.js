import React, { useContext } from "react";
import RootContext from "../../../../context";
import CollectionCard from "../../Cards/CollectionCard/CollectionCard";
import {
  Container,
  StyledList,
} from "../../../../styles/globalStyledComponents";

const CollectionsList = () => {
  const context = useContext(RootContext);
  const { collectionsList } = context;

  return (
    <>
      <Container xl>
        <StyledList>
          {collectionsList.map((collection) => (
            <CollectionCard collection={collection} />
          ))}
        </StyledList>
      </Container>
    </>
  );
};

export default CollectionsList;
