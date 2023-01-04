import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";

function Slider({ movies }) {
  const getMoviesFromTo = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider title="Trending Now" data={getMoviesFromTo(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromTo(10, 20)} />
      <CardSlider title="Blockbuster Movies" data={getMoviesFromTo(20, 30)} />
      <CardSlider title="Popular On Netflix" data={getMoviesFromTo(30, 40)} />
      <CardSlider title="Action Movies" data={getMoviesFromTo(40, 50)} />
      <CardSlider title="Epics" data={getMoviesFromTo(50, 60)} />
    </Container>
  );
}

const Container = styled.div``;

export default React.memo(Slider);
