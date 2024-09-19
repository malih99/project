import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../componants/ProductForm";

export const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (values) => {
    console.log("onSubmit", values);
    axios
      .put(`http://localhost:8000/products/${id}`, values)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Product</h1>
      <ProductForm initialValues={product} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProductPage;
