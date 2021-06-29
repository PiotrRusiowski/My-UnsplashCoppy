import React, { useContext } from "react";
import RootContext from "../../../../context";
import CollectionCard from "../../Cards/CollectionCard/CollectionCard";
import { StyledList } from "../../../../styles/globalStyledComponents";
import UserCard from "../../Cards/UserCard/UserCard";
import Masonry from "react-masonry-css";
import "../PhotosList/masonry.css";

const CollectionsAndUsersList = ({ list, isUserList }) => {
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
                <UserCard singleUser={item} />
              ) : (
                <CollectionCard collection={item} />
              )}
            </>
          ))}
        </Masonry>
      </StyledList>
    </>
  );
};

export default CollectionsAndUsersList;
