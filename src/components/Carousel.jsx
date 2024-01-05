import { useState } from "react";

export default function Carousel() {
  const [index, setIndex] = useState(1);
  const [current, SetCurrent] = useState(false);

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
  function handleClick() {
    SetCurrent(!current);
  }
  return (
    <section
      id="carousel"
      className="relative w-full h-80 xl:h-full xl:grid xl:place-items-center"
    >
      <img
        src={`src/assets/images/image-product-${index}.jpg`}
        alt={`Sneakrs product`}
        className="w-full h-full object-cover xl:object-cover xl:rounded-2xl xl:w-9/12"
      />
      <div
        id="gallery"
        className="hidden xl:visible xl:mt-5 xl:grid xl:grid-cols-4 xl:gap-8"
      >
          <button
            onClick={handleClick}
            className={`${
              current ? "border-primary border-4 rounded-xl" : "border-none"
            }`}
          >
            <img
              className={`size-20 rounded-lg cursor-pointer hover:opacity-65 ${
                current ? "opacity-65" : "border-none"
              }`}
              src={`src/assets/images/image-product-1-thumbnail.jpg`}
              alt=""
            />
          </button>
      </div>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 size-6 bg-white rounded-full flex items-center justify-center z-0 xl:hidden"
      >
        <img
          src="src/assets/images/icon-next.svg"
          alt="Next icon an arrow to right to navigate product images"
          className="size-2"
        />
      </button>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 size-6 bg-white rounded-full flex items-center justify-center z-0 xl:hidden"
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
