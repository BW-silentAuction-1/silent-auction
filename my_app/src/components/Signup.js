import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signupSave } from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Signup(props) {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: ''

    })
    console.log(props)

    const history = useHistory()

    const handleChanges = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitForm = form => {
        form.preventDefault();
        props.signupSave(user)
        history.push('/login')
    }

    return (
        <div className="signup-wrapper">
            <form onSubmit={submitForm}>
                <label htmlFor="name">First Name</label>
                <input id="firstname" type="text" name="First Name" onChange={handleChanges} required></input>
                <label htmlFor="name"> Last Name</label>
                <input id="lastname" type="text" name="Last Name" onChange={handleChanges} required></input>
                <input id="username" type="text" name="username" onChange={handleChanges} required></input>
                <br></br>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" onChange={handleChanges} required></input>
                <p>Already have an account? <Link to='/login'>Click Here</Link></p>
                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
}

export default connect(state => {
    return {}
}, { signupSave })(Signup);