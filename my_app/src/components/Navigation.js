import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

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
        <div className='NavBar'>

            <a href='https://silent-auction-app.herokuapp.com/'>Home</a>
            &nbsp;&nbsp;&nbsp;
            <Link to='/auctions'>Auctions</Link>
            &nbsp;&nbsp;&nbsp;

            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            {/* {props.user_type === 'seller' ? ( */}
            <Link to={`/dashboard/seller/${props.user_id}`}>Seller Dashboard&nbsp;&nbsp;&nbsp;</Link>
            <Link to={`/dashboard/bidder/${props.user_id}`}>Bidder Dashboard</Link>
            &nbsp;&nbsp;&nbsp;

            <button onClick={signOut}>Sign out</button>
        </div>
    ) : (null)
}

export default connect(state => {
    return {
        user_id: state.crudReducer.user_id,
        user_type: state.crudReducer.user_type
    }
}, {})(Navigation) 