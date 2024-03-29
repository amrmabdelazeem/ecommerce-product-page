/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Carousel({ onBox }) {
  const [index, setIndex] = useState(1);

  const thumbnails = [
    "assets/images/image-product-1-thumbnail.jpg",
    "assets/images/image-product-2-thumbnail.jpg",
    "assets/images/image-product-3-thumbnail.jpg",
    "assets/images/image-product-4-thumbnail.jpg",
  ];

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

  function handleProductToShow(id){
    setIndex(id + 1);
  }

  return (
    <section
      id="carousel"
      className="relative w-full xl:w-95 h-80 xl:h-full xl:grid xl:place-items-center place-self-end xl:pb-16"
    >
      <img
        src={`assets/images/image-product-${index}.jpg`}
        alt={`Sneakrs product`}
        className=" w-full max-h-full object-cover xl:object-cover xl:rounded-2xl xl:w-8/12 xl:max-w-md"
        onClick={onBox}
      />
      <div
        id="gallery"
        className="hidden xl:visible xl:mt-5 xl:grid xl:grid-cols-4 xl:gap-8"
      >
        {thumbnails.map((thumbnail, id) => {
          return (
            <button
              key={id}
              id={id}
              title={`thumbnail${id}`}
              onClick={()=>{
                handleProductToShow(id);
              }}
            >
              <img
                className={`size-20 rounded-lg cursor-pointer hover:opacity-65 ${id + 1 === index ? 'border-4 border-primary opacity-65' : 'border-none' }`}
                src={thumbnail}
                alt="Product images thumbnails"
              />
            </button>
          );
        })}
      </div>
      <button
      title="next-arrow"
        onClick={handleNext}
        className="absolute top-1/2 right-5 size-6 bg-white rounded-full flex items-center justify-center z-0 xl:hidden"
      >
        <img
          src="assets/images/icon-next.svg"
          alt="Next icon an arrow to right to navigate product images"
          className="size-2"
        />
      </button>
      <button
      title="prev-arrow"
        onClick={handlePrev}
        className="absolute top-1/2 left-5 size-6 bg-white rounded-full flex items-center justify-center z-0 xl:hidden"
      >
        <img
          src="assets/images/icon-previous.svg"
          alt="Previous icon an arrow to left to navigate back product images"
          className="size-2"
        />
      </button>
    </section>
  );
}
