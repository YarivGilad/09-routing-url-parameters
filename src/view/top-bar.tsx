import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { flexbox } from "../styles/mixins.ts";
import logo from '../assets/react.svg';


interface TopBarProps {
  children?: ReactNode;
}

export function TopBar({ children }: TopBarProps) {
  
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/`);
  };

  return (
    <Div>
      {children}
      <img className="logo" src={logo} alt="logo" onClick={clickHandler}/>
    </Div>
  );
}

const spin = keyframes`
  to {transform: rotate(360deg)}
`;

const Div = styled.div`
  background: slategray;

  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;

  /* display: flex;
  align-items: center;
  justify-content: space-around; */
  ${flexbox({ jc: "space-around" })}

  h1 {
    font-size: 3rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    color: papayawhip;
    /* @media (min-width: 768px) {
      color: darkblue;
    } */
  }

  img.logo {
    cursor: pointer;
    height: 5rem;
    animation: ${spin} 2s linear infinite;
  }

  /* @media (min-width: 768px) {
    background-color: skyblue;
  } */
`;