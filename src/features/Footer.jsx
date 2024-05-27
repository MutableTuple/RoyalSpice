import React from "react";
import styled from "styled-components";
import { CiTimer } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline, IoCardSharp } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const StyledFooter = styled.footer`
  height: 450px;
  max-width: 100%;
  display: grid;
  padding: 0 50px;
  background-color: #2a2a2a;
  align-items: center;
  justify-items: center;
  color: #fff;
  grid-template-columns: repeat(4, 1fr);
  z-index: -20;
`;

const StyledFooterElements = styled.div`
  z-index: 21;
  ul {
    list-style: none;
    line-height: 30px;
    font-weight: 300;
    cursor: pointer;
    li {
      transition: 0.25s all;
      &:hover {
        transform: translateX(5px);
      }
    }
  }
`;

const Social = styled.div`
  background: #222222;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }
`;
const StyledH3 = styled.h3`
  color: #fff;
  margin-bottom: 20px;
`;
const SocialIcons = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 200;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledFooterElements>
          <StyledH3>General</StyledH3>
          <ul>
            <li>Home</li>
            <li>Order online</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </StyledFooterElements>
        <StyledFooterElements>
          <StyledH3>Categories</StyledH3>
          <ul>
            <li>Non-Veg</li>
            <li>Veg</li>
            <li>Sides</li>
            <li>Drinks</li>
            <li>Desserts</li>
          </ul>
        </StyledFooterElements>
        <StyledFooterElements>
          <StyledH3>Conatct</StyledH3>
          <ul>
            <li>
              <CiTimer /> Din - Zon: 1600 - 200
            </li>
            <li>
              {" "}
              <CiLocationOn /> Heusden
            </li>
            <li>
              {" "}
              <IoCallOutline /> 0416 851 891
            </li>
            <li>
              {" "}
              <FaFax /> KvK: 75847124
            </li>
            <li>
              {" "}
              <MdOutlineAttachEmail /> info@royalspice.nl
            </li>
          </ul>
        </StyledFooterElements>
        <StyledFooterElements>
          <StyledH3>Payment Methods</StyledH3>
          <ul>
            <h1>
              <IoCardSharp />
            </h1>
          </ul>
        </StyledFooterElements>
      </StyledFooter>

      <Social>
        <SocialIcons>
          <FaFacebookF color={"#ddd"} size={"24px"} />
          <FaInstagram color={"#ddd"} size={"24px"} />
        </SocialIcons>
        <div>
          www.royalspice.nl by Team Royal Spice | © 2024 All rights reserved!
        </div>
      </Social>
    </>
  );
};

export default Footer;
