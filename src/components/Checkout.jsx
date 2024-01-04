import Button from "./Button";

export default function Checkout() {
  return (
    <div id="cart-items" className="border-t-2 grid grid-cart grid-rows-2 place-content-center place-items-center h-3/4 p-4 ">
      <img
        className="size-14 rounded-md justify-self-start"
        src="src/assets/images/image-product-1-thumbnail.jpg"
        alt="product-thumbnail"
      />
      <div id="cart-items" className="">
        <p className="text-gray-400">Fall Limited Edition Sneakers</p>
        <p className="text-gray-400">
          $125.00 x 3 <span className="text-black font-700">$375.00</span>
        </p>
      </div>
      <button>
      <svg className="fill-gray-300 size-5 justify-self-end" viewBox="0 0 20 20">
        <path
          d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
          id="a"
        />
      </svg>
      </button>
      <div className="col-span-3 w-full">
        <Button title={"Checkout"}/>
      </div>
      {/* <p className="justify-items-center items-center font-700 text-base text-gray-600">
          Your Cart is empty
        </p> */}
    </div>
  );
}
