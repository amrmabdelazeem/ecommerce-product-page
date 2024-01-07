/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Lightbox({toggle, onCloseBox}) {
  const[currentProduct, setCurrentProduct] = useState(1);

  function handleProductImage(id){
    setCurrentProduct(id);
  }
  function handleNext(){
    if(currentProduct<4){
      setCurrentProduct(prev=> prev+1)
    }
  }
  function handlePrev(){
    if(currentProduct>1){
      setCurrentProduct(prev=> prev-1)
    }
  }
  const thumbnails = [
    "src/assets/images/image-product-1-thumbnail.jpg",
    "src/assets/images/image-product-2-thumbnail.jpg",
    "src/assets/images/image-product-3-thumbnail.jpg",
    "src/assets/images/image-product-4-thumbnail.jpg",
  ];
  return (
    <section id="lightbox" className={`xl:absolute xl:grid xl:h-full w-full gap-y-4 xl:place-content-center xl:place-items-center z-30 hidden ${toggle ? 'xl:visible' : 'xl:hidden'}`}>
    <div className={`absolute w-screen h-120 bg-black opacity-55 top-0 left-0 -z-10 ${toggle ? "visible" : "hidden" }`}></div>
      <button className="xl:place-self-end xl:size-6 xl:mb-3" onClick={onCloseBox}>
      <svg className="size-10 fill-white"
      viewBox="0 0 25 25"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"/></svg>
      </button>
      <div className="relative">
      <img className="relative xl:w-550 xl:h-550 xl:grid xl:place-items-center xl:mb-4 xl:rounded-2xl" src={`src/assets/images/image-product-${currentProduct}.jpg`} alt="" />
      <button
      onClick={handleNext}
        className="absolute top-1/2 -right-8 size-16 bg-white rounded-full flex items-center justify-center z-0"
      >
        <img
          src="src/assets/images/icon-next.svg"
          alt="Next icon an arrow to right to navigate product images"
          className="w-4 h-5"
        />
      </button>
      <button
      onClick={handlePrev}
        className="absolute top-1/2 -left-8 size-16 bg-white rounded-full flex items-center justify-center z-0"
      >
        <img
          src="src/assets/images/icon-previous.svg"
          alt="Previous icon an arrow to left to navigate back product images"
          className="w-4 h-5"
        />
      </button>
      </div>
      <div className="">
        {thumbnails.map((thumbnail, index)=>{
            return(
            <button  key={index} id={index} onClick={()=>handleProductImage(index+1)}>
                <img className="size-24 rounded-lg cursor-pointer xl:mx-4" src={thumbnail} alt="image thumbnail" />
            </button>
            )
        })}
      </div>
    </section>
  );
}
