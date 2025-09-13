import { useDispatch, useSelector } from "react-redux";
import CarListItem from "../CarListItem/CarListItem.jsx";
import {
  selectCarsList,
  selectError,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/selectors.js";
import { useEffect } from "react";
import { getCarsList } from "../../redux/operations.js";
import css from "./CarList.module.css";
import { setPage } from "../../redux/slice.js";

export default function CarList() {
  const carsList = useSelector(selectCarsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsList({
    page,
    brand: filters.brand,
    rentalPrice: filters.rentalPrice,
    minMileage: filters.minMileage,
    maxMileage: filters.maxMileage,
  }));
  }, [
    dispatch,
    page,
    filters.brand,
    filters.rentalPrice,
    filters.minMileage,
    filters.maxMileage,
  ]);

  //   const filters = useSelector(state => state.filters);

  // useEffect(() => {
  //   dispatch(getCarsList());
  // }, [dispatch, filters.brand, filters.rentalPrice, filters.minMileage, filters.maxMileage, filters.page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div>
      <ul className={css.list}>
        {carsList.map((item) => (
          <li key={item.id} className={css.item}>
            <CarListItem data={item} />
          </li>
        ))}
      </ul>
      {page < totalPages && (
        <button
          type="button"
          className={css.btn}
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
