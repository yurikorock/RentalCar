import updateAddress from "../../helpers/helpers.js";

export default function CarListItem({ data }) {
  return (
    <div className={css.car - item}>
      <div className={img - container}>
        <img className={css.img} src={img} alt={brand} />
      </div>
      <div className={css.top - info - block}>
        <h2 className={css.car_name}>
          {brand} <span>{model}</span>, {year}
        </h2>
        <p className={css.price}>${rentalPrice}</p>
      </div>
      <div className={css.center - block}>
        <p>{updateAddress(address)}</p>|<p>{rentalCompany}</p>
      </div>
      <div>
        <p>{type}</p>|<p>{mileage}</p>
      </div>
    </div>
  );
}
