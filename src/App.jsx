import { useState } from "react";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import Product from "./components/Product";

export default function App() {
  const [count, setCount] = useState(0);
  const[cartState, setCartState] = useState(false);
  
  function handleCartItems(){
    if(count > 0){
      setCartState(true);
    }
  }

  function handleDelete(){
    setCartState(false);
  }
  function handleIncrease() {
    setCount(count + 1);
    setCartState(false);
  }
  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
      setCartState(false);
    }
  }

  return (
    <>
      <Nav cartNotify={cartState} count={count} onDelete={handleDelete}/>
      <Carousel />
      <Product onIncrease = {handleIncrease} onDecrease = {handleDecrease} count={count} onCart={handleCartItems}/>
    </>
  );
}
