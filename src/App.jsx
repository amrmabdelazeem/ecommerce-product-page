import { useState } from "react";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import Product from "./components/Product";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Nav />
      <Carousel />
      <Product onIncrease = {handleIncrease} onDecrease = {handleDecrease} count={count}/>
    </>
  );
}
