import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import * as yup from "yup";

import Form from "./components/Form";
import PrivateRoute from './utils/PrivateRoute'


import Navigation from './components/Navigation'


import Signup from './components/Signup'
import AuctionList from './components/AuctionList'
import SellerDash from './components/SellerDash';
import BidderDash from './components/BidderDash';
import Login from "./components/Login";
import ItemLook from "./components/ItemLook";

import Styles from "./assets/Styles";


const initialSignupForm = {
  fname: "",
  lname: "",
  uname: "",
  email: "",
  pass: "",
  tosIsChecked: false
};
const initialFormErrors = {
  fname: "",
  lname: "",
  uname: "",
  email: "",
  pass: "",
  tos: ""
};
const formSchema = yup.object().shape({
  fname: yup
    .string()
    .min(2, "First name must have at least 2 characters")
    .required("First name is required"),
  lname: yup
    .string()
    .min(2, "Last name must have at least 2 characters")
    .required("Last name is required"),
  uname: yup
    .string()
    .min(6, "Username must have at least 6 characters")
    .required("Username is required"),
  email: yup
    .string()
    .email("Valid email is required")
    .required("Email is required"),
  pass: yup
    .string()
    .min(6, "Password must have at least 6 characters")
    .required("Password is required"),
  tos: yup
    .boolean()
    .oneOf([true], "ToS must be accepted to sign up")
    .required("Accepting ToS is required")
});

export default function App() {
  const [signupForm, setSignupForm] = useState(initialSignupForm);
  // const [buttonDisabled, setButtonDisabled] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const inputChange = (event) => {
    const { name, value } = event.target;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    setSignupForm({
      ...signupForm,
      [name]: value
    });
  };
  const checkboxChange = (event) => {
    const { name, checked } = event.target;

    yup
      .reach(formSchema, name)
      .validate(checked)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    setSignupForm({
      ...signupForm,
      [`${name}IsChecked`]: checked
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const request = {
      username: signupForm.uname,
      password: signupForm.pass,
      first_name: signupForm.fname,
      last_name: signupForm.lname,
      email: signupForm.email,
    };
    axios
      .post("https://silent-auction-app.herokuapp.com/api/auth/register", request)
      .then((res) => {
        debugger
        window.localStorage.setItem('token', res.data.token)
        setSignupForm(initialSignupForm);

      })
      .catch((err) => {
        debugger;
      })

  };
  useEffect(() => {
    // setButtonDisabled(true);
    setFormErrors(initialFormErrors);
  }, [])
  // useEffect(() => {
  //   formSchema.isValid(signupForm).then((valid) => {
  //     setButtonDisabled(!valid);
  //   });
  // }, [signupForm]);

  return (
    <StyledApp className="App">
      <Navigation />
      <Switch>

        <Route exact path="/">
          <Form
            signupForm={signupForm}
            formErrors={formErrors}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submitHandler={submitHandler}
          // buttonDisabled={buttonDisabled}
          />
        </Route>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/auctions' component={AuctionList} />
        <Route exact path='/dashboard/seller/:id' component={SellerDash} />
        <Route exact path='/itemlook/:id' component={ItemLook} />

        <PrivateRoute exact path='/dashboard/bidder/:id' component={BidderDash} />

      </Switch>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Styles.color.bg};
  font-family: ${Styles.font.family};
`;
