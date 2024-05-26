import { styled } from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  background: #222222;
  height: 60px;
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  z-index: 1;
  &:hover {
  }
`;
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
  height: 100%;
  cursor: pointer;
  z-index: 10;
`;

const StyledCircle = styled.div`
  height: 100px;
  width: 100px;
  background: #ffca3c;
  color: #222;
  border-radius: 50%;
  z-index: -7;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all cubic-bezier(0.165, 0.84, 0.44, 1);
  margin: 0 25px;
  &:hover {
    height: 200px;
    width: 200px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledUl>
        <li>HOME</li>
        <li id="thead_">ABOUT ROYAL SPICE</li>
        <StyledCircle>RoyalSpice</StyledCircle>
        <li>QUICK ORDERING</li>
        <li>CONTACT US</li>
      </StyledUl>
    </StyledHeader>
  );
};

export default Header;
