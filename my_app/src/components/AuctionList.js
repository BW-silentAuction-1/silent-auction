import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AuctionCard } from './AuctionCard'
import { fetchAuction } from '../actions'

function AuctionList(props) {
    console.log(`AuctionList`, props)
    useEffect(() => {
        props.fetchAuction()
    }, [props.fetchAagin, props.isUpdating, props.isDeleting])
}
return (
    <div className="auctionListContainer">
        {props.auctions.map((auction) => {
            if (Date.parse(auction.deadline) > Date.now()) {
                console.log("auction from line 15 auction list", auction)
                //need to add key 
                return <AuctionCard key={auction.id} auction={auction} />
            } else {
                return null;
            }
        })}

    </div>
)


export default connect(state => {
    return {
        auctions: state.crudReducer,
        isUpdating: state.crudReducer.isUpdating,
        isDeleting: state.crudReducer.isDeleting
    }
}, { fetchAuction })(AuctionList)
