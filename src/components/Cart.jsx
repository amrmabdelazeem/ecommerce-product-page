import Checkout from "./Checkout";

/* eslint-disable react/prop-types */
export default function Cart({ toggleCart, cartNotify, count, onDelete }) {
  return (
    <div
      className={`max-w-sm absolute bg-white w-95 h-72 top-20 m-2 rounded-xl ${
        toggleCart ? "visible" : "hidden"
      } shadow-xl z-10 xl:right-14 xl:top-24`}
    >
      <h2 className="font-700 p-5">Cart</h2>
      <Checkout cartNotify={cartNotify} count={count} onDelete={onDelete} />
    </div>
  );
}
