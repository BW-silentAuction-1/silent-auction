import React, { useState } from "react";
import styled from "styled-components";

import Styles from "../assets/Styles";
import { axiosWithAuth } from "../utils/axiosWithAuth";



export default function Signup(props) {
    const [signupCredentials, setSignupCredentials] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: ''

    }
    )
    const signupHandler = form => {
        form.preventDefault()
        axiosWithAuth().post('/api/auth/register', signupCredentials)
            .then(response => {
                props.history.push('/auctions')


            })
    }


    const signupChange = e => {
        e.preventDefault()
        setSignupCredentials({ ...signupCredentials, [e.target.name]: e.target.value })
    }
    const {
        signupForm,
        formErrors,
        // signupChange,
        checkboxChange,
        submitHandler,
        // buttonDisabled
    } = props;
    return (
        <StyledDiv>
            <h2>Welcome</h2>
            <p>We need some information to get started... hope you don't mind.</p>
            <p className="errors">
                <div>{formErrors.fname}</div>
                <div>{formErrors.lname}</div>
                <div>{formErrors.uname}</div>
                <div>{formErrors.email}</div>
                <div>{formErrors.pass}</div>
                <div>{formErrors.tos}</div>
            </p>
            <form onSubmit={signupHandler}>
                <div>
                    <label>first name</label>
                    <input
                        type="text"
                        name="fname"
                        data-cy="fname"
                        value={signupForm.fname}
                        onChange={signupChange}

                    />
                </div>
                <div>
                    <label>last name</label>
                    <input
                        type="text"
                        name="lname"
                        data-cy="lname"
                        value={signupForm.lname}
                        onChange={signupChange}
                    />
                </div>
                <div>
                    <label>email</label>
                    <input
                        type="text"
                        name="email"
                        data-cy="email"
                        value={signupForm.email}
                        onChange={signupChange}
                    />
                </div>
                <div>
                    <label>username</label>
                    <input
                        type="text"
                        name="uname"
                        data-cy="uname"
                        value={signupForm.uname}
                        onChange={signupChange}
                    />
                </div>
                <div>
                    <label>password</label>
                    <input
                        type="password"
                        name="pass"
                        data-cy="pass"
                        value={signupForm.pass}
                        onChange={signupChange}
                    />
                </div>
                <label>
                    <input
                        type="checkbox"
                        name="tos"
                        data-cy="tos"
                        checked={signupForm.tosIsChecked}
                        onChange={checkboxChange}
                    />
                    <span class="checkbox" />
                    <span>I agree to the terms of service</span>
                </label>
                <div className="btns">
                    <div className="button-box" data-cy="cancel">Cancel</div>
                    <button
                        onClick={submitHandler}
                        // disabled={buttonDisabled}
                        data-cy="signup"
                    >Sign up!</button>
                </div>
            </form>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
  h2 {
    text-align: center;
    font-size: ${Styles.font.size.medLarge};
    padding: 15px;
    &.login-text {
      padding-top: 20vh;
    }
  }
  p {
    padding: 15px 10%;
    font-size: ${Styles.font.size.small};
  }

  form {
    flex-grow: 1;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    padding: 20px;

    label {
      font-size: ${Styles.font.size.small};
    }

    &.login-form {
      flex-grow: 0;
      & > div:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    & > label {
      padding-top: 10px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      input {
        margin-right: 5px;
      }
    }
    & > div.btns {
      padding: 15px 10% 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      button, .button-box {
        padding: 6px 20px;
        font-size: ${Styles.font.size.small};
        background-color: ${Styles.color.mainDark};
        font-family: ${Styles.font.family};
        border-radius: 7px;
        color: ${Styles.color.white};
      }
    }
    & > div:not(.btns) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: stretch;

      border-radius: 10px;
      overflow: hidden;
      box-shadow: 4px 4px 10px #000;

      label {
        flex-grow: 1;
        padding: 5px;
        background-color: ${Styles.color.mainDark};
        display: flex;
        justify-content: center;
        align-items: center;
      }
      input {
        padding: 7px;
        width: 65%;
      }
    }
  }
`;
