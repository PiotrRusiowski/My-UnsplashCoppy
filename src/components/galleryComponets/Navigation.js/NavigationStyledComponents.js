import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.div`
  box-shadow: inset 0px -2px 0px 0px #d1d1d1;

  width: 100%;
  height: 54px;
`;
export const StyledNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -32px;
  height: 100%;
  @media (max-width: 320px) {
    justify-content: space-between;
  }
`;
export const StyledNavigationElement = styled.li`
  padding-left: 32px;
  display: flex;
  align-items: center;
  height: 100%;
`;
export const StyledNavigationLink = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  /* padding: 5px; */
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.darkGrey};
  transition: 0.2s;
  &:hover {
    box-shadow: inset 0 -2px #111;
    color: black;
  }
`;
export const StyledIcon = styled.div`
  display: flex;
  margin-right: 7px;
  font-size: 16px;
  @media (max-width: 426px) {
    display: none;
  }
`;
