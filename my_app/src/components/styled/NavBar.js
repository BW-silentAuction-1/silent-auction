import React from "react";
import styled from "styled-components";

import Styles from "../../assets/Styles";

const StyledHead = styled.div`
  display: flex;
  flex-flow: row nowrap;
  a, button {
    flex-grow: 1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${Styles.font.family};
    font-size: ${Styles.font.size.small};
    font-weight: 500;
    background-color: ${Styles.color.mainLight};
    color: ${Styles.color.white};
    text-decoration: none;
    padding: 10px 0;
    &.active {
      background-color: ${Styles.color.mainDark};
    }
    &:hover {
      text-decoration: underline;
    }
  }
`

export default StyledHead;