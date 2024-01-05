/* eslint-disable react/prop-types */


export default function Lightbox({toggle, onCloseBox}) {

  const thumbnails = [
    "src/assets/images/image-product-1-thumbnail.jpg",
    "src/assets/images/image-product-2-thumbnail.jpg",
    "src/assets/images/image-product-3-thumbnail.jpg",
    "src/assets/images/image-product-4-thumbnail.jpg",
  ];
  return (
    <section id="lightbox" className={`xl:absolute xl:grid xl:h-full w-3/4 xl:place-content-center xl:place-items-center z-30 ${toggle ? 'xl:visible' : 'xl:hidden'}`}>
      <button className="xl:place-self-end xl:size-6 xl:mb-3">
        <img className="xl:size-6 "
          src="src/assets/images/icon-close.svg"
          alt="X shaped  icon to close the lightbox"
          onClick={onCloseBox}
        />
      </button>
      <img className="relative xl:w-550 xl:h-550 xl:grid xl:place-items-center xl:mb-4 xl:rounded-xl" src="src/assets/images/image-product-1.jpg" alt="" />
      <div className="">
        {thumbnails.map((thumbnail, index)=>{
            return(
            <button  key={index}>
                <img className="size-24 rounded-lg cursor-pointer xl:mx-4" src={thumbnail} alt="image thumbnail" />
            </button>
            )
        })}
      </div>
    </section>
  );
}
