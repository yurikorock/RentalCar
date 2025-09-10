import { useDispatch, useSelector } from "react-redux";
import CarListItem from "../CarListItem/CarListItem.jsx";
import { selectCarsList, selectError, selectIsLoading } from "../../redux/selectors.js";
import { useEffect } from "react";
import { getCarsList } from "../../redux/operations.js";
import css from "./CarList.module.css"

export default function CarList() {
  const carsList = useSelector(selectCarsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsList());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.list}>
        {carsList.map((item) => (
          <li key={item.id} className={css.item}>
            <CarListItem data={item} />
          </li>
        ))}
      </ul>
      <button type="button" className={css.btn}>Load more</button>
    </div>
  );
}
