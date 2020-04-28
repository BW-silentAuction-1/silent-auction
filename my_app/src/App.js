import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './utils/'
import AuctionList from './components/AuctionList'
import SellerDash from './components/SellerDash';

function App() {
  return (
    <div className="App">
      <h1>this is a test</h1>
      <Switch>
        <PrivateRoute exact path='/auctions' component={AuctionList} />
        <PrivateRoute exact path='/dashboard/seller/:id' component={SellerDash} />
      </Switch>
    </div>
  );
}

export default App;
