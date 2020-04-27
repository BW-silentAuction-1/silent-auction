import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";


import Login from "./components/Login";
import Styles from "./assets/Styles";

export default function App() {
  return (
    <StyledApp className="App">
      <Switch>
        <Route path="/">
          <Login />
        </Route>
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