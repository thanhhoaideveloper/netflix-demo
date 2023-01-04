import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllListLikeMovie } from "../store/reducers/movies";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import Navbar from "../components/Narbar";
import Card from "../components/Card";

export default function UserLike() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  const movies = useSelector((state) => state.movies.movies);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (email) {
      dispatch(getAllListLikeMovie(email));
    }
  }, [email, dispatch]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      navigate("/login");
    }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My list</h1>
        <div className="grid flex">
          {movies.map((movie, index) => {
            return <Card movieData={movie} key={movie.id} isLiked={true} />;
          })}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
