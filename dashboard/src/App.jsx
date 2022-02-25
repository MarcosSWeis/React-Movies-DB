import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import ContentRowMovies from "./components/ContentRowMovies";
import LastMovieInDb from "./components/LastMovieInDb";
import GenresInDb from "./components/GenresInDb";
import NotFound from "./components/NotFound";
import ContainerTable from "./components/ContainerTable";
import ContentWrapper from "./components/ContentWrapper";
import SearchMovie from "./components/SearchMovie";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <body>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route exact={true} path="/" element={<ContentWrapper />} />
          <Route path="/charts" element={<ContentRowMovies />} />
          <Route path="/pages" element={<LastMovieInDb />} />
          <Route path="/genres" element={<GenresInDb />} />
          <Route path="/tables" element={<ContainerTable />} />
          <Route path="/search" element={<SearchMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </body>
  );
}
export default App;
