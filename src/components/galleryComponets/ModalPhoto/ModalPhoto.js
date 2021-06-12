import React, { useState, useContext } from "react";
import Modal from "react-modal";
import RootContext from "../../../context";
import {
  StledAuthorInfoWrapper,
  StyledAuthorProfileImg,
} from "../../../styles/globalStyledComponents";
import {
  StyledModalContent,
  StyledImg,
  StyledAuthorInfo,
  StyledLocation,
  StyledUserName,
} from "./ModalPhotoStyledComponents";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "85vw",
    height: "90vh",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

const ModalPhoto = () => {
  const context = useContext(RootContext);
  const { modalIsOpen, closeModal, modalPhoto } = context;
  const { urls, alt_description, user } = modalPhoto;
  const { name, username, location, profile_image } = user;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <StyledModalContent>
        <StyledImg src={urls.regular} alt={alt_description} />
        <StledAuthorInfoWrapper modal>
          <StyledAuthorProfileImg
            src={profile_image.small}
            alt="author profile image"
          />
          <StyledAuthorInfo>
            <p>{name}</p>
            <StyledUserName>@ {username}</StyledUserName>
          </StyledAuthorInfo>
        </StledAuthorInfoWrapper>
        <StyledLocation>{location}</StyledLocation>
      </StyledModalContent>
    </Modal>
  );
};

export default ModalPhoto;
