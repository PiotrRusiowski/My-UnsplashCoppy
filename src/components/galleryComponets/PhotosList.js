import React, { useContext } from "react";
import RootContext from "../../context";
import styled from "styled-components";
import { Container } from "../../globalStyledComponents";
// import { connect } from "react-redux";

const StyledPhotosList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const PhotosList = () => {
  const context = useContext(RootContext);
  const { photosList } = context;
  return (
    <>
      <Container xl>
        <StyledPhotosList>
          {photosList.map(({ alt_description, urls, tags }) => (
            <li>
              <img src={urls.small} alt={alt_description} />
              <ul>{/* {tags.map((tag) => )} */}</ul>
            </li>
          ))}
        </StyledPhotosList>
      </Container>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   photosList: state.photosList,
// });
// export default connect(mapStateToProps)(PhotosList);
export default PhotosList;
