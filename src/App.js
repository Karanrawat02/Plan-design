import React from "react";
import "./App.css";
import Navbarr from "./components/Navbarr";
import Cardd from "./components/Cards";
import DetailsPage from "./components/Pages/DetailsPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbarr />

      <Routes>
        <Route path="/" element={<Cardd />}></Route>
        <Route path="/Pages/:slug" element={<DetailsPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
