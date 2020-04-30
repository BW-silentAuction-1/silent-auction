
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bidAuction } from '../actions'
import AuctionList from './AuctionList'


function BidderDash(props) {
    console.log("seller dash props", props)

    const [listing, setListing] = useState({
        id: '',
        name: '',
        image: '',
        item_description: '',
        item_price: '',
        date_ending: '',
        user_id: props.user_id
    })
    const [editing, setEditing] = useState()

    useEffect(() => {
        if(props.location.state){
        setListing({
            id: props.location.state.id,
            name: props.location.state.name,
            image: props.location.state.image,
            item_description: props.location.state.item_description,
            item_price: props.location.state.item_price,
            date_ending: props.location.state.date_ending,
            user_id: props.user_id
        })
    }
    }, props)

    const [bid, setBid] = useState({
        price: ''
    })

    // 

    const handleChanges = e => {
        e.preventDefault()
        setBid({ ...bid, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handle submit: ", listing, bid)
        props.bidAuction(listing.id, bid.price)
        setBid({
            bid_price: ''
        })
    }

    return (
        <div>
            <h2> Bid Dashboard</h2>
            Bid on {listing.name}
            <img src={listing.image} />
            <br /><br />
            <form onSubmit={handleSubmit}>


                <label htmlFor='bid_price'>Starting Price</label>
                <input name='price' onChange={handleChanges} value={bid.price} />



                <button type='submit'>Place Bid</button>
            </form>


        </div>
    )
}
export default connect(state => {
    return {
        // user_id: state.crudReducer.user_id
        auctions: state.auctions,
    }
}, { bidAuction })(BidderDash)