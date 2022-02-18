import React, { Component } from "react";
import RowFrame from "./RowFrame";
import axios from "axios";
import { API_HOST } from "../host";

/* //iria un fetch  para traer los datos y recorro ese array con datos para pintarlos en la componente */
const dataTable = [
  {
    title: "Titanic",
    length: 150,
    rating: 9.3,
    genre: "Romance",
    awards: 8,
  },
  {
    title: "Transformes",
    length: 166,
    rating: 8.2,
    genre: "Ciencia Ficción",
    awards: 3,
  },
  {
    title: "Jurassic Park",
    length: 133,
    rating: 8.6,
    genre: "Ciencia Ficción",
    awards: 9,
  },
  {
    title: "Dragon Ball Super",
    length: 130,
    rating: 10,
    genre: "Anime",
    awards: 11,
  },
];

class ContainerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  async getMovies(url) {
    const data = await axios(url);
    const movies = data.data;
    //  console.log(movies);

    this.setState({ movies: movies.data });
  }
  componentDidMount() {
    this.getMovies(`${API_HOST}/api/movies`);
  }
  render() {
    const movies = this.state.movies;
    console.log(movies);
    // const title = movies.title;
    // const length = movies.length;
    // const rating = movies.rating;
    //  const genre = movies.genre.name;
    // const awards = movies.awards;

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Título</th>
            <th scope="col">Duración</th>
            <th scope="col">Rating</th>
            <th scope="col">Género</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((movie) => {
            return movies.map((movie) => (
              <RowFrame
                id={movie.id}
                title={movie.title}
                length={movie.length}
                rating={movie.rating}
                awards={movie.awards}
                key={movie.id}
              />
            ));
          })}
        </tbody>
      </table>
    );
  }
}

export default ContainerTable;
