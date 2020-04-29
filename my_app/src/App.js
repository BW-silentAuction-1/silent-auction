import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import styled from "styled-components";
import PrivateRoute from './utils/PrivateRoute'


import Navigation from './components/Navigation'

// import Login from './components/Login'
import Signup from './components/Signup'
import AuctionList from './components/AuctionList'
import SellerDash from './components/SellerDash';
import BidderDash from './components/BidderDash';
import Login from "./components/Login";
import Styles from "./assets/Styles";

function App() {
  return (
    <StyledApp className="App">
      <Navigation />
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/auctions' component={AuctionList} />
        <PrivateRoute exact path='/dashboard/seller/:id' component={SellerDash} />
        <PrivateRoute exact path='/dashboard/bidder/:id' component={BidderDash} />
        <PrivateRoute exact path='/' component={Login} />

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

export default connect(state => {
  return {}
}, {})(App);
