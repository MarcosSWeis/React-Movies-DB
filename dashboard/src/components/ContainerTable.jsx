import React, { Component } from "react";
import RowFrame from "./RowFrame";
import axios from "axios";
import { API_HOST } from "../host";
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
    this.setState({ movies: movies.data });
  }
  componentDidMount() {
    this.getMovies(`${API_HOST}/api/movies`);
  }
  render() {
    const movies = this.state.movies;
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
          {movies.map((movie) => (
            <RowFrame
              id={movie.id}
              title={movie.title}
              length={movie.length}
              genre={movie.genre ? movie.genre.name : ""}
              rating={movie.rating}
              awards={movie.awards}
              key={movie.id}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ContainerTable;
