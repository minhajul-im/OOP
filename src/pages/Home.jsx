import { Form, Background } from "../components/homeRelated/index";

export default function Home() {
  return (
    <>
      <Background />

      <h1 className="welCome mt-4 text-center absolute left-1/2 transform -translate-x-1/2 text-6xl font-extrabold">
        Hey, WelCome!
      </h1>

      <div className="flex justify-center items-center h-screen">
        <Form />
      </div>
    </>
  );
}
