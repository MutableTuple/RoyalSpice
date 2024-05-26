import React from "react";
import styled from "styled-components";

const StyledFeatures = styled.div`
  max-width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  margin: 0 75px;
`;

const StyledImages = styled.img`
  width: 185.788px;
  height: 185.788px;
  object-fit: cover;
`;

const FoodCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FoodCaption = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: bold;
`;

const OurFeatures = () => {
  return (
    <StyledFeatures>
      <FoodCard>
        <StyledImages
          src="https://mutabletuple.github.io/StoredImages/Food-All-dishes.png"
          alt="All Dishes"
        />
        <FoodCaption>All Dishes</FoodCaption>
      </FoodCard>
      <FoodCard>
        <StyledImages
          src="https://mutabletuple.github.io/StoredImages/Food-GlutenFree.png"
          alt="Gluten Free"
        />
        <FoodCaption>Gluten Free</FoodCaption>
      </FoodCard>
      <FoodCard>
        <StyledImages
          src="https://mutabletuple.github.io/StoredImages/Food-Lactosefree.png"
          alt="Lactose Free"
        />
        <FoodCaption>Lactose Free</FoodCaption>
      </FoodCard>
      <FoodCard>
        <StyledImages
          src="https://mutabletuple.github.io/StoredImages/Food-Non-Veg.png"
          alt="Non Veg"
        />
        <FoodCaption>Non Veg</FoodCaption>
      </FoodCard>
      <FoodCard>
        <StyledImages
          src="https://mutabletuple.github.io/StoredImages/Food-Veg.png"
          alt="veg"
        />
        <FoodCaption>veg</FoodCaption>
      </FoodCard>
      <FoodCard>
        <StyledImages
          src="https://mutabletuple.github.io/StoredImages/Food-Vegan.png"
          alt="vegan"
        />
        <FoodCaption>vegan</FoodCaption>
      </FoodCard>
    </StyledFeatures>
  );
};

export default OurFeatures;
