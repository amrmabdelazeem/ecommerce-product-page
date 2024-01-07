/* eslint-disable react/prop-types */
export default function Button({ title, onCart }) {
  return (
    <button
      onClick={onCart}
      className="bg-primary w-full h-12 rounded-xl font-700 text-white text-sm flex items-center justify-center gap-3 xl:h-full xl:text-base xl:hover:opacity-70"
    >
      {title}
    </button>
  );
}
