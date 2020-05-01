import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import StyledHead from "./styled/NavBar";

const Navigation = (props) => {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    console.log(props)

    const signOut = (e) => { 
        e.preventDefault()
        window.localStorage.removeItem('token')
        history.push('/login')
        //need to pull down login code
    }

    return token ? (
        <StyledHead className='NavBar'>

            <a href='https://silent-auction-app.herokuapp.com/'>Home</a>
            
            <NavLink to='/auctions'>Auctions</NavLink>
            

            
            
            {/* {props.user_type === 'seller' ? ( */}
            <NavLink to={`/dashboard/seller/${props.user_id}`}>Seller Dashboard</NavLink>
            <NavLink to={`/dashboard/bidder/${props.user_id}`}>Bidder Dashboard</NavLink>
            

            <button onClick={signOut}>Sign out</button>
        </StyledHead>
    ) : (null)
}

export default connect(state => {
    return {
        user_id: state.crudReducer.user_id,
        user_type: state.crudReducer.user_type
    }
}, {})(Navigation) 