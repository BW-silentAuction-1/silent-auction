import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AuctionCard } from './AuctionCard'
import { fetchAuction } from '../actions'

function AuctionList(props) {
    console.log(`AuctionList`, props)
    useEffect(() => {
        props.fetchAuction()
    }, [props.fetchAgain, props.isUpdating, props.isDeleting])

    if (props.auctions) {
        console.log("test 1");
        return (
            <div className="auctionListContainer">
                {props.auctions.map((auction) => {
                    if (Date.parse(auction.deadline) > Date.now()) {
                        console.log("auction from line 15 auction list", auction)
                        //need to add key 

                        return <>{auction.name}<AuctionCard key={auction.id} auction={auction} /></>
                    } else {
                        return <>{auction.name}</>
                    }
                })}

            </div>
        )
    }
}


export default connect(state => {
    return {
        auctions: state.crudReducer.auctions,
        isUpdating: state.crudReducer.isUpdating,
        isDeleting: state.crudReducer.isDeleting


    }
}, { fetchAuction })(AuctionList)
