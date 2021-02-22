import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTagList = styled.ul`
  padding: 5px;
  display: flex;
  justify-content: space-around;
`;
export const StyledPhoto = styled.img`
  position: relative;
  height: 100%;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const StyledPhotoWrapper = styled.div`
  position: relative;
`;
export const StyledBtn = styled.button`
  z-index: 4;
`;
export const StyledPhotosListElement = styled.li`
  margin-bottom: 10px;
`;
export const StyledPhotoHover = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;
  /* &:hover {
    background: rgba(0, 0, 0, 0.2);
  } */
  display: ${({ isHover }) => (isHover ? "block" : "none")};
  /* display: ${({ modalIsOpen }) => (modalIsOpen ? "none" : "block")}; */
`;
export const StyledBtnGroup1 = styled.div`
  display: flex;
  width: 70px;
  height: 40px;
  margin-left: auto;
  /* display: ${({ modalIsOpen }) => (!modalIsOpen ? "none" : "block")}; */
`;
