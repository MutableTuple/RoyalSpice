import styled from "styled-components";

import { IoCall } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const InfoHeader = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  font-family: "Rubik", sans-serif;
  display: flex;
  align-items: center;
  padding: 25px;
  overflow: hidden;
  gap: 10px;
`;
const ActionButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
`;

const ActionButtonWide = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 80px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
`;
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
`;

const Info = () => {
  return (
    <InfoHeader>
      <ActionButton>{<IoCall color="red" />}</ActionButton>
      <ActionButtonWide>
        <StyledUl>
          <li>
            <BsCartFill />
          </li>
          <li>
            <FaUser />
          </li>
          <li>
            <FaSearch />
          </li>
        </StyledUl>
      </ActionButtonWide>
    </InfoHeader>
  );
};

export default Info;
