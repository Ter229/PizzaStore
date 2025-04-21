import "./scss/app.scss";
import Header from "./Components/Header/Header.tsx";
import Home from "./Pages/Home.tsx";
import NotFound from "./Pages/NotFound.tsx";
import Cart from "./Pages/Cart.tsx";
import { Routes, Route } from "react-router-dom";
import React from "react";
import FullPizza from "./Pages/FullPizza.tsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
