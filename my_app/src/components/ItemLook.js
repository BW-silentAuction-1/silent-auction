import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateAuction, deleteAuction } from '../actions'
import { useHistory } from 'react-router-dom'



const ItemLook = (props) => {
    // console.log('itemlook props', props)
    // const [editing, setEditing] = useState(false)



    const [listing, setListing] = useState({
        name: '',
        image: '',
        description: '',
        initial_price: '',
        deadline: '',
        user_id: props.user_id
    })

    useEffect(() => {
        setListing({
            name: props.location.state.name,
            image: props.location.stae.image,
            description: props.location.state.description,
            initial_price: props.location.state.initial_price,
            deadline: props.location.state.deadline,
            user_id: props.user_id
        })
    }, props)


    const handleChanges = e => {
        e.preventDefault()
        setListing({ ...listing, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateAuction(props.location.state.id, listing)
        setListing({
            name: '',
            image: '',
            description: '',
            initial_price: '',
            deadline: '',
            user_id: props.user_id
        })
    }

    let history = useHistory()

    const classes = useStyles();
    const [expand, setExpand] = React.useState(false);
    const handleExpandClick = () => {
        setExpand(!expanded);

    };

    console.log()
    return (
        <div className="auctionWrapper">
            <p>Sellers Dashboard</p>
            <form onsubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input name='name' onChange={handleChanges}
                    value={listing.name} />

                <label htmlFor='image'>Image</label>
                <input name='image' onChange={handleChanges} value={listing.image} />

                <label htmlFor='initial_price'>Initial Price</label>
                <input name='initial_price' onChange={handleChanges} value={listing.initial_price} />

                <label htmlfor='deadline'>Deadline</label>
                <input type='datetime-local' name='deadline' onChange={handleChanges} value={listing.deadline} />

                <label htmlFor='description'>Description</label>
                <text area name='description' onChange={handleChanges} value={listing.description} />

                <button type='submit'>Edit Auction </button>
            </form>
            {editing ? ((
                <div>
                    <p>Sellers Dashboard</p>
                    <form onsubmit={handleSubmit}>
                        <label htmlFor='name'>Name</label>
                        <input name='name' onChange={handleChanges}
                            value={listing.name} />

                        <label htmlFor='image'>Image</label>
                        <input name='image' onChange={handleChanges} value={listing.image} />

                        <label htmlFor='initial_price'>Initial Price</label>
                        <input name='initial_price' onChange={handleChanges} value={listing.initial_price} />

                        <label htmlfor='deadline'>Deadline</label>
                        <input type='datetime-local' name='deadline' onChange={handleChanges} value={listing.deadline} />

                        <button type='submit'>}>Edit Auction</button>
                    </form>
                </div>
            )) : (null)}
        </div>
    )
}

export default connect(state => {
    return {
        user_id: state.crudReducer.user_id
    }
}, { updateAuction, deleteAuction })(ItemLook)