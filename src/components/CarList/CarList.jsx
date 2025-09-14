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
import { BeatLoader } from "react-spinners";
import { useRef } from "react";

export default function CarList() {
  const carsList = useSelector(selectCarsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  const listEndRef = useRef(null);

  useEffect(() => {
    dispatch(
      getCarsList({
        page,
        brand: filters.brand,
        rentalPrice: filters.rentalPrice,
        minMileage: filters.minMileage,
        maxMileage: filters.maxMileage,
      })
    );
  }, [
    dispatch,
    page,
    filters.brand,
    filters.rentalPrice,
    filters.minMileage,
    filters.maxMileage,
  ]);

  useEffect(()=> {
    if(carsList.length > 0 && page > 1){
        listEndRef.current?.scrollIntoView({behavior:"smooth"})
    }
  }, [carsList, page]);

  //     const filters = useSelector(state => state.filters);

  //   useEffect(() => {
  //     dispatch(getCarsList());
  //   }, [dispatch, filters.brand, filters.rentalPrice, filters.minMileage, filters.maxMileage, filters.page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div>
      {isLoading && (
        <div className={css.loaderWrapper}>
          <BeatLoader color="#3470FF" />
        </div>
      )}

      <ul className={css.list}>
        {carsList.map((item) => (
          <li key={item.id} className={css.item}>
            <CarListItem data={item} />
          </li>
        ))}
        <div ref={listEndRef}></div>
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
