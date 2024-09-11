import React from "react";
import { decrement, increment } from "../redux/counterSlice.js";
import Button from "../UI/ButtonPrimary.js";
import { useDispatch, useSelector } from "react-redux";

// Counter Component using Redux
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button onClick={() => dispatch(decrement())} text="-" />
      <h1>{count}</h1>
      <Button onClick={() => dispatch(increment())} text="+" />
    </div>
  );
};

// Home Component
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      {/* <ProductCard product={product} /> */}
      <div className="App">
        <p>The Counter by Redux</p>
        <Counter />
      </div>
    </div>
  );
};

export default Home;
