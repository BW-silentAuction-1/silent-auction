import React from "react";
import styled from "styled-components";

import Styles from "../assets/Styles";

import dummyAd from "../assets/dummyAd";

export default function Splash(props) {
  return (
    <StyledSplash>
      <div>
        <h2>{dummyAd.name}</h2>
        <div>
          <div className="left">&lt;</div>
            <img src={dummyAd.src} alt="guitar" />
          <div className="right">&gt;</div>
        </div>
      </div>
      <div className="time">
        <h3>time remaining...</h3>
        <p>{dummyAd.time}</p>
      </div>
    </StyledSplash>
  );
}

const StyledSplash = styled.div`
  position: relative;
  color: ${Styles.color.mainLight};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  & > div:first-child {
    h2 {
      font-size: ${Styles.font.size.medLarge};
      text-align: center;
      margin-bottom: 10px;
    }
    & > div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      .left, .right {
        font-size: ${Styles.font.size.medSmall};
        background-color: ${Styles.color.mainLight};
        width: 20px;
        height: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${Styles.color.white};
        cursor: pointer;

        &:hover {
          background-color: ${Styles.color.mainDark};
        }
      }
      img {
        width: 38%;
        height: auto;
        padding: 0 10px;
      }
    }
  }
  .time {
    position: absolute;
    bottom: 15px;
    right: 10px;
    color: ${Styles.color.red};
    h3 {
      font-size: ${Styles.font.size.medSmall};
    }
    p {
      font-size: ${Styles.font.size.medLarge};
    }
  }
`;
