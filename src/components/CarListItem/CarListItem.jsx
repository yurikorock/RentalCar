import updateAddress from "../../helpers/helpers.js";
import { Link } from "react-router-dom";
import css from "./CarListItem.module.css";
import sprite from "../../../public/sprite.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors.js";
import { addToFavorites, removeFromFavorites } from "../../redux/favoritesSlice.js";

export default function CarListItem({ data }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteCars);
  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = data;

  const isFavorite = favorites.some((car)=>car.id === id);

const toggleFavorite = ()=>{
    if(isFavorite){
        dispatch(removeFromFavorites(id));
    } else {
        dispatch(addToFavorites(data));
    }
}

  return (
    <div className={css.car_item}>
      <div className={css.img_container}>
        <img className={css.img} src={img} alt={brand} />
        <button className={css.favorite_btn} type="button" onClick={toggleFavorite}>
          {isFavorite ? (
            <svg width="24" height="24">
              <use href={`${sprite}#icon-like-active`}></use>
            </svg>
          ) : (
            <svg width="24" height="24">
              <use href={`${sprite}#icon-like-default`}></use>
            </svg>
          )}
        </button>
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
      <Link className={css.link} to={`/catalog/${id}`}>
        Read more
      </Link>
    </div>
  );
}
