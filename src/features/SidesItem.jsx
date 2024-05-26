import React from "react";
import styled from "styled-components";
import { PiShoppingBagOpenLight } from "react-icons/pi";
const StyledSideItems = styled.div`
  padding: 20px;
  width: 600px;
  display: grid;
  grid-template-columns: 160px 1fr;
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
`;

const StyledH3 = styled.h3`
  font-size: 20px;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h6 {
    font-size: 16px;
    text-align: start;
    font-weight: 400;
    font-style: italic;
    color: #838383;
  }
`;

const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;

  span {
    font-weight: 600;
  }
`;

const ShopButton = styled.div`
  padding: 10px 15px;
  background: #ffca3c;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #f4b300;
  }
`;

const SidesItem = ({ image, name, price, description }) => {
  return (
    <StyledSideItems>
      <img src={image} alt={name} />
      <StyledInfo>
        <StyledH3>{name}</StyledH3>
        <h6>{description}</h6>
        <StyledPrice>
          <span>€ {price}</span>
          <ShopButton>
            <PiShoppingBagOpenLight /> Add to Cart
          </ShopButton>
        </StyledPrice>
      </StyledInfo>
    </StyledSideItems>
  );
};

export default SidesItem;
