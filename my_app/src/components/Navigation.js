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
            <Link to='/auctions'>Auctions</Link>
            {props.user_type === 'seller' ? (<Link to={`/dashboard/${props.user_type}/${props.user_id}`}>Seller Dashboard</Link>) : (<Link to={`/dashboard/${props.user_type}/${props.id}`}>Bidder Dashboard</Link>)}
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