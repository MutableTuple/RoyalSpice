import React from "react";
import styled from "styled-components";
import SidesItem from "./SidesItem";

const StyledSidesCon = styled.div`
  margin: 100px 80px;
  h2 {
    font-size: 44px;
    text-transform: uppercase;
    text-align: center;
  }
  p {
    font-size: 19px;
    text-align: center;
  }
`;

const StyledSidesMenu = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

const SeeMoreButton = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  margin: 100px auto;
  width: 190.85px;
  line-height: 44px;
  padding: 8px 16px;
  background-color: #333;
  border-radius: 90px;
  color: #fff;
  cursor: pointer;
`;
const SIDES = [
  {
    image:
      "https://royalspice.nl/wp-content/uploads/2021/11/Vegetarische-samosas-300x300.webp",
    name: "Vegetarian Samosas (2 Stuks)",
    description:
      "Een vegetarische samosa is een knapperige, driehoekige snack met een vulling van gekruide aardappelen, erwten. Wordt geserveerd met Tamarinde chutney (per 2 stuks).",
    price: "3.95",
  },
  {
    image:
      "https://royalspice.nl/wp-content/uploads/2021/11/garlic-Naan-300x300.webp",
    name: "Garlic Naan",
    description:
      "Een luchtig platbrood met een heerlijke smaak van knoflook. Heerlijk bij iedere curry!",
    price: "2.00",
  },
  {
    image:
      "https://royalspice.nl/wp-content/uploads/2021/11/Mixed-Vegetable-Paratha-300x300.webp",
    name: "Mixed Vegetable Paratha",
    description:
      "Mixed vegetable paratha is een Indiaas platbrood gevuld met een mengsel van groenten en kruiden, gebakken tot goudbruin en knapperig.",
    price: "3.95",
  },
  {
    image:
      "https://royalspice.nl/wp-content/uploads/2021/11/Aloo-Tikki-300x300.webp",
    name: "Aloo Tikki (4st.)",
    description:
      "Aloo Tikki zijn knapperige aardappelkoekjes, gekruid met specerijen. Wordt geserveerd met tamarinde chutneys (per 4 stuks).",
    price: "4.95",
  },
];

const Sides = () => {
  return (
    <StyledSidesCon>
      <h2>Great sides</h2>
      <p>For every main dish, there is a perfect side.</p>
      <StyledSidesMenu>
        {SIDES.map((side) => (
          <SidesItem
            image={side.image}
            name={side.name}
            price={side.price}
            description={side.description}
          />
        ))}
      </StyledSidesMenu>

      <SeeMoreButton>See All sides</SeeMoreButton>
    </StyledSidesCon>
  );
};

export default Sides;
