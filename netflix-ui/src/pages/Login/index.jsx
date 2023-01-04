import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// import in project
import BackGroundImage from "../../components/BackGroundImage";
import Header from "../../components/Header";
import { firebaseAuth } from "../../utils/firebase-config";

export default function Login() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const { email, password } = formValue;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (e) {
      console.log(e);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentuser) => {
    if (currentuser) {
      navigate("/");
    }
  });

  return (
    <Container>
      <BackGroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="container flex column a-center j-center">
            <div className="form-header">
              <h3>Login</h3>
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
              <button onClick={handleSubmit}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`\
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left:0;
        height: 100vh;
        width: 100vw;
        .form-container{
            height: 100%;
            color: white;
            .container{
                background-color: rgba(0,0,0,0.5);
                padding: 2rem;
                .form{
                    text-align: center;
                    width: 300px;
                    overflow: hidden;
                    input{
                        width: 100%;
                        padding: 10px;
                        margin: 10px 0px;
                        outline: none !important;
                    }
                    button {
                        color: white;
                        display: block;
                        width: 100%;
                        padding: 5px;
                        font-size: 16px;
                        background-color: #e50914;
                        border: none;
                    }
                }
            }
        }
    }
`;
