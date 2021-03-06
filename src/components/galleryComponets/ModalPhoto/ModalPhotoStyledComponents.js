import styled from "styled-components";

export const StyledImg = styled.img`
  max-height: 100%;
  position: relative;
  z-index: 200;
`;
export const StyledModalContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 15px;
`;

export const StyledAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledAuthorName = styled.h4``;
export const StyledUserName = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.lightGrey};
`;
export const StyledLocation = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
`;
