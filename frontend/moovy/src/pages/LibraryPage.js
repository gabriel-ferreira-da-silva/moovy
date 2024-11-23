import React, { useEffect, useState } from "react";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import MoviesFullPanel from "../components/MoviesFullPanel/MoviesFullPanel";
import { fetchMoviesFromLibrary } from "../services/Movie.service";
import NoResultsPanel from "../components/NoResultsPanel/NoResultsPanel";

export default function LibraryPage() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const fetchMovies = async () => {
    const response = await fetchMoviesFromLibrary();
    console.log(`response ${response.movies}`);
    setMovies(response.movies);
  };

  const fetchMoviesWrapper = async () => {
    await fetchMovies();
  };

  useEffect(()=>{
    fetchMoviesWrapper();
  },[])

  return (
    <div>
      <SearchPanel pageText="My Library" setTitle={setTitle} SearchCall={fetchMoviesWrapper} />

      {movies.length !== 0 ? (
        <MoviesFullPanel movies={movies} />
      ) : (
        <NoResultsPanel
          message="Nenhum filme com este título foi encontrado na sua biblioteca ou você pesquisou usando termos inválidos"
        />
      )}
    </div>
  );
}
