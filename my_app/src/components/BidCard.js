import React from 'react';
import { useHistory, useParams } from 'react-router-dom'

export const BidCard = (props) => {

    let history = useHistory()


    const bidDash = (id, listingData) => {
        console.log("closer look clicked");
        history.push(`../dashboard/bidder/${id}`, listingData)
    }

    // const classes = useStyles();

    return (
        <div>
            <p onClick={() => { bidDash(props.listing.id, props.listing) }}> Bid {props.listing.name}</p>
        </div>





    )
}
