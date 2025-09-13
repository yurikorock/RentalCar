import css from "./ElementBlockRight.module.css";
import sprite from "../../../public/sprite.svg"
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
                    <use href={sprite + "#icon-location"}/>
                </svg>
                 <p className={css.address}>{updateAddress(address)}</p>
            </div>
            <p className={css.mileage}>Mileage: {mileage.toLocaleString()} km</p>
          </div>
          <p className={css.price}>$ {rentalPrice}</p>
          <p className={css.description}>{description}</p>
      </div>
    </div>
  );
}
