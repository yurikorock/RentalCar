import updateAddress from "../../helpers/helpers.js";
import { Link } from "react-router-dom";
import css from "./CarListItem.module.css"

export default function CarListItem({ data }) {
    const { img, brand, model, year, rentalPrice, address, rentalCompany, type, mileage } = data;
  return (
    <div className={css.car_item}>
      <div className={css.img_container}>
        <img className={css.img} src={img} alt={brand} />
      </div>
      <div className={css.top_info_block}>
        <h2 className={css.car_name}>
          {brand} <span>{model}</span>, {year}
        </h2>
        <p className={css.price}>${rentalPrice}</p>
      </div>
      <div className={css.center_block}>
        <p>{updateAddress(address)}</p>|<p>{rentalCompany}</p>
      </div>
      <div className={css.bottom_block}>
        <p>{type}</p>|<p>{mileage.toLocaleString()} km</p>
      </div>
       <Link className={css.link} >Read more</Link>
       {/* <Link className={css.link} to={`/catalog/${id}`}>Read more</Link> */}
    </div>
  );
}
