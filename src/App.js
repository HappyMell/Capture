import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ScrollTop from "./components/scrolltop/ScrollTop";
import "./sass/base/_base.scss";
import { Lines } from "react-preloaders2";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ScrollTop />
      <Lines />
    </>
  );
}

export default App;
