import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./ProductForm.css";

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  image: Yup.string().url("Invalid URL").required("Required"),
  date: Yup.date().required("Required"),
});

const ProductForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form className="form-container">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field name="title" />
          {errors.title && touched.title ? (
            <div className="error">{errors.title}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field name="description" />
          {errors.description && touched.description ? (
            <div className="error">{errors.description}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <Field name="image" />
          {errors.image && touched.image ? (
            <div className="error">{errors.image}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <Field type="date" name="date" />
          {errors.date && touched.date ? (
            <div className="error">{errors.date}</div>
          ) : null}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default ProductForm;
