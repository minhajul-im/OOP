import React from "react";
import Background from "../components/homeRelated/Background";
import Form from "../components/homeRelated/Form";

export default function Home() {
  return (
    <>
      <Background />
      <div className="flex justify-center items-center h-screen">
        <Form />
      </div>
    </>
  );
}
