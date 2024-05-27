import React from "react";
import styled from "styled-components";
import { BiDish } from "react-icons/bi";
import { IoStarSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const StyledReview = styled.div`
  height: 219px;
  max-width: 100%;
  background-color: #ffca3c;
  display: flex;
  align-items: center;
  padding: 0 200px;
  display: grid;
  grid-template-columns: 30% 70%;
  justify-content: center;
  gap: 20px;
  div {
    height: 150px;
  }
`;
const WriteAReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  p {
    color: #343434;
    a {
      text-decoration: none;
    }
  }
`;

const ReviewContainer = styled.div`
  height: 219px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  background: #fff;
  border-radius: 20px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  gap: 10px;
  div {
    height: fit-content;
  }
`;

const ReviewUs = () => {
  return (
    <StyledReview>
      <ReviewContainer>
        <div>
          <FcGoogle size={"55px"} />
        </div>
        <div>
          <IoStarSharp size={"30px"} color={"#F9CF12"} />
          <IoStarSharp size={"30px"} color={"#F9CF12"} />
          <IoStarSharp size={"30px"} color={"#F9CF12"} />
          <IoStarSharp size={"30px"} color={"#F9CF12"} />
          <IoStarSharp size={"30px"} color={"#F9CF12"} />
          <h2>4.9</h2>
        </div>
      </ReviewContainer>
      <WriteAReview>
        <h1>Love Royal Spice?</h1>
        <p>
          Click{" "}
          <a
            href="https://www.google.com/maps/place/Royal+Spice/@51.7245015,5.1396679,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6936b97537491:0xb7dac90f2713b419!8m2!3d51.7245015!4d5.1396679!16s%2Fg%2F11h_v9pqxs?entry=ttu"
            target="_blank"
          >
            here
          </a>
          to place a Google review.
        </p>
      </WriteAReview>
    </StyledReview>
  );
};

export default ReviewUs;
