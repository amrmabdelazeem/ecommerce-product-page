/* eslint-disable react/prop-types */
export default function Button({title}) {
  return (
    <button className="bg-primary w-full h-14 rounded-xl font-700 text-white text-base flex items-center justify-center gap-3">
      {title}
    </button>
  );
}
