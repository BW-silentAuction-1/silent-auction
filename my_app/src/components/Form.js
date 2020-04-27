import React from "react";
import styled from "styled-components";
import { Switch, Route, NavLink } from "react-router-dom";

import Styles from "../assets/Styles";

export default function Form(props) {
  return (
    <StyledForm className="Form">
      <div className="nav">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
      <Switch>
        <Route path="/signup">
          <h2>Welcome</h2>
          <p>We need some information to get started... hope you don't mind.</p>
          <form>
            <div>
              <label>first name</label>
              <input type="text" name="fname" data-cy="fname" />
            </div>
            <div>
              <label>last name</label>
              <input type="text" name="lname" data-cy="lname" />
            </div>
            <div>
              <label>email</label>
              <input type="text" name="email" data-cy="email" />
            </div>
            <div>
              <label>username</label>
              <input type="text" name="uname" data-cy="uname" />
            </div>
            <div>
              <label>password</label>
              <input type="password" name="pass" data-cy="pass" />
            </div>
            <label>
              <input type="checkbox" name="tos" data-cy="tos" />
              <span class="checkbox" />
              <span>I agree to the terms of service</span>
            </label>
            <div className="btns">
              <button data-cy="cancel">Cancel</button>
              <button data-cy="signup">Sign up!</button>
            </div>
          </form>
        </Route>
        <Route path="/login">
          <h2 class="login-text">Welcome back!</h2>
          <p>please enter your login info below</p>
          <form class="login-form">
            <div>
              <label>username</label>
              <input type="text"
                name="uname"
                data-cy="uname"
              />
            </div>
            <div>
              <label>password</label>
              <input type="password"
                name="pass"
                data-cy="pass"
              />
            </div>
            <label>
              <input type="checkbox" name="remember" data-cy="remember" />
              <span>Remember me</span>
            </label>
            <div className="btns">
              <button data-cy="cancel">Cancel</button>
              <button data-cy="login">Log In</button>
            </div>
          </form>
        </Route>
      </Switch>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;

  background-color: ${Styles.color.mainLight};
  color: ${Styles.color.white};
  .nav {
    display: flex;
    flex-flow: row nowrap;
    a {
      flex-grow: 1;
      padding: 10px;
      font-size: ${Styles.font.size.small};
      text-align: center;
      color: ${Styles.color.white};
      text-decoration: none;
      &.active {
        background-color: ${Styles.color.mainDark};
      }
    }
  }

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
      button {
        padding: 6px 20px;
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
