import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import styled from "styled-components";

import Styles from "../assets/Styles";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Splash from "./Splash";
import StyledLogin from "./Form";

export default function Signup(props) {
  const [signupCredentials, setSignupCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit called : ", signupCredentials);
    axiosWithAuth()
      .post("/api/auth/register", signupCredentials)
      .then((response) => {
        props.history.push("/auctions");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const signupChange = (e) => {
    e.preventDefault();
    setSignupCredentials({
      ...signupCredentials,
      [e.target.name]: e.target.value
    });
  };
  const {
    // signupForm,
    formErrors,
    // signupChange,
    checkboxChange
    // submitHandler,
    // buttonDisabled
  } = props;
  return (
    <StyledLogin>
      <Splash />
      <div className="Form">
        <div className="nav">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
        <StyledDiv>
          <h2>Welcome</h2>
          <p>We need some information to get started... hope you don't mind.</p>
          <p className="errors">
            {/* <div>{formErrors.fname}</div>
                <div>{formErrors.lname}</div>
                <div>{formErrors.uname}</div>
                <div>{formErrors.email}</div>
                <div>{formErrors.pass}</div>
                <div>{formErrors.tos}</div> */}
          </p>
          <form>
            <div>
              <label>first name</label>
              <input
                type="text"
                name="first_name"
                data-cy="first_name"
                value={signupCredentials.first_name}
                onChange={signupChange}
              />
            </div>
            <div>
              <label>last name</label>
              <input
                type="text"
                name="last_name"
                data-cy="last_name"
                value={signupCredentials.last_name}
                onChange={signupChange}
              />
            </div>
            <div>
              <label>email</label>
              <input
                type="text"
                name="email"
                data-cy="email"
                value={signupCredentials.email}
                onChange={signupChange}
              />
            </div>
            <div>
              <label>username</label>
              <input
                type="text"
                name="username"
                data-cy="username"
                value={signupCredentials.username}
                onChange={signupChange}
              />
            </div>
            <div>
              <label>password</label>
              <input
                type="password"
                name="password"
                data-cy="password"
                value={signupCredentials.password}
                onChange={signupChange}
              />
            </div>
            <label>
              <input
                type="checkbox"
                name="tos"
                data-cy="tos"
                checked={signupCredentials.tosIsChecked}
                onChange={checkboxChange}
              />
              <span class="checkbox" />
              <span>I agree to the terms of service</span>
            </label>
            <div className="btns">
              <div className="button-box" data-cy="cancel">
                Cancel
              </div>
              <button
                onClick={submitHandler}
                // disabled={buttonDisabled}
                data-cy="signup"
              >
                Sign up!
              </button>
            </div>
          </form>
        </StyledDiv>
      </div>
    </StyledLogin>
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
      button,
      .button-box {
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
