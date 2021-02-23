import React, { useContext } from "react";
import RootContext from "../../../../context";
import CollectionCard from "../../Cards/CollectionCard/CollectionCard";

import {
  Container,
  StyledList,
} from "../../../../styles/globalStyledComponents";
import UserCard from "../../Cards/UserCard/UserCard";

const CollectionsList = ({ list, user }) => {
  const context = useContext(RootContext);
  const { getCollectionsPhotos, searchInputValue } = context;

  return (
    <>
      <Container xl>
        <StyledList>
          {list.map((item) => (
            <>
              {user ? (
                <UserCard user={item} />
              ) : (
                <CollectionCard
                  collection={item}
                  getCollectionsPhotos={getCollectionsPhotos}
                  searchInputValue={searchInputValue}
                />
              )}
            </>
          ))}
        </StyledList>
      </Container>
    </>
  );
};

export default CollectionsList;
