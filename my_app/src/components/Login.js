import React from "react";
import styled from "styled-components";

import Styles from "../assets/Styles";

export default function Login(props) {
  return (
    <StyledDiv>
      <h2 class="login-text">Welcome back!</h2>
      <p>please enter your login info below</p>
      <form class="login-form">
        <div>
          <label>username</label>
          <input type="text" name="uname" data-cy="uname" />
        </div>
        <div>
          <label>password</label>
          <input type="password" name="pass" data-cy="pass" />
        </div>
        <label>
          <input type="checkbox" name="remember" data-cy="remember" />
          <span>Remember me</span>
        </label>
        <div className="btns">
          <button data-cy="cancel">Cancel</button>
          <button data-cy="login">Log In</button>
        </div>
      </form>
    </StyledDiv>
  );
}


const StyledDiv = styled.div`
  h2 {
    text-align: center;
    font-size: ${Styles.font.size.medLarge};
    padding: 15px;
    &.login-text {
      padding-top: 20vh;
    }
  }
  p {
    padding: 15px 10%;
    font-size: ${Styles.font.size.small};
  }

  form {
    flex-grow: 1;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    padding: 20px;

    label {
      font-size: ${Styles.font.size.small};
    }

    &.login-form {
      flex-grow: 0;
      & > div:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    & > label {
      padding-top: 10px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      input {
        margin-right: 5px;
      }
    }
    & > div.btns {
      padding: 15px 10% 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      button {
        padding: 6px 20px;
        background-color: ${Styles.color.mainDark};
        font-family: ${Styles.font.family};
        border-radius: 7px;
        color: ${Styles.color.white};
      }
    }
    & > div:not(.btns) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: stretch;

      border-radius: 10px;
      overflow: hidden;
      box-shadow: 4px 4px 10px #000;

      label {
        flex-grow: 1;
        padding: 5px;
        background-color: ${Styles.color.mainDark};
        display: flex;
        justify-content: center;
        align-items: center;
      }
      input {
        padding: 7px;
        width: 65%;
      }
    }
  }
`;
