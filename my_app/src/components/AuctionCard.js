import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

import Styles from "../assets/Styles";

export const AuctionCard = (props) => {
  let history = useHistory();
  const { auction, expired } = props;

  const closerLook = (id, auctionData) => {
    console.log("closer look clicked");
    history.push(`../../itemlook/${id}`, auctionData);
  };

  // const classes = useStyles();

  return (
    <StyledCard className={expired}
        onClick={() => {
          closerLook(props.auction.id, props.auction);
        }}
      >
      {expired && <span className="expired">EXPIRED</span>}
      <h2>{auction.name}</h2>
      <img src={auction.image} alt="alt" />
      <p>{auction.item_description}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 30%;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px 1px #000;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &.true {
      order: 2;
  }
  .expired {
      position: absolute;
      color: red;
      right: 10px;
      top: 10px;
  }
  h2 {
    font-size: ${Styles.font.size.medSmall};
    color: ${Styles.color.mainLight};
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  img {
    width: 90%;
    margin: 5px 0 15px;
  }
  p {
    font-size: ${Styles.font.size.small};
    color: black;
  }
`;
