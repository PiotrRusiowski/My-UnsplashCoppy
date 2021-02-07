import React, { useState, useContext } from "react";
import Modal from "react-modal";
import RootContext from "../../context";
import styled from "styled-components";
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
const StyledImg = styled.img`
  max-height: 100%;
`;
const StyledModalContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 15px;
`;
const StledAuthorInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
`;
const StyledAuthorProfileImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
const StyledAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledAuthorName = styled.h4``;
const StyledUserName = styled.p`
  font-size: 11px;
  color: #767676;
`;
const StyledLocation = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const ModalPhoto = () => {
  const context = useContext(RootContext);
  const { modalIsOpen, closeModal, singlePhoto } = context;
  const { urls, alt_description, user } = singlePhoto;
  const { name, username, location, profile_image } = user;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <StyledModalContent>
        <StyledImg src={urls.regular} alt={alt_description} />
        <StledAuthorInfoWrapper>
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
