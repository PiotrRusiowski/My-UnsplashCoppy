import React, { useContext } from "react";
import RootContext from "../../../../context";
import CollectionCard from "../../Cards/CollectionCard/CollectionCard";
import {
  Container,
  StyledList,
} from "../../../../styles/globalStyledComponents";
import UserCard from "../../Cards/UserCard/UserCard";
import Masonry from "react-masonry-css";
import "../PhotosList/masonry.css";

import UserInfoCard from "../../Cards/UserCard/UserInfoCard/UserInfoCard";

const CollectionsAndUsersList = ({ list, isUserList }) => {
  const context = useContext(RootContext);
  const {
    getCollectionsPhotos,
    showSearchValue,
    getSingleUserPhotos,
    findSingleUser,
  } = context;
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
                  searchInputValue={showSearchValue}
                />
              )}
            </>
          ))}
        </Masonry>
      </StyledList>
    </>
  );
};

export default CollectionsAndUsersList;
