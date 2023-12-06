import React from "react";

export default function Button({ name }) {
  return (
    <button
      className="py-2 px-4 font-bold text-white bg-red-600 rounded border hover:bg-red-900
      border-red-600  hover:border-1 duration-100"
    >
      {name}
    </button>
  );
}
