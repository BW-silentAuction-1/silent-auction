import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bidAuction } from "../actions";

import Styles from "../assets/Styles";
import styled from "styled-components";

function BidderDash(props) {
  console.log("seller dash props", props);

  const [listing, setListing] = useState({
    id: "",
    name: "",
    image: "",
    item_description: "",
    item_price: "",
    date_ending: "",
    user_id: props.user_id
  });
  const [editing, setEditing] = useState();

  useEffect(() => {
    if (props.location.state) {
      setListing({
        id: props.location.state.id,
        name: props.location.state.name,
        image: props.location.state.image,
        item_description: props.location.state.item_description,
        item_price: props.location.state.item_price,
        date_ending: props.location.state.date_ending,
        user_id: props.user_id
      });
    }
  }, props);

  const [bid, setBid] = useState({
    price: ""
  });

  //

  const handleChanges = (e) => {
    e.preventDefault();
    setBid({ ...bid, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit: ", listing, bid);
    props.bidAuction(listing.id, bid.price);
    setBid({
      bid_price: ""
    });
  };

  return (
    <BidWrapper>
      <div className="name">Bid on {listing.name}</div>
      <div className="image">
        <img src={listing.image} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="bid_price">Starting Price</label>
            <input name="price" onChange={handleChanges} value={bid.price} />
        </div>

        <button type="submit">Place Bid</button>
      </form>
    </BidWrapper>
  );
}

const BidWrapper = styled.div`
  padding: 20px;
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  align-items: center;
  & > * {
    margin-bottom: 10px;
  }
  .name {
    font-size: ${Styles.font.size.large};
    color: ${Styles.color.mainLight};
    text-transform: capitalize;
    font-weight: 700;
  }
  .image {
    max-width: 60%;
    max-height: 60vh;
    img {
      max-height: 60vh;
    }
  }
  .item_price {
    color: ${Styles.color.mainDark};
    font-size: ${Styles.font.size.medSmall};
    &:before {
      content: "$ ";
    }
  }
  .item_description {
    font-size: ${Styles.font.size.small};
  }
  form {
        width: 60%;
        text-align: center;
    div {
        display: flex;
        flex-flow: row nowrap;
        align-items: stretch;
        box-shadow: 2px 2px 10px #666;
        margin-bottom: 20px;
        border-radius: 10px;
        overflow: hidden;
      label {
        padding: 10px 20px;
        background-color: ${Styles.color.mainLight};
        color: #fff;
      }
      input {
        flex-grow: 1;
      }
    }
    button {
      padding: 10px;
      border-radius: 10px;
      box-shadow: 2px 2px 10px #666;
      font-family: ${Styles.font.family};
      background-color: ${Styles.color.mainLight};
      color: #fff;
      font-size: ${Styles.font.size.small};
      cursor: pointer;
      &:hover {
        background-color: ${Styles.color.mainDark};
        color: #ccc;
      }
    }
  }
`;

export default connect(
  (state) => {
    return {
      // user_id: state.crudReducer.user_id
      auctions: state.auctions
    };
  },
  { bidAuction }
)(BidderDash);
