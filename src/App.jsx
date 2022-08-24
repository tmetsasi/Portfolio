import "./Global.css";
import {Route, Routes} from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage/AboutUs";
import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import ToolsPage from "./pages/ToolsPage/ToolsPage";
import ServicesPage from "./pages/ServicesPage/Services";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<MainPage/>} />
      <Route path="/tyokalut" element={<ToolsPage/>} />
      <Route path="/me" element={<AboutUsPage/>} />
      <Route path="/palvelut" element={<ServicesPage/>} />

    </Routes>
  );
}

export default App;
