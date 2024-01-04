import { useState } from "react";

export default function Carousel() {
  const [index, setIndex] = useState(1);
  //   const [isNext, setIsNext] = useState(false);
  //   const [isPrev, setIsPrev] = useState(false);
  let lastItem = 4;

  function handleNext() {
    if (index < lastItem) {
      setIndex(index + 1);
    }
  }

  function handlePrev() {
    if (index > 1) {
      setIndex(index - 1);
    }
  }
  return (
    <section id="carousel" className="relative w-full h-80">
      <div className="absolute bg-white w-95 h-72 z-10 top-0 m-2 rounded-xl">
        <h2 className="font-700 p-5">Cart</h2>
        <div id="cart-items" className="border-t-2 grid place-content-center h-4/6">
            {/* here we will display the cart items */}
            <p className="justify-items-center items-center font-700 text-base text-gray-600">Your Cart is empty</p>
        </div>
      </div>
      <img
        src={`src/assets/images/image-product-${index}.jpg`}
        alt={`product-${index}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 size-6 bg-white rounded-full flex items-center justify-center"
      >
        <img
          src="src/assets/images/icon-next.svg"
          alt="next-icon"
          className="size-2"
        />
      </button>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 size-6 bg-white rounded-full flex items-center justify-center"
      >
        <img
          src="src/assets/images/icon-previous.svg"
          alt="prev-icon"
          className="size-2"
        />
      </button>
    </section>
  );
}
