import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AuctionCard } from "./AuctionCard";
import { fetchAuction } from "../actions";
import styled from "styled-components";

function AuctionList(props) {
  console.log(`AuctionList`, props);
  useEffect(() => {
    props.fetchAuction();
  }, [props.fetchAgain, props.isUpdating, props.isDeleting]);

  console.log("props.auctions: ", props.auctions);
  if (props.auctions) {
    console.log("test 1");
    return (
      <StyledList className="auctionListContainer">
        {props.auctions.map((auction) => {
          console.log("Date parse: ", Date.parse(auction.date_ending));
          console.log("Date now: ", Date.now());
          if (Date.parse(auction.date_ending) > Date.now()) {
            console.log("auction from line 15 auction list", auction);
            //need to add key

            return (
                <AuctionCard key={auction.id} auction={auction} expired={false} />
            );
          } else {
            return <AuctionCard key={auction.id} auction={auction} expired={true} />;
          }
        })}
      </StyledList>
    );
  } else {
    console.log("asdfsd");
    return <></>;
  }
}

const StyledList = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  
  align-content: flex-start;
`;

export default connect(
  (state) => {
    const auctions =
      state.crudReducer && state.crudReducer.auctions
        ? state.crudReducer.auctions
        : [];
    return {
      auctions: auctions,
      isUpdating: state.crudReducer.isUpdating,
      isDeleting: state.crudReducer.isDeleting
    };
  },
  { fetchAuction }
)(AuctionList);
