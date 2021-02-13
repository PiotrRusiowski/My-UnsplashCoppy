import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTagList = styled.ul`
  padding: 5px;
  display: flex;
  justify-content: space-around;
`;
export const StyledPhoto = styled.img`
  cursor: pointer;
  &:hover {
  opacity:0.9;
  }
  }
`;
export const StyledTagListElemnt = styled(Link)`
  color: #767676;
  text-decoration: none;
`;

export const StyledPhotoHover = styled.div`
  position: aboslute;
  /* width: 100%;
  height: 100%; */
`;
export const StyledBtn = styled.button``;
export const StyledPhotosListElement = styled.li`
  /* border: 1px solid black; */
`;
