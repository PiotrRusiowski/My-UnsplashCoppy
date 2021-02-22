import React, { useContext } from "react";
import RootContext from "../../../../context";

import {
  Container,
  StyledList,
} from "../../../../styles/globalStyledComponents";

const LikesList = () => {
  const context = useContext(RootContext);
  const { likePhotosList, removeFromLikesPhotos } = context;

  return (
    <Container xl>
      <StyledList>
        {likePhotosList.map(({ urls, id }) => (
          <li>
            {" "}
            <img src={urls.small}></img>
            <button onClick={() => removeFromLikesPhotos(id)}>remove</button>
          </li>
        ))}
      </StyledList>
    </Container>
  );
};

export default LikesList;
