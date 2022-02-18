import React, { Component } from "react";
import Card from "./Card.jsx";
import axios from "axios";
import { API_HOST } from "../host.js";

const colorDeBorde = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "white",
];

const metrics = [
  {
    title: "MOVIES IN DB",
    cifra: 33,
    colorBorde: colorDeBorde[0],
    icono: ` fas fa-film `,
  },
  {
    title: "TOTAL AWARDS",
    cifra: 79,
    colorBorde: colorDeBorde[2],
    icono: ` fas fa-award `,
  },
  {
    title: "ACTOR QUANTITY",
    cifra: 80,
    colorBorde: colorDeBorde[3],
    icono: "fas fa-user",
  },
];

class ContentRowMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["", "", ""],
    };
  }
  async getCountMovies(urlMovies, urlActors, urlAwards) {
    //promise all recibe como array todas las promesas que deseamos ejecutar y als devuelve como array
    // lo hace en unsa sola quyry por ende tardaria menos , pero si una falla falla todo
    const data = await Promise.all([
      axios(urlMovies),
      axios(urlActors),
      axios(urlAwards),
    ]);
    //console.log(data);
    const totalMovies = data[0].data.meta.total;

    const totalActors = data[1].data.meta.total;

    const totalAwards = data[2].data.meta.total;

    this.setState({
      data: [totalMovies, totalActors, totalAwards],
    });
  }
  componentDidMount() {
    this.getCountMovies(
      `${API_HOST}/api/movies`,
      `${API_HOST}/api/actors`,
      `${API_HOST}/api/movies/awards`
    );
  }

  render() {
    const data = this.state;

    return (
      <div className="row">
        {/*     <!-- Movies in Data Base --> */}
        {metrics.map((metric, index) => {
          return (
            <Card
              title={metric.title}
              cifra={data.data[index]}
              colorBorde={metric.colorBorde}
              icono={metric.icono}
              key={metric.title + index}
            />
          );
        })}
        {/* <!-- Total awards --> */}
      </div>
    );
  }
}

export default ContentRowMovies;
