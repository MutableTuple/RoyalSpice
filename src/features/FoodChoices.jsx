import { useState } from "react";
import styled from "styled-components";
import css from "styled-components";

const types = {
  active: css`
    background-color: #ffca3c;
    border: 1px solid inherit;
  `,
};

const StyledFC = styled.div`
  max-width: 100%;
  height: 90dvh;
  font-family: Rubik, sans-serif;
  padding: 25px;
`;

const FoodMenu = styled.div`
  max-width: 100%;
  height: 80%;
  font-family: Rubik, sans-serif;
  padding: 25px;
  border: 1px solid crimson;
  display: flex;
  align-items: end;
  justify-content: end;
`;

const Button = styled.div`
  width: auto;
  padding: 7.25px 10px;
  border-radius: 90px;
  text-transform: uppercase;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: 0.25s all;
  ${(props) => types[props.type]};

  Button.defaultProps = {
    type: "active";
  }

  &:hover {
    background: #ffca3c;
    border: 1px solid inherit;
    color: #444444;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const FoodChoices = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <StyledFC>
      <FoodMenu>
        <ButtonContainer>
          <Button
            onClick={() => {
              setIsClicked(!isClicked);
              console.log(isClicked);
            }}
          >
            {isClicked ? "View All Dishes" : "All Dishes"}
          </Button>
          <Button>Veg</Button>
          <Button>Non Veg</Button>
          <Button>Sides</Button>
          <Button>Drinks</Button>
          <Button>Desert</Button>
        </ButtonContainer>
      </FoodMenu>
    </StyledFC>
  );
};

export default FoodChoices;
