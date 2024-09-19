import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductList from "../componants/ProductList";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ProductList products={filteredProducts} />
      <Link to="/add">Add Product</Link>
    </div>
  );
};

export default HomePage;
