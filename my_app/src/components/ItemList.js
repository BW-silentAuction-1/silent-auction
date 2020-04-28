import React from "react";
import styled from "styled-components";

import Styles from "../assets/Styles";

import ItemCard from "./ItemCard";

export default function ItemList(props) {
  return (
    <StyledList>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </StyledList>
  );
}

const StyledList = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
`;
