import React, { useState } from "react";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import MoviesPanel from "../components/MoviesPanel/MoviesPanel";
import { fetchMovieSearch } from "../services/Movie.service";
import NoResultsPanel from "../components/NoResultsPanel/NoResultsPanel";
import { saveMovieInLibrary } from "../services/Movie.service";
import Alert from '@mui/material/Alert';

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");


  const fetchMovies = async (movieTitle) => {
    const response = await fetchMovieSearch(movieTitle);
    console.log(`title is ${movieTitle}`);
    console.log(response);
    setMovies(response);
  };

  const [message, setMessage] = useState(""); 
  const [showMessage, setShowMessage] = useState(null);

  const saveMovie = async (imdbID) => {
    const response = await saveMovieInLibrary(imdbID);

    if (response.success) {
      setMessage(<Alert severity="success" variant="filled" >Movie saved in library successfully.</Alert>);
    } else {
      setMessage(<Alert severity="error" variant="filled" >Movie could not be saved in library</Alert>);
    }
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 3000);
  };

  const fetchMoviesWrapper = async () => {
    await fetchMovies(title);
  };

  return (
    <div>
      {showMessage && message}

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
