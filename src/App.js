import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import DevicePage from "./pages/DevicePage";
import RegisterPage from "./pages/RegisterPage";
import CurrentPage from "./pages/CurrentPage";
import DetailPage from "./pages/DetailPage";
import CurrentUpdatePage from "./pages/CurrentUpdatePage";
import "./App.css";
import api from "./pages/component/api"; // Axios 설정

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />{" "}
          <Route path="/category/:categoryName" element={<DevicePage />} />
          <Route path="/DetailPage/:productName" element={<DetailPage />} />
          <Route path="/CurrentPage" element={<CurrentPage />} />
          <Route path="/CurrentUpdatePage" element={<CurrentUpdatePage />} />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/LoginPage" element={<LoginPage api={api} />} />
          <Route path="/RegisterPage" element={<RegisterPage api={api} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
