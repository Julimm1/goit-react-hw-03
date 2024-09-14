import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  // Схема валідації за допомогою Yup
  const onlyWords = /^[a-zA-Zа-яА-Я\s]+$/;
  const onlyNumbers = /^\d{3}\d{2}\d{2}$/;
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .matches(onlyWords, "Name must contain only letters")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    number: Yup.string()
      .matches(onlyNumbers, "Number must be in format xxx-xx-xx")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Enter name..."
            />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              className={s.input}
              type="tel"
              name="number"
              placeholder="123-45-67"
            />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button
            type="submit"
            className={s.btn}
            disabled={isSubmitting.name === false}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
