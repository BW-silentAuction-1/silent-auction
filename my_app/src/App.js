import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Styles from "./assets/Styles";

export default function App() {
  return (
    <StyledApp className="App">
    hello world
      <Switch>
        <Route path="/login"></Route>
        <Route path="/"></Route>
      </Switch>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Styles.color.bg};
`;