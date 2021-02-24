import React, { useContext } from "react";
import RootContext from "../../../../context";
import CollectionCard from "../../Cards/CollectionCard/CollectionCard";
import {
  Container,
  StyledList,
} from "../../../../styles/globalStyledComponents";
import UserCard from "../../Cards/UserCard/UserCard";
import UserInfoCard from "../../Cards/UserCard/UserInfoCard/UserInfoCard";

const CollectionsAndUsersList = ({ list, isUserList }) => {
  const context = useContext(RootContext);
  const {
    getCollectionsPhotos,
    searchInputValue,
    getSingleUserPhotos,
    findSingleUser,
  } = context;

  return (
    <>
      <Container xl>
        <StyledList>
          {list.map((item) => (
            <>
              {isUserList ? (
                <>
                  <UserCard
                    singleUser={item}
                    getSingleUserPhotos={getSingleUserPhotos}
                    findSingleUser={findSingleUser}
                  />
                </>
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

export default CollectionsAndUsersList;
