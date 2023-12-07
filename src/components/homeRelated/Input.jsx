export default function Input({ type, placeholder, refValue }) {
  return (
    <input
      ref={refValue}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-white"
      type={type}
      placeholder={placeholder}
      required
    />
  );
}
