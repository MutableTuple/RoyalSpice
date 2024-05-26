import styled from "styled-components";
import Header from "./features/Header";
import Info from "./features/Info";
import FoodChoices from "./features/FoodChoices";
import OurFeatures from "./features/OurFeatures";
import Favourite from "./features/Favourite";
import { Toaster } from "react-hot-toast";
import DeliveryBanner from "./features/DeliveryBanner";
import Sides from "./features/Sides";
import Specialities from "./features/Specialities";

const StyledMain = styled.main``;

function App() {
  return (
    <StyledMain>
      <Toaster />
      <Header />
      <FoodChoices />
      <OurFeatures />
      <Favourite />
      <Info />
      <DeliveryBanner />
      <Sides />
      <Specialities />
    </StyledMain>
  );
}

export default App;
