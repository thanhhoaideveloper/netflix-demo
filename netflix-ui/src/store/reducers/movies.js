import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, TMDB_API_URL } from "../../utils/constant";
import userApi from "../../apis/user";

const initialState = {
  movies: [],
  genresloaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("movies/getGenres", async () => {
  const url = `${TMDB_API_URL}/genre/movie/list?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data.genres;
});

const createArrayFormRawData = async (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const moviesGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find((item) => item.id === genre);
      if (name) moviesGenres.push(name.name);
    });
    if (movie.backdrop_path) {
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: moviesGenres.slice(0, 3),
      });
    }
  });
};

const getRawData = async (api, genres, paging) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    await createArrayFormRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "movies/trending",
  async ({ type }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMDB_API_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
  }
);

export const fetchDataByGenre = createAsyncThunk(
  "movies/moviesByGenre",
  async ({ genre, type }, thunkApi) => {
    const {
      movies: { genres },
    } = thunkApi.getState();
    return getRawData(
      `${TMDB_API_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
      genres,
      true
    );
  }
);

export const getAllListLikeMovie = createAsyncThunk(
  "movies/getLiked",
  async (email) => {
    const result = await userApi.listLikeMovie(email);
    return result;
  }
);

export const removeLikeMovie = createAsyncThunk(
  "movies/removeLiked",
  async ({ email, movieId }) => {
    const result = await userApi.removeLiked(email, movieId);
    return result;
  }
);

const movies = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresloaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getAllListLikeMovie.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(removeLikeMovie.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default movies.reducer;
