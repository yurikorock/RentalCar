import { useState } from "react";
import css from "./ElementBlockLeft.module.css";
import toast, { Toaster } from "react-hot-toast";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Booking date is required"),
  comment: Yup.string().max(200, "Comment must be under 200 characters"),
});

export default function ElementBlockLeft({ car }) {
  const [dateInput, setDateInput] = useState(true);

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Car rental completed successfully");
    resetForm();
  };
  const handleDateInput = () => {
    setDateInput(false);
  };

  const { img, brand, model, year, rentalPrice } = car;
  return (
    <div className={css.left_block}>
      <div className={css.img}>
        <img src={img} alt={`${brand} ${model}`} />
      </div>

      <div className={css.form_container}>
        <h2 className={css.form_title}>Book your car now</h2>
        <p className={css.form_text}>
          Stay connected! We are always ready to help you.
        </p>

        <Formik
          initialValues={{ name: "", email: "", date: "", comment: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <Field className={css.input} name="name" placeholder="Name*" />
            <ErrorMessage className={css.error} component="div" name="name" />

            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage className={css.error} component="div" name="email" />
            <div className={css.date_wrap}>
              <Field
                className={css.input}
                type="date"
                name="date"
                placeholder="Booking date"
              />
              <ErrorMessage className={css.error} component="div" name="date" />
              {dateInput && (
                <span
                  className={css.date_placeholder}
                  onClick={handleDateInput}
                >
                  Booking date
                </span>
              )}
            </div>
            <Field
              as="textarea"
              className={css.textarea}
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage
              className={css.error}
              component="div"
              name="comment"
            />

            <button className={css.button} type="submit">
              Send
            </button>
          </Form>
        </Formik>
      </div>
      <Toaster />
    </div>
  );
}
