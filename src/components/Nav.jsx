import { useState } from "react";

export default function Nav() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <nav className={`bg-white border-gray-200 flex justify-between `}>
    {/*Cart Component to move seprately start*/}
      <div className="absolute bg-white w-95 h-72 z-10 top-20 m-2 rounded-xl">
        <h2 className="font-700 p-5">Cart</h2>
        <div
          id="cart-items"
          className="border-t-2 grid place-content-center h-4/6"
        >
          {/* here we will display the cart items */}
          <p className="justify-items-center items-center font-700 text-base text-gray-600">
            Your Cart is empty
          </p>
        </div>
      </div>
      {/*Cart Component to move seprately end*/}
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
        <button onClick={handleClick}>
          <img
            className="size-7"
            src="src/assets/images/icon-cart.svg"
            alt="icon-cart"
          />
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
