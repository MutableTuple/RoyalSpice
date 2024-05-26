import styled from "styled-components";
import FoodCard from "./FoodCard";

const Foods = [
  {
    name: "Butter Chicken",
    image:
      "https://royalspice.nl/wp-content/uploads/2021/12/Butter-chicken-2-1-300x300.png",
    description: `Butter Chicken is een mix van gemarineerde kip in een romige tomatensaus
      en Indiase kruiden! De Butter Chicken is het mildste gerecht van ons
      menu!`,
    ingredients: "Butter, Chicken, Spices",
  },
  {
    name: "Cocktail Samosa (5 St.)",
    image:
      "https://royalspice.nl/wp-content/uploads/2024/01/Cocktail-Samosa-300x300.jpg",
    description: `Cocktail samosa is een kleine, knapperige Indiase snack, gevuld met gekruide aardappelen en groenten, perfect voor feestjes en wordt geserveerd met chutney. (5 st.)`,
    ingredients: "Whole wheat, potato, Spices",
  },
  {
    name: "Chicken Tikka Masala",
    image:
      "https://royalspice.nl/wp-content/uploads/2021/11/chicken-tikka-masala-2023-11-27-05-32-29-utc-300x300.jpg",
    description: `Onze bestseller! Chicken Tikka Masala is een curry van gemarineerde stukjes kipfilet in romige tomatensaus met garam masala, komijn, koriander en wordt geserveerd met rijst.

    Onze bestseller! Gegrilde kip in romige tomaten-botersaus vol met smaakvolle kruiden.`,
    ingredients: "Whole wheat, potato, Spices",
  },
  {
    name: "Prawn Jalfrezi",
    image:
      "https://royalspice.nl/wp-content/uploads/2021/11/Prawn-Jalfrezi-300x300.webp",
    description: `Prawn Jalfrezi is een heerlijk Indiaas gerecht met garnalen, bereid in een pittige tomatensaus met paprika, uien en diverse kruiden.`,
    ingredients: "Whole wheat, potato, Spices",
  },
  {
    name: "Cocktail Samosa (5 St.)",
    image:
      "https://royalspice.nl/wp-content/uploads/2022/03/Bhindi.curry-png-300x300.webp",
    description: `Kruidige okra, gestoofd in aromatische currysaus, geserveerd met rijst. Ook lekker met Naanbrood.`,
    ingredients: "Whole wheat, potato, Spices",
  },
];

//
const FavouriteRS = styled.div`
  font-family: "Rubik", sans-serif;
  margin: 120px 35px;
  text-align: center;
  font-size: 44px;
  p {
    font-size: 19px;
    margin-top: 5px;
  }
`;
const SeeMoreButton = styled.div`
  text-transform: uppercase;
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

const FoodCardContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Favourite = ({ name, description, image, ingredients, price }) => {
  return (
    <FavouriteRS>
      <h2>ROYAL SPICE FAVORITES</h2>
      <p>A collection of some of Royal Spice’s all time favorites!</p>
      <p>All main dishes are served with FREE yellow rice.</p>
      <FoodCardContainer>
        {Foods.map((food) => (
          <FoodCard
            key={food.name}
            Foods={Foods}
            name={food.name}
            description={food.description.slice(0, 100)}
            image={food.image}
            ingredients={food.ingredients}
          />
        ))}
      </FoodCardContainer>
      <SeeMoreButton>See All main dishes</SeeMoreButton>
    </FavouriteRS>
  );
};

export default Favourite;
