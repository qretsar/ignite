import React from "react";
//Components and pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
//Styles
import GlobalStyles from "./components/GlobalStyles";

//Router
import { Route, Routes, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/game/:id"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
