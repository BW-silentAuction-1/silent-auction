import React from 'react';
import { useHistory, useParams } from 'react-router-dom'
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

export const AuctionCard = (props) => {

    let history = useHistory()


    const closerLook = (id, auctionData) => {
        history.push(`closerlook/${id}`, auctionData)
    }

    // const classes = useStyles();

    return (
        <div>
            <p onClick={() => { closerLook(props.auction.id, props.auction) }}>{props.auction.name}</p>
        </div>





    )
}
