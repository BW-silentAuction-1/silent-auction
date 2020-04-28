import React from 'react';
import { useHistory, useParams } from 'react-router-dom'


export const AuctionCard = (props) => {

    let history = useHistory()


    const closerLook = (id, auctionData) => {
        history.push(`closerlook/${id}`, auctionData)
    }

    const classes = useStyles();

    return (
        <div>
            <p onClick={() => { closerLook(props.auction.id, props.auction) }}>{props.auction.name}</p>
        </div>





    )
}
