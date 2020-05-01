import React from "react";
import styled from "styled-components";
import Styles from "../assets/Styles";

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
  }
`;

export default StyledLogin;
