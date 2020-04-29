import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Styles from "../assets/Styles";
import myPic from "../assets/dummyGuitar.jpg";

export default function DisplayCard(props) {
  return (
    <Lightbox>
      <div className="inner-card">
        <h1>Guitar #25</h1>
        <div>
          <img src={myPic} alt="alt" />
        </div>
        <span className="close">&times;</span>
        <Route path="/dashboard/newpost">
          <NewPost />
        </Route>
        <Route path="/dashboard/display">
          <BottomBid />
        </Route>
      </div>
    </Lightbox>
  );
}

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(50, 50, 50, 0.9);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  .inner-card {
    flex-shrink: 1;
    background-color: #fff;
    padding: 20px;
    position: relative;
    min-width: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    border-radius: 15px;
    h1 {
      color: ${Styles.color.mainLight};
      font-size: ${Styles.font.size.large};
      text-align: center;
    }
    & > div {
      text-align: center;
      img {
        max-width: 40vw;
        max-height: 40vh;
      }
    }
    .close {
      position: absolute;
      top: 6px;
      right: 14px;
      padding: 3px;
      font-size: ${Styles.font.size.medLarge};
      cursor: pointer;
      &:hover {
        text-shadow: 0 0 5px ${Styles.color.mainDark};
      }
    }
    .bottom {
      display: flex;
      flex-flow: column nowrap;
      align-items: stretch;
      .buttons {
        text-align: right;
        font-size: ${Styles.font.size.small};
      }
      .dropdown {
        display: flex;
        flex-flow: row nowrap;
        align-items: stretch;
        box-shadow: 0 0 5px #666;
        border-radius: 10px;
        overflow: hidden;
        max-width: 50%;
        label {
          align-self: stretch;
          font-size: ${Styles.font.size.small};
          background-color: ${Styles.color.mainLight};
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 15px;
          color: #fff;
        }
        input {
          padding: 10px;
          font-family: ${Styles.font.family};
          flex-grow: 1;
        }
      }
      button {
        padding: 7px 20px;
        background-color: ${Styles.color.mainLight};
        color: #fff;
        font-family: ${Styles.font.family};
        border-radius: 10px;
        cursor: pointer;
        &:hover {
          color: ${Styles.color.bg};
          background-color: ${Styles.color.mainDark};
        }
      }
      p {
        font-size: ${Styles.font.size.small};
        margin-bottom: 10px;
        text-align: left;
      }
      & > div:not(.buttons) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 10px;
        & > div {
          font-size: ${Styles.font.size.small};
          color: red;
        }
      }
    }
  }
`;

function BottomBid() {
  return (
    <div className="bottom">
      <div className="buttons">watch [EYE ICON]</div>
      <div>
        <div className="dropdown">
          <label>Bid</label>
          <input type="text" placeholder="enter your bid" />
        </div>
        <div>time remaining... 3:47:25</div>
        <button>Place Bid</button>
      </div>
    </div>
  );
}
function NewPost() {
  return (
    <div className="bottom">
      <div className="dropdown">
        <label>Bid</label>
        <input type="text" placeholder="enter your bid" />
      </div>
      <p>length:</p>
      <div>
        <button>1 hour</button>
        <button>3 hours</button>
        <button>6 hours</button>
        <button>12 hours</button>
        <button>24 hours</button>
        <button>48 hours</button>
      </div>
      <div className="buttons">
        <button>Confirm</button>
      </div>
    </div>
  );
}
