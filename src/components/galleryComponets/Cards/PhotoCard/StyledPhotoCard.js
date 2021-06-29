import styled from "styled-components";

export const StyledTagList = styled.ul`
  padding: 5px;
  width: 100%;
`;
export const StyledPhotoWrapper = styled.div`
  position: relative;
  cursor: pointer;
  background: ${({ isHover }) =>
    isHover ? "rgba(0, 0, 0, 0.2)" : "transparent"};
  margin-bottom: 25px;
`;
export const StyledPhoto = styled.img`
width:100%

  }
`;

export const StyledBtn = styled.button`
  position: absolute;
  top: ${({ top }) => (top === "true" ? "10px" : "")};
  right: ${({ top }) => (top === "true" ? "10px" : "")};
  color: white;
  padding: 0px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  z-index: 1;
  margin-left: auto;
  display: ${({ isHover }) => (isHover ? "flex" : "none")};
  &:hover {
    color: red;
  }
`;

export const StyledPhotoHover = styled.div`
  position: absolute;
  display: ${({ isHover }) => (isHover ? "flex" : "none")};
  left: 0px;
  top: 0px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 99%;
  padding: 20px;
  background: ${({ isHover }) =>
    isHover ? "rgba(0, 0, 0, 0.2)" : "transparent"};
`;

export const StyledUserName = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.lightGrey};
  &:hover {
    color: white;
  }
`;
