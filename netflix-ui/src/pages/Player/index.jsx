import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// import in project
import video from "../../assets/video.mp4";

export default function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="play">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} controls muted loop autoPlay />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .play {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
