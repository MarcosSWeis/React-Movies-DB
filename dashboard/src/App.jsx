import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import ContentWrapper from "./components/ContentWrapper";

function App() {
  return (
    <body>
      <div id="wrapper">
        <SideBar />
        <ContentWrapper />
      </div>
    </body>
  );
}
export default App;
