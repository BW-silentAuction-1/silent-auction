import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";


import Styles from "../assets/Styles";

export default function DashHead(props) {
  const { path, url } = useRouteMatch();

  return (
    <StyledHead>
      <div className="top-bar">
        <NavLink exact to="/dashboard">Public Auctions</NavLink>
        <NavLink exact to="/dashboard/watchlist">My Watchlist</NavLink>
        <NavLink exact to="/dashboard/bids">My Bids</NavLink>
        <NavLink exact to="/dashboard/auctions">My Auctions</NavLink>
        <NavLink exact to="/dashboard/logout">Log Out </NavLink>
      </div>
      <div className="bot-bar">
        <Switch>
          <Route path="/dashboard/watchlist">
            {/* WATCHLIST FILTERS */}
            <div>Ending Soonest</div>
            <div className="active">Longest Wait</div>
            <div>Most Bids</div>
            <div>Least Bids</div>
          </Route>
          <Route path="/dashboard/bids">
            {/* BID FILTERS */}
            <div>Ending Soonest</div>
            <div className="active">Longest Wait</div>
            <div>Most Bids</div>
            <div>Least Bids</div>
          </Route>
          <Route path="/dashboard/auctions">
            {/* AUCTION FILTERS */}
            <div>Ending Soonest</div>
            <div className="active">Longest Wait</div>
            <div>Most Bids</div>
            <div>Least Bids</div>
          </Route>
          <Route path="/dashboard/logout">
            {/* NO FILTERS? */}
            <div>Ending Soonest</div>
            <div className="active">Longest Wait</div>
            <div>Most Bids</div>
            <div>Least Bids</div>
          </Route>
          <Route path="/dashboard">
            {/* PUBLIC AUCTION FILTERS */}
            <div>Ending Soonest</div>
            <div className="active">Longest Wait</div>
            <div>Most Bids</div>
            <div>Least Bids</div>
          </Route>
        </Switch>
      </div>
    </StyledHead>
  )
}

const StyledHead = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  .top-bar {
    display: flex;
    flex-flow: row nowrap;
    a {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${Styles.font.size.medSmall};
      font-weight: 500;
      background-color: ${Styles.color.mainLight};
      color: ${Styles.color.white};
      text-decoration: none;
      padding: 10px 0;
      &.active {
        background-color: ${Styles.color.mainDark};
      }
    }
  }
  .bot-bar {
    display: flex;
    flex-flow: row nowrap;
    div {
      flex-grow: 1;
      border-bottom: 3px solid #FFF;
      padding: 10px 0;
      background-color: ${Styles.color.white};
      color: ${Styles.color.mainLight};
      font-size: ${Styles.font.size.small};
        font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      &.active {
        color: ${Styles.color.mainDark};
        border-bottom-color: ${Styles.color.mainDark};
      }
    }
  }
`;