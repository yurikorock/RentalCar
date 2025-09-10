import { useDispatch, useSelector } from "react-redux";
import CarListItem from "../CarListItem/CarListItem.jsx";
import { selectCarsList, selectError, selectIsLoading } from "../../redux/selectors.js";
import { useEffect } from "react";
import { getCarsList } from "../../redux/operations.js";

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
      <ul>
        {carsList.map((item) => (
          <li key={item.id}>
            <CarListItem data={item} />
          </li>
        ))}
      </ul>
      <button type="button"></button>
    </div>
  );
}
