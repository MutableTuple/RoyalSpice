import React from "react";
import styled from "styled-components";
import SpecialtiesItem from "./SpecialtiesItem";

const SPECS = [
  {
    icon: "",
    name: "Hygiene",
    desc: `We do everything to carry out our preparations hygienically. We use
      gloves and hair nets throughout the process.`,
  },
  {
    icon: "",
    name: "Original Recipes",
    desc: `Enjoy delicious, authentic and original recipes at Royal Spice. Our secret ingredient? Lots of love!`,
  },
  {
    icon: "",
    name: "Delivery",
    desc: `We try to deliver freshly prepared food as quickly as possible. Our average delivery time is 45-55 minutes`,
  },
  {
    icon: "",
    name: "Take Away",
    desc: `We only deliver so you don’t have to worry about a thing! Just sit back, relax and enjoy the authentic tastes of India`,
  },
];
const StyledSpecialties = styled.div`
  height: 400px;
  width: 100%;
  background: #fdfaed;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
`;

const Specialities = ({ icon, name, desc }) => {
  return (
    <StyledSpecialties>
      {SPECS.map((spec) => (
        <SpecialtiesItem icon={spec.icon} name={spec.name} desc={spec.desc} />
      ))}
    </StyledSpecialties>
  );
};

export default Specialities;
