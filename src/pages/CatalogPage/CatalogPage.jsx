import CarList from "../../components/CarList/CarList.jsx";
import FilterCars from "../../components/FilterCars/FilterCars.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div>
      <FilterCars />
      <CarList />
    </div>
  );
}
