import React, { useEffect, useState } from "react";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import MoviesFullPanel from "../components/MoviesFullPanel/MoviesFullPanel";
import { fetchMoviesFromLibrary } from "../services/Movie.service";
import { deleteMovieFromLibrary } from "../services/Movie.service";
import NoResultsPanel from "../components/NoResultsPanel/NoResultsPanel";
import { Alert } from "@mui/material";

export default function LibraryPage() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const fetchMovies = async () => {
    const response = await fetchMoviesFromLibrary();
    console.log(`response ${JSON.stringify(response.result)}`);
    setMovies(response.result);
  };

  const [message, setMessage] = useState(""); 
  const [showMessage, setShowMessage] = useState(null);

  const deleteMovie = async (imdbID) => {
    const response = await deleteMovieFromLibrary(imdbID);
  };

  const fetchMoviesWrapper = async () => {
    await fetchMovies();
  };


  const deleteMovieWrapper = async (imdbID) => {
    const response  = await deleteMovieFromLibrary(imdbID);
    console.log(response.data); 
    console.log("h**********************")
    console.log(JSON.stringify(response));

    if (response.success) {
      setMessage(<Alert severity="success" variant="filled" >Movie delete successfully.</Alert>);
    } else {
      setMessage(<Alert severity="error" variant="filled" >Movie could not be delete </Alert>);
    }
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 3000);   
  };

  useEffect(()=>{
    fetchMoviesWrapper();
  },[])

  return (
    <div>
      {showMessage && message}

      <SearchPanel pageText="My Library" setTitle={setTitle} SearchCall={fetchMoviesWrapper} />

      {movies.length !== 0 ? (
        <MoviesFullPanel movies={movies} movieFullCardCallBack={deleteMovieWrapper}/>
      ) : (
        <NoResultsPanel
          message="Nenhum filme com este título foi encontrado na sua biblioteca ou você pesquisou usando termos inválidos"
        />
      )}
    </div>
  );
}
