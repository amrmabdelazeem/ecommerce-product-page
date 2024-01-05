export default function Lightbox() {
  const thumbnails = [
    "src/assets/images/image-product-1-thumbnail.jpg",
    "src/assets/images/image-product-2-thumbnail.jpg",
    "src/assets/images/image-product-3-thumbnail.jpg",
    "src/assets/images/image-product-4-thumbnail.jpg",
  ];
  return (
    <section id="lightbox" className="xl:absolute xl:grid w-3/4 xl:h-full xl:place-content-center xl:place-items-center z-30">
      <button className="xl:place-self-end xl:size-8">
        <img className="xl:size-8 xl:mb-3 "
          src="src/assets/images/icon-close.svg"
          alt="X shaped  icon to close the lightbox"
        />
      </button>
      <img className="relative xl:w-1/2 xl:h-fit xl:grid xl:place-items-center xl:mb-10 xl:rounded-xl" src="src/assets/images/image-product-1.jpg" alt="" />
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
