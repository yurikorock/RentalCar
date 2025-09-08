import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "../pages/HomePage/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import AppHeader from "./AppHeader/AppHeader.jsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";

export default function App() {
  return (
    <div>
      <AppHeader/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
     
    </div>
  );
}
