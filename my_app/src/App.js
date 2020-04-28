import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import styled from "styled-components";
import PrivateRoute from './utils/'

import AuctionList from './components/AuctionList'
import SellerDash from './components/SellerDash';
import Login from "./components/Login";
import Styles from "./assets/Styles";

export default function App() {
  return (
    <StyledApp className="App">
      <Switch>
        <PrivateRoute exact path='/auctions' component={AuctionList} />
        <PrivateRoute exact path='/dashboard/seller/:id' component={SellerDash} />
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
