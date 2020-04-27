import React from "react";
import styled from "styled-components";

import Splash from "./Splash";
import Form from "./Form";

export default function Login(props) {
  return (
    <StyledLogin>
      <Splash />
      <Form />
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  & > div {
    flex-grow: 1;
  }
  & > .Form {
    width: 40%;
    flex-grow: 0;
  }
`;
