import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateAuction, deleteAuction } from "../actions";
import { useHistory } from "react-router-dom";
import { BidCard } from "./BidCard";

import Styles from "../assets/Styles";
import styled from "styled-components";

const ItemLook = (props) => {
  // console.log('itemlook props', props)
  // const [editing, setEditing] = useState(false)

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
    setListing({
      id: props.location.state.id,
      name: props.location.state.name,
      image: props.location.state.image,
      item_description: props.location.state.item_description,
      item_price: props.location.state.item_price,
      date_ending: props.location.state.date_ending,
      user_id: props.user_id
    });
  }, props);

  const handleChanges = (e) => {
    e.preventDefault();
    setListing({ ...listing, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateAuction(props.location.state.id, listing);
    setListing({
      name: "",
      image: "",
      item_description: "",
      item_price: "",
      date_ending: "",
      user_id: props.user_id
    });
  };

  let history = useHistory();

  // const classes = useStyles();
  const [expanded, setExpand] = React.useState(false);
  const handleExpandClick = () => {
    setExpand(!expanded);
  };

  console.log("In Item Look: ", listing);
  return (
    <AuctionWrapper className="auctionWrapper">
      <div className="name">{listing.name}</div>
      <div className="image">
        <img src={listing.image} />
      </div>
      <div className="item_price">{listing.item_price}</div>
      <div className="item_description">{listing.item_description}</div>
      <BidCard listing={listing} />

      {/* <form onsubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' onChange={handleChanges}
                    value={listing.name} />

                <label htmlFor='image'>Image</label>
                <input name='image' onChange={handleChanges} value={listing.image} />

                <label htmlFor='initial_price'>Initial Price</label>
                <input name='item_price' onChange={handleChanges} value={listing.item_price} />

                <label htmlfor='deadline'>Deadline</label>
                <input type='datetime-local' name='date_ending' onChange={handleChanges} value={listing.date_ending} />

                <label htmlFor='description'>Description</label>
                <text area name='item_description' onChange={handleChanges} value={listing.item_description} />

                <button type='submit'>Edit Auction </button>
            </form> */}
      {editing ? (
        <div>
          <p>Sellers Dashboard</p>
          <form onsubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChanges} value={listing.name} />

            <label htmlFor="image">Image</label>
            <input
              name="image"
              onChange={handleChanges}
              value={listing.image}
            />

            <label htmlFor="initial_price">Initial Price</label>
            <input
              name="item_price"
              onChange={handleChanges}
              value={listing.item_price}
            />

            <label htmlfor="deadline">Deadline</label>
            <input
              type="datetime-local"
              name="date_ending"
              onChange={handleChanges}
              value={listing.date_ending}
            />

            <button type="submit">}>Edit Auction</button>
          </form>
        </div>
      ) : null}
    </AuctionWrapper>
  );
};

const AuctionWrapper = styled.div`
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
`;

export default connect(
  (state) => {
    return {
      user_id: state.crudReducer.user_id
    };
  },
  { updateAuction, deleteAuction }
)(ItemLook);
