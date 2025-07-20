import axios from "axios";

const urlTrend = "https://api.themoviedb.org/3/trending/movie/day";
const urlSearch = "https://api.themoviedb.org/3/search/movie";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjA0ZjEzODE0NzRjNDhlOWE1MDMxNDEwZTVmODJiNiIsIm5iZiI6MTc1Mjk1NDA0NS4yMzcsInN1YiI6IjY4N2JmNGJkMzhiZDkxMDc5MTU1YzgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-wxFzvLydunJLKiNDjPtiFHytG4kUN34yg0EQQ_aWA";

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    accept: "application/json",
  },
  params: {
    language: "en-US",
    page: 1,
  },
};

export const fetchTrending = async () => {
  const { data } = await axios.get(urlTrend, options);
  return data.results;
};

export const fetchSearchFilms = async (query) => {
  const { data } = await axios.get(urlSearch, {
    ...options,
    params: {
      ...options.params,
      query,
    },
  });
  return data.results;
};

export const fetchFilmById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return data;
};

export const fetchCast = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return data;
};

export const fetchReviews = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return data;
};
