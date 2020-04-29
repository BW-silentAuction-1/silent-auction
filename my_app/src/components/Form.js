import React from "react";
import styled from "styled-components";
import { Switch, Route, NavLink } from "react-router-dom";

import Styles from "../assets/Styles";

import Signup from "./Signup";
import Login from "./Login";
import Splash from "./Splash";

export default function Form(props) {
  const {
    signupForm,
    formErrors,
    inputChange,
    checkboxChange,
    submitHandler,
    // buttonDisabled
  } = props;
  return (
    <StyledLogin>
      <Splash />
      <StyledForm className="Form">
        <div className="nav">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
        <Switch>
          <Route path="/signup">
            <Signup
              signupForm={signupForm}
              formErrors={formErrors}
              inputChange={inputChange}
              checkboxChange={checkboxChange}
              submitHandler={submitHandler}
              // buttonDisabled={buttonDisabled}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </StyledForm>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  & > div {
    width: 60%;
  }
  & > .Form {
    width: 40%;
    flex-grow: 0;
  }
`;

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
  div {
  }
`;
