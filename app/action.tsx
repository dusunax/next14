"use server";
import Movie from "@components/movie";
import { API_AUTH, LANGUAGE_CONFIG, POSTER_URL } from "@constants/common";
import { IMovie } from "types/movie";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_AUTH,
  },
};

const languageConfig = LANGUAGE_CONFIG.ko;

const getPopularAPIUrl = (page) =>
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc&page=${page}&${languageConfig}`;
const getDetailsUrl = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}?${languageConfig}`;
const getMovieListUrl = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/videos`;

export async function getMovies(page: number) {
  const response = await fetch(getPopularAPIUrl(page), options);
  return await response.json();
}

export async function getMovieByComponents(page: number) {
  const response = await fetch(getPopularAPIUrl(page), options);
  const { results: data } = await response.json();

  return data.map((movie: IMovie, index) => (
    <Movie key={movie.id} {...movie} baseUrl={POSTER_URL} index={index} />
  ));
}

export async function getMovie(movie_id: string) {
  const response = await fetch(getDetailsUrl(movie_id), options);
  return await response.json();
}

export async function getVideos(movie_id: string) {
  const response = await fetch(getMovieListUrl(movie_id), options);

  return await response.json();
}

export async function getVideoByComponents(movie_id: string) {
  const response = await fetch(getMovieListUrl(movie_id), options);
  const { results: data } = await response.json();

  return data.map((video) => (
    <iframe
      key={video.id}
      src={`https://www.youtube.com/embed/${video.key}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={video.name}
    />
  ));
}
