import css from "./ElementBlockRight.module.css";
import sprite from "../../../public/sprite.svg";
import updateAddress from "../../helpers/helpers.js";

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
      {/* TOP-BLOCK */}
      <div className={css.top_block}>
        <div className={css.name_block}>
          <h2 className={css.name}>
            {brand} {model}, {year}
          </h2>
          <p className={css.id}>Id: {id.slice(0, 4)}</p>
        </div>
        <div className={css.address_box}>
          <div className={css.address_box_item}>
            <svg className={css.icon_location}>
              <use href={sprite + "#icon-location"} />
            </svg>
            <p className={css.address}>{updateAddress(address)}</p>
          </div>
          <p className={css.mileage}>Mileage: {mileage.toLocaleString()} km</p>
        </div>
        <p className={css.price}>$ {rentalPrice}</p>
        <p className={css.description}>{description}</p>
      </div>
      {/* CONDITIONS */}
      <div className={css.conditions_block}>
        <p>Rental conditions:</p>
        <ul className={css.cond_list}>
            {rentalConditions.map((item, index)=> (
            <li key={index} className={css.cond_list_item}>
                <svg className={css.icon}>
                    <use href={sprite + "#icon-check-circle"}></use>
                </svg>
                <p>{item}</p>
            </li>
            ))}
        </ul>
      </div>
      {/* CAR SPECIFICATIONS */}
      <div className={css.specification_block}>
        <p>Car specification:</p>
        <div className={css.year}>
            <svg className={css.icon_calendar}>
                <use href={sprite + "#icon-calendar"}></use>
            </svg>
            <p>Year: {year}</p>
        </div>
        <div className={css.type}>
            <svg className={css.icon_car}>
                <use href={sprite + "#icon-car"}></use>
            </svg>
            <p>Type: {type}</p>
        </div>
        <div className={css.consumption}>
            <svg className={css.icon_fuel_pump}>
                <use href={sprite + "#icon-fuel-pump"}></use>
            </svg>
            <p>Fuel consumption: {fuelConsumption}</p>
        </div>
         <div className={css.engine_size}>
            <svg className={css.icon_gear}>
                <use href={sprite + "#icon-gear"}></use>
            </svg>
            <p>Engine size: {engineSize}</p>
        </div>
      </div>
      {/* FUNCTIONALITIES */}
      <div className={css.functionalities_block}>
        <p>Accessories and functionalities:</p>
        <ul className={css.functionalities_list}>
            {accessories.map((item, index)=> (
            <li key={index} className={css.functionalities_list_item}>
                <svg className={css.icon}>
                    <use href={sprite + "#icon-check-circle"}></use>
                </svg>
                <p>{item}</p>
            </li>
            ))}
            {functionalities.map((item, index)=> (
            <li key={index} className={css.functionalities_list_item}>
                <svg className={css.icon}>
                    <use href={sprite + "#icon-check-circle"}></use>
                </svg>
                <p>{item}</p>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
