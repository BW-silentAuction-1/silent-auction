import React from "react";
import styled from "styled-components";

import Styles from "../assets/Styles";
import dummyAd from "../assets/dummyAd";

export default function ItemCard(props) {
  return (
    <StyledCard>
      <h2>{dummyAd.name}</h2>
      <img src={dummyAd.src} alt="x" />
      <p>Time Left: {dummyAd.time}</p>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 30%;
  padding: 10px;
  margin: 10px;
  background-color: #FFF;
  box-shadow: 0 0 5px 1px #000;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  h2 {
    font-size: ${Styles.font.size.medSmall};
  }
  img {
    width: 90%;
  }
  p {
    font-size: ${Styles.font.size.small};
    color: ${Styles.color.red};
  }
`;