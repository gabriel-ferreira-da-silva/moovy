import React, { useEffect, useState } from "react";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import MoviesFullPanel from "../components/MoviesFullPanel/MoviesFullPanel";
import { fetchMoviesFromLibrary } from "../services/Movie.service";
import { deleteMovieFromLibrary } from "../services/Movie.service";
import NoResultsPanel from "../components/NoResultsPanel/NoResultsPanel";
import { Alert } from "@mui/material";
import { OrbitProgress } from "react-loading-indicators";

export default function LibraryPage() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(false);
    const response = await fetchMoviesFromLibrary();
    console.log(`response ${JSON.stringify(response.result)}`);
    setMovies(response.result);
    setLoading(false);

  };

  const [message, setMessage] = useState(""); 
  const [showMessage, setShowMessage] = useState(null);

  const fetchMoviesWrapper = async () => {
    await fetchMovies();
  };


  const deleteMovieWrapper = async (imdbID) => {
    const response  = await deleteMovieFromLibrary(imdbID);
    console.log(response.data);

    if (response.success) {
      setMessage(<Alert severity="success" variant="filled" >Movie delete successfully.</Alert>);
    } else {
      setMessage(<Alert severity="error" variant="filled" >Movie could not be delete </Alert>);
    }
    setShowMessage(true);
    const updatedMovies = movies.filter((movie) => movie.imdbID !== imdbID);
    setMovies(updatedMovies);

    setTimeout(() => setShowMessage(false), 3000); 
  };

  useEffect(()=>{
    fetchMoviesWrapper();
  },[])


  return (
    <div>

      {showMessage && message}

      <SearchPanel pageText="My Library" setTitle={setTitle} SearchCall={fetchMoviesWrapper} />

      <div>
        {movies.length !== 0 ? (
          <div>
            {
              loading ?
              <div style={{display: "flex", margin:"10%",justifyContent:"center", justifySelf:"center", alignContent:"center", alignSelf:"center"}}>
                <OrbitProgress dense color="#f5af22" size="large" text="" textColor="" />
              </div>
              :
              <MoviesFullPanel movies={movies} movieFullCardCallBack={deleteMovieWrapper}/>
            }
          </div>

        ) : (
          <NoResultsPanel
            message="Nenhum filme com este título foi encontrado ou você pesquisou usando termos inválidos"
          />
        )}

      </div>

      
    </div>
  );
}
