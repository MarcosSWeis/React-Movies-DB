import React, { Component } from "react";
import CardGenresInDb from "./CardGenresInDb";
import axios from "axios";
import { API_HOST } from "../host";
class GenresInDb extends Component {
  constructor(props) {
    super(props);
    this.refCardBody = React.createRef();
    this.state = {
      genres: [],
      awaitColor: { backgroundColor: "red" },
    };
  }
  async apiCall(url) {
    const genres = await axios(url);
    const data = genres.data.data;
    //console.log(data);
    this.setState({ genres: data });
  }

  componentDidMount() {
    this.apiCall(`${API_HOST}/api/genres`);
  }

  render() {
    const genres = this.state.genres;
    let loading;
    if (genres.length === 0) {
      loading = this.state.awaitColor;
    } else {
      loading = "";
    }
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Genres in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {genres.map((genre) => (
                <CardGenresInDb genre={genre.name} key={genre.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenresInDb;
