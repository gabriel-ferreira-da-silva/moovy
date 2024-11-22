import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import MoviesPanel from "../components/MoviesPanel/MoviesPanel";
export default function MainPage(){
    const [movies,setMovies] = useState([]);
    useEffect(()=>{

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