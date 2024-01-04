import { useState } from "react";
import Cart from "./Cart";

export default function Nav() {
  const [isClicked, setIsClicked] = useState(false);
  const [isCart, setIsCart] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleCart(){
    setIsCart(!isCart);
  }
  return (
    <nav className={`bg-white border-gray-200 flex justify-between `}>
    <Cart toggleCart={isCart}/>
      <div className="flex items-center gap-5 p-6">
        <button>
          <img
            className="size-4"
            src="src/assets/images/icon-menu.svg"
            alt="menu"
          />
        </button>
        <a href="/">
          <img
            className="h-5"
            src="src/assets/images/logo.svg"
            alt="page-logo"
          />
        </a>
      </div>
      <div className="flex items-center gap-5 p-6">
        <button className="relative" onClick={handleCart}>
          <img
            className="size-7"
            src="src/assets/images/icon-cart.svg"
            alt="icon-cart"
          />
          <span className="absolute bg-primary w-6 h-4 rounded-lg -top-1 text-xs text-white">0</span>
        </button>
        <img
          className="size-7"
          src="src/assets/images/image-avatar.png"
          alt="avatar"
        />
      </div>
      <div
        className={`absolute w-60 h-200 bg-lightBlue left-0 top-0 p-6 pt-7 ${
          isClicked ? "visible" : "hidden"
        } z-10`}
      >
        <button onClick={handleClick}>
          <img
            className="size-5 mb-10"
            src="src/assets/images/icon-close.svg"
            alt="close-icon"
          />
        </button>
        <ul>
          <li className="text-black font-700 mb-3">
            <a href="">Collections</a>
          </li>
          <li className="text-black font-700 mb-3">
            <a href="">Men</a>
          </li>
          <li className="text-black font-700 mb-3">
            <a href="">Women</a>
          </li>
          <li className="text-black font-700 mb-3">
            <a href="">About</a>
          </li>
          <li className="text-black font-700">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
