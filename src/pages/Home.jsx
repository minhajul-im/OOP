import { Form, Background } from "../components/homeRelated/index";

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
