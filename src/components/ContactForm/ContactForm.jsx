import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

// Схема валідації за допомогою Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <label htmlFor="name">
          <span>Name</span>
          <Field className={s.field} type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="number">
          <span>Number</span>
          <Field className={s.field} type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
