import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postAuction } from '../actions'
import AuctionList from './AuctionList'
import PrivateRoute from '../utils/PrivateRoute'

function SellerDash(props) {
    console.log("seller dash props", props)
    const [listing, setListing] = useState({
        name: '',
        image: '',
        item_description: '',
        item_price: '',
        date_ending: '',
    })

    const [fetchAgain, setFetchAgain] = useState();

    console.log("listing data", listing)

    const handleChanges = e => {
        e.preventDefault()
        setFetchAgain(false);
        setListing({ ...listing, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.postAuction(listing)
        setFetchAgain(true);
        // setListing({
        //     name: '',
        //     image: '',
        //     description: '',
        //     initial_price: '',
        //     deadline: '',
        //     user_id: props.user_id
        // })
    }

    return (
        <div>
            <h2> Sellers Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' onChange={handleChanges} value={listing.name} />

                <label htmlFor='image'>Image</label>
                <input name='image' onChange={handleChanges} value={listing.image} />

                <label htmlFor='description'>Description</label>
                <input name='item_description' onChange={handleChanges} value={listing.item_description} />

                <label htmlFor='initial_price'>Starting Price</label>
                <input name='item_price' onChange={handleChanges} value={listing.item_price} />

                <label htmlFor='deadline'>Deadline</label>
                <input type='datetime-local' name='date_ending' onChange={handleChanges} value={listing.date_ending} />

                <button type='submit'> Post Item</button>
            </form>

            <AuctionList fetchAgain={fetchAgain} />
        </div>
    )
}
export default connect(state => {
    return {
        // user_id: state.crudReducer.user_id
        auctions: state.auctions,
    }
}, { postAuction })(SellerDash)


