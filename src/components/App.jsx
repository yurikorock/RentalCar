import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Layout/Layout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import ElementPage from "../pages/ElementPage/ElementPage.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<ElementPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
