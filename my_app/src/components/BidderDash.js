import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import AuctionCard from "./AuctionCard";
import DisplayCard from "./DisplayCard";
import Styles from "../assets/Styles";

export default function BidderDash(props) {
  return (
    <StyledDash>
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <Route path="/dashboard/">
        <DisplayCard />
      </Route>
    </StyledDash>
  );
}

const StyledDash = styled.div`
  padding: 20px 2%;
  display: flex;
  flex-flow: row wrap;
`;
