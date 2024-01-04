import { useState } from "react";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import Product from "./components/Product";

export default function App() {
  const [count, setCount] = useState(0);
  const[cartState, setCartState] = useState(false);
  
  function handleCartItems(){
    setCartState(!cartState);
  }

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
      <Nav cartNotify={cartState} count={count}/>
      <Carousel />
      <Product onIncrease = {handleIncrease} onDecrease = {handleDecrease} count={count} onCart={handleCartItems}/>
    </>
  );
}
