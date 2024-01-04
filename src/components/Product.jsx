import { useState } from "react";
import Button from "./Button";

export default function Product() {
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
    <section className="p-6">
      <p className="font-700 text-xs tracking-widest text-primary mb-3">
        SNEAKER COMPANY
      </p>
      <h1 className="font-700 text-3xl mb-3">Fall Limited Edition Sneakers</h1>
      <p className="text-gray-500 text-sm mb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div id="price" className="flex justify-between items-center mb-5">
        <div id="discount-price" className="flex items-center gap-4">
          <h2 className="font-700 text-2xl">$125.00</h2>
          <span className="font-700 text-sm bg-secondary text-primary px-2 py-0.5 rounded-md">
            50%
          </span>
        </div>
        <div id="original-price">
          <p className="font-700 line-through text-sm text-gray-400">$250.00</p>
        </div>
      </div>
      <div
        id="products-count"
        className=" w-full h-14 bg-gray-100 rounded-xl flex justify-between items-center px-5 mb-4"
      >
        <button onClick={handleDecrease}>
          <img
            src="src/assets/images/icon-minus.svg"
            alt="icon-minus"
            className="w-3"
          />
        </button>
        <span className="font-700">{count}</span>
        <button onClick={handleIncrease}>
          <img
            src="src/assets/images/icon-plus.svg"
            alt="icon-plus"
            className="size-3"
          />
        </button>
      </div>
      <Button/>
    </section>
  );
}
