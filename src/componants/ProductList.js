import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const handleDelete = (id) => {
    axios
      .delete(`https://api.example.com/products/${id}`)
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  };

  return (
    <div className="product-list">
           {" "}
      {products.map((product) => (
        <div key={product.id} className="product-item">
                    <img src={product.image} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.date}</p>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                    <Link to={`/edit/${product.id}`}>Edit</Link>
                   {" "}
          <button onClick={() => handleDelete(product.id)}>Delete</button>
                 {" "}
        </div>
      ))}
         {" "}
    </div>
  );
};

export default ProductList;
