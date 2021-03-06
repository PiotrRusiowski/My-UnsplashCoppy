import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTagList = styled.ul`
  padding: 5px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const StyledPhoto = styled.img`
  position: relative;
  height: 100%;
  cursor: pointer;
  /* 
  &:hover {
    &:after {
      content: "\A";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
      opacity: 0;
      transition: all 1s;
      -webkit-transition: all 1s;
    }
    opacity: 1;
  } */
`;

export const StyledPhotoWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const StyledBtn = styled.button`
  /* color: #d1d1d1; */
  color: white;
  padding: 0px;
  border: none;

  /* border: 1px solid black; */
  background-color: transparent;
  z-index: 4;
  font-size: 20px;
  &:hover {
    color: red;
  }
`;
export const StyledPhotosListElement = styled.li`
  margin-bottom: 10px;
  width: 100px;
  display: flex;
`;
export const StyledPhotoHover = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;

  height: 99.5%;
  padding: 20px;
  /* z-index: 999; */

  display: ${({ isHover }) => (isHover ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.2);
`;
export const StyledBtnGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width ? "100%" : "70px")};
  margin-left: auto;
  justify-content: space-between;
`;
export const StyledUserName = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.lightGrey};
  &:hover {
    color: white;
  }
`;
