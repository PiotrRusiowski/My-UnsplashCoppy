import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledUserCard = styled(Link)`
  text-decoration: none;

  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: 0.2s;
  &:hover {
    border: 1px solid #767676;
  }
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const StyledShowCase = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;
export const StyledFollowBtn = styled.button`
  height: 34px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 15px;
  &:hover {
    border: 1px solid #767676;
  }
`;
export const StyledImg = styled.img`
  height: 100px;
  width: 32%;
`;
