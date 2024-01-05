import { useState } from "react";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import Product from "./components/Product";
import Lightbox from "./components/Lightbox";

export default function App() {
  const [count, setCount] = useState(0);
  const[cartState, setCartState] = useState(false);
  const [toggleBox, setToggleBox] = useState(false);

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
    function handleBox(){
    setToggleBox(!toggleBox);
  }
  function handleXIcon(){
    setToggleBox(false); 
  }
  return (
    <>
      <Nav cartNotify={cartState} count={count} onDelete={handleDelete}/>
      <Carousel onBox={handleBox}/>
      <Product onIncrease = {handleIncrease} onDecrease = {handleDecrease} count={count} onCart={handleCartItems} />
      <Lightbox toggle= {toggleBox} onCloseBox={handleXIcon}/>
    </>
  );
}
