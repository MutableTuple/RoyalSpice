import styled from "styled-components";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const StyledFoodCard = styled.div`
  width: 272.038px;
  img {
    width: 240.438px;
    height: 240.438px;
    border-radius: 10px;
  }
  h6 {
    font-size: 17px;
    font-weight: 500;
  }
  #desc {
    font-size: 14px;
    line-height: 22.75px;
    text-align: center;
    color: #888888;
  }
`;
const SytledAddToCart = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  padding: 15px 30px;
  margin: 0 25px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s all;
  border-radius: 5px;
  &:hover {
    background: #ffca3c;
  }
`;

const FoodCard = ({ name, description, image, ingredients, price, Foods }) => {
  return (
    <StyledFoodCard>
      <img src={image} alt={name} />
      <h6>{name}</h6>
      <p id="desc">{description}</p>

      <SytledAddToCart
        onClick={() => {
          const rnd = Math.round(Math.random(1));
          if (rnd === 1) toast.success(`Item Succesfully added to cart 😋`);
          else toast.error(`Item out of stock 🥹`);
        }}
      >
        <PiShoppingBagOpenLight size={"20px"} /> Add to cart
      </SytledAddToCart>
    </StyledFoodCard>
  );
};

export default FoodCard;
