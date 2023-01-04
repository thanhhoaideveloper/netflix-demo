import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// import in project
import BackGroundImage from "../../components/BackGroundImage";
import Header from "../../components/Header";
import { firebaseAuth } from "../../utils/firebase-config";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (e) {
      console.log(e);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });
  return (
    <Container>
      <BackGroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column j-center a-center">
          <div className="text flex column a-center">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancels anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input
              name="email"
              type="email"
              value={formValue.email}
              onChange={(event) =>
                setFormValue({
                  ...formValue,
                  [event.target.name]: event.target.value,
                })
              }
              placeholder="Enter a your email"
            />
            {showPassword && (
              <input
                name="password"
                type="password"
                value={formValue.password}
                onChange={(event) =>
                  setFormValue({
                    ...formValue,
                    [event.target.name]: event.target.value,
                  })
                }
                placeholder="Enter a your password"
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get started</button>
            )}
          </div>
          <button onClick={handleSubmit}>Signup</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${(showPassword) =>
          showPassword ? "1fr 1fr" : "2fr 2fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
