import { func } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import BtnPrevNextPage from "./BtnPrevNextPage";
import CardResultsSearch from "./CardResultsSearch";
import InputSearch from "./InputSearch";
//import noPoster from "../assets/images/no-poster.jpg";

function SearchMovies(props) {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const apiKey = "309af9cc"; // Intenta poner cualquier cosa antes para probar
  const searchInput = useRef();

  function onSearch(event) {
    setKeyword(searchInput.current.value);
    //searchInput.current.value = "";
    event.preventDefault();
  }
  function prevPage() {
    setPage(page == 1 ? "" : page - 1);
  }
  function nextPage() {
    setPage(page + 1);
  }
  async function getMovies() {
    console.log(keyword);
    const data = await fetch(
      `https://www.omdbapi.com/?s=${keyword}&page=${page}&apikey=${apiKey}`
    );
    const results = await data.json();
    console.log(results);
    setMovies(results.Search ? results : { default: "true" });
    //si movie.Search no existe corta ahi
  }
  useEffect(() => {
    getMovies();
  }, [page]);
  console.log(searchInput);
  useEffect(() => {
    getMovies();
  }, [keyword]);

  // Credenciales de API
  console.log(movies);
  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <InputSearch onSearch={onSearch} searchInput={searchInput} />
          {!movies.default && movies.Search && (
            <CardResultsSearch keyword={keyword} movies={movies.Search} />
          )}
          {!movies.default &&
            movies.Search &&
            Number(movies.totalResults) > 10 && (
              <BtnPrevNextPage prevPage={prevPage} nextPage={nextPage} />
            )}

          {keyword == "" && movies.default && (
            <div className="alert alert-warning text-center">
              Busque sus peliculas favoritas
            </div>
          )}
          {keyword != "" && movies.default && (
            <div className="alert alert-warning text-center">Cargando...</div>
          )}
          {keyword != "" && !movies.Search && (
            <div className="alert alert-warning text-center">
              No se encontraron películas
            </div>
          )}
        </>
      ) : (
        "no pusiste tu Api key, obtenela en https://www.omdbapi.com/apikey.aspx"
      )}
    </div>
  );
}

export default SearchMovies;
