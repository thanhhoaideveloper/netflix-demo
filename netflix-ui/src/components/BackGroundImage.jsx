import React from "react";
import styled from "styled-components";

// import in project
import background from "../assets/login.jpg";

export default function BackGroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
