import React, { useState } from "react";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import MoviesPanel from "../components/MoviesPanel/MoviesPanel";
import { fetchMovieSearch } from "../services/Movie.service";
import NoResultsPanel from "../components/NoResultsPanel/NoResultsPanel";
import { saveMovieInLibrary } from "../services/Movie.service";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const fetchMovies = async (movieTitle) => {
    const response = await fetchMovieSearch(movieTitle);
    console.log(`title is ${movieTitle}`);
    setMovies(response);
  };

  const saveMovie = async (imdbID) => {
    const response = await saveMovieInLibrary(imdbID);
    console.log(response);
  }

  const fetchMoviesWrapper = async () => {
    await fetchMovies(title);
  };

  return (
    <div>
      <SearchPanel pageText="Search" setTitle={setTitle} SearchCall={fetchMoviesWrapper} />

      {movies.length !== 0 ? (
        <MoviesPanel movies={movies} movieCardCallback={saveMovie}/>
      ) : (
        <NoResultsPanel
          message="Nenhum filme com este título foi encontrado ou você pesquisou usando termos inválidos"
        />
      )}
    </div>
  );
}
