import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import MoviesPanel from "../components/MoviesPanel/MoviesPanel";
import { fetchMovieSearch } from "../services/Movie.service";

export default function MainPage(){
    const [movies,setMovies] = useState([]);
    const [title, setTitle] = useState("");
    
    const fetchMovies = async (movieTitle) => {
        const response = await fetchMovieSearch(movieTitle);
        console.log(title);
        setMovies(response);
    };

    

    useEffect(()=>{
        setMovies([]);
    },[]);

    return(
        <div>
            <SearchPanel
                setString={setTitle}
                SearchCall={()=> fetchMovies(title)}
            ></SearchPanel> 
            
            <MoviesPanel
                movies={movies}
            ></MoviesPanel>   
        </div>
    );
}