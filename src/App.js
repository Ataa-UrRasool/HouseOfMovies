import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./SearchIcon.svg";
import MovieCard from "./MovieCard";

// Api key ==> 5b7e9877

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5b7e9877";


const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Marvel");
  }, []);

  return (
    <div className="app">
      <h1>House of Movies</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
