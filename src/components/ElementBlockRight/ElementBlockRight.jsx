import css from "./ElementBlockRight.module.css";

export default function ElementBlockRight({ car }) {
  const {
    id,
    year,
    brand,
    model,
    type,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;
  return (
    <div className={css.right_block}>
      <div className={css.name_block}>
        <h2>
          {brand} {model}, {year}
        </h2>
        <p>Id: {id.slice(0, 4)}</p>
      </div>
    </div>
  );
}
