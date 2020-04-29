import React from "react";
import styled from "styled-components";

import myPic from "../assets/dummyGuitar.jpg";
import Styles from "../assets/Styles";

let x = 1;

export default function AuctionCard() {
  return (
    <StyledCard className="AuctionCard">
      <h2>Guitar #{x++}</h2>
      <div>
        <img src={myPic} alt="alt" />
      </div>
      <div className="time">
        Time Remaining:
        <br />
        3:47:25
      </div>
      <p>BUTTONS</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  min-width: 200px;
  width: 23%;
  margin: 10px;
  background-color: white;
  padding: 10px 20px 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 15px;
  box-shadow: 0 5px 5px #666;

  h2 {
    text-align: center;
    font-size: ${Styles.font.size.medLarge};
    color: ${Styles.color.mainLight};
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 10px;
  }
  .time {
    text-align: center;
    font-size: ${Styles.font.size.medSmall};
    color: red;
  }
  p {
    font-size: ${Styles.font.size.small};
    text-align: right;
  }
`;
