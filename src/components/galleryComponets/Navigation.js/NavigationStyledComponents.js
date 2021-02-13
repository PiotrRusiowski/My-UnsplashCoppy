import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavigation = styled.div`
  display: flex;
`;
export const StyledNavigationLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  padding: 5px;
  color: black;
`;
