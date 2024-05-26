import React from "react";
import styled from "styled-components";

const StyledSpecialtiesItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 340px;
  gap: 10px;
`;

const SpecialtiesItem = ({ icon, name, desc }) => {
  return (
    <StyledSpecialtiesItem>
      {/* <img src={icon} alt="icon" /> */}
      <h1>X</h1>
      <h2>{name}</h2>
      <p>{desc}</p>
    </StyledSpecialtiesItem>
  );
};

export default SpecialtiesItem;
