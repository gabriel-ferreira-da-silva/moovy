import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import MoviesPanel from "../components/MoviesPanel/MoviesPanel";
import { fetchRandomMovies } from "../services/Movie.service";

export default function MainPage(){
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            const response = await fetchRandomMovies();
            console.log("**************");
            console.log("**************");
            console.log("**************");
            console.log(response);
            setMovies(response)
        };

        fetchMovies();
    },[]);
    
    return(
        <div>
            <SearchPanel></SearchPanel> 
            
            <MoviesPanel
            movies={movies}
            ></MoviesPanel>   
        </div>
    );
}