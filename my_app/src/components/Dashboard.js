import React from "react";
import { Switch, Route } from "react-router-dom"
import styled from "styled-components";

import Styles from "../assets/Styles";

import DashHead from "./DashHead";
import ItemList from "./ItemList";

export default function Dashboard(props) {
  return (
    <StyledDash>
      <DashHead />
      <Switch>
        <Route path="/">
          <ItemList />
        </Route>
      </Switch>
    </StyledDash>
  )
}

const StyledDash = styled.div`

`;