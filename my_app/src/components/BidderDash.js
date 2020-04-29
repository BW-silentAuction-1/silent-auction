import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postAuction } from '../actions'
import AuctionList from './AuctionList'

function BidderDash(props) {
    console.log("seller dash props", props)
    const [listing, setListing] = useState({
        name: '',
        image: '',
        description: '',
        initial_price: '',
        deadline: '',
        user_id: props.user_id
    })

    console.log("listing data", listing)

    const handleChanges = e => {
        e.preventDefault()
        setListing({ ...listing, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        props.postAuction(listing)
        setListing({
            name: '',
            image: '',
            description: '',
            initial_price: '',
            deadline: '',
            user_id: props.user_id
        })
    }

    return (
        <div>
            <h2> Bid Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' onChange={handleChanges} value={listing.name} />

                <label htmlFor='image'>Image</label>
                <input name='name' onChange={handleChanges} value={listing.image} />

                <label htmlFor='description'>Description</label>
                <input name='description' onChange={handleChanges} value={listing.description} />

                <label htmlFor='initial_price'>Starting Price</label>
                <input name='initial_price' onChange={handleChanges} value={listing.initial_price} />

                <label htmlFor='deadline'>Deadline</label>
                <input type='datetime-local' name='deadline' onChange={handleChanges} value={listing.deadline} />

                <button type='submit'>Place Bid</button>
            </form>

            <AuctionList />
        </div>
    )
}
export default connect(state => {
    return {
        // user_id: state.crudReducer.user_id
        auctions: state.auctions,
    }
}, { postAuction })(BidderDash)
