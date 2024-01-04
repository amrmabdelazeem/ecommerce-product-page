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
      <img
        src={`src/assets/images/image-product-${index}.jpg`}
        alt={`Sneakrs product`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 size-6 bg-white rounded-full flex items-center justify-center z-0"
      >
        <img
          src="src/assets/images/icon-next.svg"
          alt="Next icon an arrow to right to navigate product images"
          className="size-2"
        />
      </button>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 size-6 bg-white rounded-full flex items-center justify-center z-0"
      >
        <img
          src="src/assets/images/icon-previous.svg"
          alt="Previous icon an arrow to left to navigate back product images"
          className="size-2"
        />
      </button>
    </section>
  );
}
