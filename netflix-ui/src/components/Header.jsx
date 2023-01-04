import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// import in project
import logo from "../assets/logo.png";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <Container className="flex j-between a-center">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button
        onClick={() => (props.login ? navigate("/login") : navigate("/signup"))}
      >
        {props.login ? "Login" : "Signup"}
      </button>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: border;
    font-size: 1rem;
  }
`;
