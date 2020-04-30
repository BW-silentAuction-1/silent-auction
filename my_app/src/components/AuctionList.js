import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AuctionCard } from './AuctionCard'
import { fetchAuction } from '../actions'

function AuctionList(props) {
    console.log(`AuctionList`, props)
    useEffect(() => {
        props.fetchAuction()
    }, [props.fetchAgain, props.isUpdating, props.isDeleting])

    console.log("props.auctions: ", props.auctions);
    if (props.auctions) {
        console.log("test 1");
        return (
            <div className="auctionListContainer">
                {props.auctions.map((auction) => {
                    console.log("Date parse: ", Date.parse(auction.date_ending));
                    console.log("Date now: ", Date.now());
                    if (Date.parse(auction.date_ending) > Date.now()) {
                        console.log("auction from line 15 auction list", auction)
                        //need to add key 

                        return <>{auction.name}<img src={auction.image} /><AuctionCard key={auction.id} auction={auction} /> <br /></>
                    } else {
                        return <>Expired: {auction.name}</>
                    }
                })}

            </div>
        )
    } else {
        console.log("asdfsd");
        return <></>;
    }
}


export default connect(state => {
    const auctions = state.crudReducer && state.crudReducer.auctions ? state.crudReducer.auctions : []
    return {
        auctions: auctions,
        isUpdating: state.crudReducer.isUpdating,
        isDeleting: state.crudReducer.isDeleting


    }
}, { fetchAuction })(AuctionList)
