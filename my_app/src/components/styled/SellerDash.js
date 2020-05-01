import styled from "styled-components";
import Styles from "../../assets/Styles";

const StyledSellerDash = styled.div`
  form {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    min-height: 30vh;
    justify-content: space-between;
    align-items: stretch;
    padding: 10px;
    button {
      padding: 10px;
      border-radius: 10px;
      box-shadow: 2px 2px 10px #666;
      font-family: ${Styles.font.family};
      background-color: ${Styles.color.mainLight};
      color: #fff;
      font-size: ${Styles.font.size.small};
      cursor: pointer;
      &:hover {
        background-color: ${Styles.color.mainDark};
        color: #ccc;
      }
    }
    div {
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      box-shadow: 2px 2px 5px #666;
      margin-bottom: 10px;
      border-radius: 10px;
      overflow: hidden;
      label {
        padding: 10px 20px;
        background-color: ${Styles.color.mainLight};
        color: #fff;
        width: 30%;
      }
      input {
        flex-grow: 1;
        padding: 0 10px;
      }
    }
  }
`;

export default StyledSellerDash;
