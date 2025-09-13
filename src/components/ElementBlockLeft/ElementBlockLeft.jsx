import { useState } from "react";
import css from "./ElementBlockLeft.module.css";

export default function ElementBlockLeft() {
  const [dateInput, setDateInput] = useState(true);
  const handleSubmit = (e) => {
    return console.log("handleSubmit");
  };
  const handleDateInput = () => {
    setDateInput(false);
  };
  return (
    <div className={css.left_block}>
      <div className={css.img}>
        <img src="../../../public/osminog.jpg" alt="" />
      </div>
      <div className={css.form_container}>
        <h2 className={css.form_title}>Book your car now</h2>
        <p className={css.form_text}>
          Stay connected! We are always ready to help you.
        </p>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
            maxLength={20}
          />
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email*"
            maxLength={30}
          />
          <div className={css.date_wrap}>
            <input
              className={css.input}
              type="date"
              name="date"
              placeholder="Booking date"
            />
            {dateInput && (
              <span className={css.date_placeholder} onClick={handleDateInput}>
                Booking date
              </span>
            )}
          </div>

          <textarea
            className={css.textarea}
            name="comment"
            placeholder="Comment"
          />
          <button className={css.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
