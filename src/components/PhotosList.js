import React from "react";
// import { connect } from "react-redux";

const PhotosList = ({ photosList }) => {
  return (
    <>
      <ul>
        {photosList.map((photo) => (
          <li>
            <h3>{photo.alt_description}</h3>
            <img src={photo.urls.small} />
          </li>
        ))}
      </ul>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   photosList: state.photosList,
// });
// export default connect(mapStateToProps)(PhotosList);
export default PhotosList;
