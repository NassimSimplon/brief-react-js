import "./App.css";
import React from "react";
import Nass from "./components/navbar.js";
import Apropo from "./components/apropo.js";
import Cara from "./components/card.js";
import "react-bootstrap";
import Part from "./components/patner.js";
import Record from "./components/record.js";
import Country from "./components/country.js";
import Footer from "./components/footer.js"

function App() {
  return (
    <div className="App">
      <Nass />
      <Apropo />
      <br />
      <br />
      <br />
      <br />
      <Cara />

      <Part />
      <Record />

      <br />
      <Country />
      <br/>
      <br/>
      <br/>
      <Footer />

    </div>
  );
}

export default App;
