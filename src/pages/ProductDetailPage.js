import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.date}</p>
      <Link to="/" className="back-button">
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetailPage;
