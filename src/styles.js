import styled from "styled-components";
import login_back from "../src/imgs/login_back.jpg";
import username_icon from "../src/imgs/username_icon.jpg";
import pass_icon_2 from "../src/imgs/pass_icon_2.jpg";

export const StyledLoginDiv = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${login_back});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 1vw;
  align-items: center;
  color: #fbab06;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0.5em;
  border-radius: 1em;
  background-image: url(${username_icon});
  background-size: 20%;
  background-repeat: no-repeat;
  text-indent: 20px;
  :hover {
    background-image: none;
  }
`;

export const StyledPassword = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0.5em;
  border-radius: 1em;
  background-image: url(${pass_icon_2});
  background-size: 20%;
  background-repeat: no-repeat;
  text-indent: 20px;
  :hover {
    background-image: none;
  }
`;

export const StyledButton = styled.button`
  margin: 1em;
  padding: 0.7em;
  background-color: #fbab06;
  border: none;
  border-radius: 1em;
  width: 13vw;
  color: aliceblue;
`;

export const StyledImg = styled.img`
  width: 7vw;
  height: 6vw;
  /* margin: 1em; */
`;

export const StyledNavBar = styled.div`
  height: 12vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
`;

export const StyledFigure = styled.figure`
  margin: 1em;
`;

export const StyledRegisterBtn = styled.button`
  border-radius: 0.5em;
  border: none;
  margin-bottom: 0.7em;
  margin-right: 1em;
  padding: 0.7em;
  background-color: #090429;
  color: white;
  &:hover {
    background-color: #fbab06;
  }
`;
