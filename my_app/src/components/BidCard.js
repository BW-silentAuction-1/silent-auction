import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Styles from "../assets/Styles";
import styled from "styled-components";

export const BidCard = (props) => {
  let history = useHistory();

  const bidDash = (id, listingData) => {
    console.log("closer look clicked");
    history.push(`../dashboard/bidder/${id}`, listingData);
  };

  // const classes = useStyles();

  return (
    <StyledBidCard>
      <button
        onClick={(e) => {
          e.preventDefault();
          bidDash(props.listing.id, props.listing);
        }}
      >
        {" "}
        Bid on {props.listing.name}
      </button>
    </StyledBidCard>
  );
};

const StyledBidCard = styled.div`
    button {
        padding: 10px;
        border-radius: 10px;
        background-color: ${Styles.color.mainLight};
        color: #FFF;
        font-size: ${Styles.font.size.small};
        box-shadow: 2px 2px 10px #666;
      font-family: ${Styles.font.family};
        cursor: pointer;
        &:hover {
            background-color: ${Styles.color.mainDark};
            color: #ccc;
        }
    }
`;