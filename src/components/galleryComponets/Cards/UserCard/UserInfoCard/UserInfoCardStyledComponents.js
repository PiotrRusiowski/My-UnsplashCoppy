import styled from "styled-components";
export const StyledUserInfoCard = styled.div`
  display: flex;
  margin: 65px 0px;
  height: 140px;
`;
export const StyledAuthorInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 45px;
`;
export const StyledAuthorName = styled.h1`
  font-size: 40px;
`;
export const StyledAuthorContact = styled.a`
  margin-left: -4px;
  padding-top: 4px;
  color: ${({ theme }) => theme.darkGrey};
  display: flex;
  align-items: center;
  margin-right: auto;
  &:hover {
    color: black;
    transition: 0.2s;
  }
`;

export const StyledAuthorLinkContent = styled.p`
  margin-left: 5px;
`;
