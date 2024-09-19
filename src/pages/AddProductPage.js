import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../componants/ProductForm";

export const AddProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    axios
      .post(`https://api.example.com/products`, values)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Add Product</h1>
      <ProductForm
        initialValues={{ title: "", description: "", image: "", date: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddProductPage;
