import React, { useState } from "react";
import { connect } from "react-redux";
import { postAuction } from "../actions";
import AuctionList from "./AuctionList";
import PrivateRoute from "../utils/PrivateRoute";

import StyledSellerDash from "./styled/SellerDash";

function SellerDash(props) {
  console.log("seller dash props", props);
  const [listing, setListing] = useState({
    name: "",
    image: "",
    item_description: "",
    item_price: "",
    date_ending: ""
  });

  const [fetchAgain, setFetchAgain] = useState();

  console.log("listing data", listing);

  const handleChanges = (e) => {
    e.preventDefault();
    setFetchAgain(false);
    setListing({ ...listing, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.postAuction(listing);
    setFetchAgain(true);
    setListing({
        name: '',
        image: '',
        item_description: '',
        item_price: '',
        date_ending: '',
        deadline: '',
        user_id: props.user_id
    })
  };

  return (
    <StyledSellerDash>
      <form onSubmit={handleSubmit}>
        <div className="name">
            <label htmlFor="name">Name</label>
            <input name="name" onChange={handleChanges} value={listing.name} />
        </div>

        <div className="image">
            <label htmlFor="image">Image</label>
            <input name="image" onChange={handleChanges} value={listing.image} />
        </div>

        <div className="description">
            <label htmlFor="description">Description</label>
            <input
              name="item_description"
              onChange={handleChanges}
              value={listing.item_description}
            />
        </div>

        <div className="price">
            <label htmlFor="initial_price">Starting Price</label>
            <input
              name="item_price"
              onChange={handleChanges}
              value={listing.item_price}
            />
        </div>

        <div className="deadline">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="datetime-local"
              name="date_ending"
              onChange={handleChanges}
              value={listing.date_ending}
            />
        </div>

        <button type="submit"> Post Item</button>
      </form>

      <AuctionList fetchAgain={fetchAgain} />
    </StyledSellerDash>
  );
}
export default connect(
  (state) => {
    return {
      // user_id: state.crudReducer.user_id
      auctions: state.auctions
    };
  },
  { postAuction }
)(SellerDash);
