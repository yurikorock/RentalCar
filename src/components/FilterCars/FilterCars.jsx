import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./FilterCars.module.css";
import { useDispatch } from "react-redux";
import {
  setBrand,
  setMaxMileage,
  setMinMileage,
  setPage,
  setRentalPrice,
} from "../../redux/filtersSlice.js";
import { getCarsList } from "../../redux/operations.js";

const initialValues = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

const carBrands = [
  "Aston Martin",
  "Audi",
  "BMW",
  "Bentley",
  "Buick",
  "Chevrolet",
  "Chrysler",
  "GMC",
  "HUMMER",
  "Hyundai",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lincoln",
  "MINI",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Pontiac",
  "Subaru",
  "Volvo",
];

const prices = Array.from({ length: 13 }, (_, i) => 30 + i * 10);

export default function FilterCars() {
  const brandFieldId = useId();
  const priceFieldId = useId();
  const mileageFromId = useId();
  const mileageToId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // console.log("Filter values:", values);

    dispatch(setBrand(values.brand));
    dispatch(setRentalPrice(values.rentalPrice));
    dispatch(setMinMileage(values.minMileage));
    dispatch(setMaxMileage(values.maxMileage));
    dispatch(setPage(1));

    dispatch(
      getCarsList({
        page: 1,
        brand: values.brand,
        rentalPrice: values.rentalPrice,
        minMileage: values.minMileage,
        maxMileage: values.maxMileage,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        {/* Car brand */}
        <label className={css.label} htmlFor={brandFieldId}>
          Car brand
          <Field
            as="select"
            name="brand"
            id={brandFieldId}
            className={css.select}
          >
            <option value="">Choose a brand</option>
            {carBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </label>

        {/* Price per hour */}
        <label className={css.label} htmlFor={priceFieldId}>
          Price / 1 hour
          <Field
            as="select"
            name="rentalPrice"
            id={priceFieldId}
            className={css.select}
          >
            <option value="">Choose a price</option>
            {prices.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </Field>
        </label>

        {/* Car mileage */}
        <label className={css.label}>
          Car mileage / km
          <div className={css.mileageGroup}>
            <Field
              type="number"
              name="minMileage"
              id={mileageFromId}
              placeholder="From"
              className={css.mileageInput}
            />
            <Field
              type="number"
              name="maxMileage"
              id={mileageToId}
              placeholder="To"
              className={css.mileageInput}
            />
          </div>
        </label>

        <button type="submit" className={css.button}>
          Search
        </button>
      </Form>
    </Formik>
  );
}
