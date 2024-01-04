import Checkout from "./Checkout";

/* eslint-disable react/prop-types */
export default function Cart({toggleCart}) {
  return (
    <div
      className={`max-w-sm absolute bg-white w-95 h-72 z-10 top-20 m-2 rounded-xl ${
        toggleCart ? "visible" : "hidden"
      } shadow-xl`}
    >
      <h2 className="font-700 p-5">Cart</h2>
      <Checkout/>
    </div>
  );
}
