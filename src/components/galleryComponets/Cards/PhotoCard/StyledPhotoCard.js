import styled from "styled-components";

export const StyledTagList = styled.ul`
  padding: 5px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const StyledPhoto = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  z-index:-3;
  }
`;

export const StyledPhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  background: ${({ isHover }) =>
    isHover ? "rgba(0, 0, 0, 0.2)" : "transparent"};
`;
export const StyledBtn = styled.button`
  position: absolute;
  color: white;
  padding: 0px;
  border: none;
  background-color: transparent;
  z-index: 4;
  font-size: 20px;
  margin-left: auto;
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
  align-items: space-between;
  width: 100%;
  height: 99%;
  padding: 20px;
  z-index: 0;
`;
export const StyledBtnGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width === "true" ? "100%" : "70px")};
  margin-left: auto;
  justify-content: space-between;
`;
export const StyledUserName = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.lightGrey};
  &:hover {
    color: white;
  }
`;
