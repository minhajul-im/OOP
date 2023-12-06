import { Input, Button, GoogleAndGithub } from "./index";
import formFunction from "../../utilities/homeFunction/formFunction";

export default function Form() {
  const { isSignIn, error, setError, handleToggle } = formFunction();

  return (
    <form className="w-3/12 rounded py-8 px-6 bg-gray-800/70">
      <h1 className="text-3xl font-bold pt-4  pb-10 text-center text-white">
        {isSignIn ? "Sign in" : "Sign up"}
      </h1>
      <div className="flex flex-col gap-4">
        {!isSignIn && (
          <Input type={"name"} placeholder={"Your Full Name"} refValue={""} />
        )}

        <Input type={"email"} placeholder={"Your Email"} refValue={""} />
        <Input type={"password"} placeholder={"Your Password"} refValue={""} />

        {error && <p className="text-red-600 font-semibold text-xs">{error}</p>}

        <Button name={isSignIn ? "Sign in" : "Sign up"} />

        <GoogleAndGithub />

        <p className="pt-2 text-white">
          You have {isSignIn ? "no" : "already"} account!
          <span
            onClick={handleToggle}
            className="text-blue-500 px-2 underline cursor-pointer"
          >
            {isSignIn ? "sign up" : "sign in"}
          </span>
        </p>
      </div>
    </form>
  );
}
