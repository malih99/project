import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field name="description" />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <Field name="image" />
          {errors.image && touched.image ? <div>{errors.image}</div> : null}
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <Field type="date" name="date" />
          {errors.date && touched.date ? <div>{errors.date}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default ProductForm;
