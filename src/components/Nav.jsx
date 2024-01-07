/* eslint-disable react/prop-types */
import { useState } from "react";
import Cart from "./Cart";

export default function Nav({ cartNotify, count, onDelete}) {
  const [isClicked, setIsClicked] = useState(false);
  const [isCart, setIsCart] = useState(false);

  function handleSideMenu() {
    setIsClicked(!isClicked);
    setIsCart(false);
  }

  function handleCart() {
    setIsCart(!isCart);
  }
  return (
    <nav className={`bg-white border-gray-200 flex justify-between xl:border-b-2 xl:border-gray-200 xl:pt-10 xl:pb-9 col-span-3 xl:mx-36 xl:mb-20`}>
      <div className={`absolute w-screen h-150 bg-black opacity-55 top-0 xl:left-0 z-10 xl:h-130 ${isClicked ? "visible" : "hidden"}`}></div>

      <Cart
        toggleCart={isCart}
        cartNotify={cartNotify}
        count={count}
        onDelete={onDelete}
      />
      <div className="flex items-center gap-3 p-6 xl:gap-16  xl:justify-center xl:p-0">
        <button onClick={handleSideMenu} className="xl:hidden">
          <img
            className="w-5 h-4"
            src="src/assets/images/icon-menu.svg"
            alt="Side menu with several navigation links"
          />
        </button>
        <a href="/">
          <img
            className="w-full h-4 xl:w-52 xl:h-5"
            src="src/assets/images/logo.svg"
            alt="Page logo that is the sneakers word"
          />
        </a>
        <div
        className={`absolute w-60 h-150 bg-lightBlue left-0 top-0 p-6 pt-7 ${
          isClicked ? "visible" : "hidden"
        } z-20 xl:static xl:bg-transparent xl:w-full xl:h-auto xl:p-0 xl:pt-0 xl:flex`}
      >
        <button onClick={handleSideMenu}>
          <img
            className="size-5 mb-10 xl:hidden xl:mb-0"
            src="src/assets/images/icon-close.svg"
            alt="Close icon shaped like X to hide the side menu"
          />
        </button>
        <ul className="xl:flex xl:gap-10 xl:pt-0">
          <li className="text-black font-700 mb-3 xl:mb-0 xl:text-gray-400 xl:font-400">
            <a className="xl:hover:text-black xl:pb-12 xl:hover:border-b-primary xl:hover:border-b-4" href="">Collections</a>
          </li>
          <li className="text-black font-700 mb-3 xl:mb-0 xl:text-gray-400 xl:font-400 ">
            <a className="xl:hover:text-black xl:pb-12 xl:hover:border-b-primary xl:hover:border-b-4" href="">Men</a>
          </li>
          <li className="text-black font-700 mb-3 xl:mb-0 xl:text-gray-400 xl:font-400 ">
            <a className="xl:hover:text-black xl:pb-12 xl:hover:border-b-primary xl:hover:border-b-4" href="">Women</a>
          </li>
          <li className="text-black font-700 mb-3 xl:mb-0 xl:text-gray-400 xl:font-400 ">
            <a className="xl:hover:text-black xl:pb-12 xl:hover:border-b-primary xl:hover:border-b-4" href="">About</a>
          </li>
          <li className="text-black font-700 xl:text-gray-400 xl:font-400">
            <a className="xl:hover:text-black xl:pb-12 xl:hover:border-b-primary xl:hover:border-b-4" href="">Contact</a>
          </li>
        </ul>
      </div>
      </div>
      <div className="flex items-center gap-4 p-6  xl:gap-10  xl:p-0">
        <button className="relative " onClick={handleCart}>
        <svg className="size-5 xl:size-8 xl:fill-gray-400 xl:hover:fill-black" viewBox="0 0 25 25"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"/></svg>
          <span
            className={`absolute bg-primary w-6 h-4 rounded-xl -top-1 text-xs text-white ${
              cartNotify ? "visible" : "hidden"
            } z-0`}
          >
            {1}
          </span>
        </button>
        <img
          className="size-7 xl:size-16 xl:hover:border-primary xl:hover:border-2 xl:rounded-full cursor-pointer"
          src="src/assets/images/image-avatar.png"
          alt="Avatar of the current user"
        />
      </div>
    </nav>
  );
}
