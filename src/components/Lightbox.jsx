/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Lightbox({toggle, onCloseBox}) {
  const[currentProduct, setCurrentProduct] = useState(1);

  function handleProductImage(id){
    setCurrentProduct(id);
  }
  const thumbnails = [
    "src/assets/images/image-product-1-thumbnail.jpg",
    "src/assets/images/image-product-2-thumbnail.jpg",
    "src/assets/images/image-product-3-thumbnail.jpg",
    "src/assets/images/image-product-4-thumbnail.jpg",
  ];
  return (
    <section id="lightbox" className={`xl:absolute xl:grid xl:h-full w-3/4 xl:place-content-center xl:place-items-center z-30 hidden ${toggle ? 'xl:visible' : 'xl:hidden'}`}>
    <div className={`absolute w-screen h-120 bg-black opacity-55 top-0 left-0 -z-10 ${toggle ? "visible" : "hidden" }`}></div>
      <button className="xl:place-self-end xl:size-6 xl:mb-3">
        <img className="xl:size-6 "
          src="src/assets/images/icon-close.svg"
          alt="X shaped  icon to close the lightbox"
          onClick={onCloseBox}
        />
      </button>
      <img className="relative xl:w-550 xl:h-550 xl:grid xl:place-items-center xl:mb-4 xl:rounded-xl" src={`src/assets/images/image-product-${currentProduct}.jpg`} alt="" />
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
