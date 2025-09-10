import updateAddress from "../../helpers/helpers.js";
import css from "./CarListItem.module.css"

export default function CarListItem({ data }) {
    const { img, brand, model, year, rentalPrice, address, rentalCompany, type, mileage } = data;
  return (
    // <div className={css.car_item}>
    //   <div className={img_container}>
    //     <img className={css.img} src={img} alt={brand} />
    //   </div>
    //   <div className={css.top_info_block}>
    //     <h2 className={css.car_name}>
    //       {brand} <span>{model}</span>, {year}
    //     </h2>
    //     <p className={css.price}>${rentalPrice}</p>
    //   </div>
    //   <div className={css.center_block}>
    //     <p>{updateAddress(address)}</p>|<p>{rentalCompany}</p>
    //   </div>
    //   <div>
    //     <p>{type}</p>|<p>{mileage}</p>
    //   </div>
    // </div>
    <div >
      <div >
        <img  src={img} alt={brand} />
      </div>
      <div >
        <h2 >
          {brand} <span>{model}</span>, {year}
        </h2>
        <p >${rentalPrice}</p>
      </div>
      <div >
        <p>{updateAddress(address)}</p>|<p>{rentalCompany}</p>
      </div>
      <div>
        <p>{type}</p>|<p>{mileage.toLocaleString()} km</p>
      </div>
    </div>
  );
}
