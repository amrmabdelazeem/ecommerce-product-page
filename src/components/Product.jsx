/* eslint-disable react/prop-types */
import Button from "./Button";
import { products } from "../products";

export default function Product({onIncrease, onDecrease, count, onCart}) {
  
  return (
    <section className="p-6 mb-10">
      <p className="font-700 text-xs tracking-widest text-primary mb-3">
        {products.company}
      </p>
      <h1 className="font-700 text-3xl mb-3">{products.product_name}</h1>
      <p className="text-gray-500 text-sm mb-5">
      {products.description}
      </p>
      <div id="price" className="flex justify-between items-center mb-5">
        <div id="discount-price" className="flex items-center gap-4">
          <h2 className="font-700 text-2xl">${products.final_price}</h2>
          <span className="font-700 text-sm bg-secondary text-primary px-2 py-0.5 rounded-md">
            {products.discount}%
          </span>
        </div>
        <div id="original-price">
          <p className="font-700 line-through text-sm text-gray-400">${products.price_before}</p>
        </div>
      </div>
      <div
        id="products-count"
        className=" max-w-xs w-full h-12 bg-gray-100 rounded-xl flex justify-between items-center px-5 mb-4"
      >
        <button onClick={onDecrease}>
          <img
            src="src/assets/images/icon-minus.svg"
            alt="icon-minus"
            className="w-3"
          />
        </button>
        <span className="font-700">{count}</span>
        <button onClick={onIncrease}>
          <img
            src="src/assets/images/icon-plus.svg"
            alt="icon-plus"
            className="size-3"
          />
        </button>
      </div>
      <div className="relative max-w-xs">
      <Button title={'Add To Cart'} onCart = {onCart}/>
      <svg className="fill-white size-5 absolute top-1/3 left-1/4" viewBox="0 0 25 25">
        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
      </svg>
      </div>
    </section>
  );
}
