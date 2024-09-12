import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice"; // Adjust the import path if needed

import SearchBar from "./SearchBar";


const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>

  
      <div>
        <h2>Product List</h2>
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>{product.description}</p>
                <p>Stock: {product.stock}</p>
              </li>
            ))
          ) : (
            <p>No products available</p>
          )}
        </ul>
      </div>
    </div>
  );
};



export default Home;
