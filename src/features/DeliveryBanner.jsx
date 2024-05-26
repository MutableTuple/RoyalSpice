import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  max-width: 100%;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 650px;
  background: #fdfaed;
  padding: 0px 60px;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    h2 {
      font-size: 44px;
    }
    h5 {
      font-size: 21px;
      color: #252525;
    }
    img {
      width: 420.65px;
      height: auto;
    }
    &:last-child {
      display: flex;
      text-align: end;
      align-items: end;
    }
  }
`;
const OrderNowButton = styled.div`
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
  width: fit-content;
  padding: 15px 30px;
  border-radius: 90px;
  background-color: #ffca3c;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #ffc116;
  }
`;

const DeliveryBanner = () => {
  return (
    <Banner>
      <div>
        <h2>We deliver to the following regions:</h2>
        <h5>Heusden, Drunen, Waalwijk, ‘s-Hertogenbosch and Vlijmen</h5>
        <OrderNowButton>Order Now</OrderNowButton>
      </div>
      <div>
        <img
          src="https://royalspice.nl/wp-content/uploads/2021/12/scooter.png"
          alt=""
        />
      </div>
      <div>
        <h2>Free Delivery</h2>
        <h5>
          On orders from €40,- and above. For the region ‘s-Hertogenbosch from
          €50,- and above.
        </h5>
        <OrderNowButton>Order Quickly Online</OrderNowButton>
      </div>
    </Banner>
  );
};

export default DeliveryBanner;
