import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  isName,
  isEmail,
  isPassword,
  formFunction,
} from "../../utilities/homeFunction/index";
import { Input, Button } from "./index";
import { addUser } from "../../features/createUserSlice";
import { auth } from "../../utilities/firebase/firebase";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const { isSignIn, error, setError, handleToggle } = formFunction();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSignIn) {
      const nameMgs = isName(inputName.current.value);
      if (nameMgs) return setError(nameMgs);
    }

    let emailVal = inputEmail.current.value;
    let passwordVal = inputPassword.current.value;

    const emailMgs = isEmail(emailVal);
    const passwordMgs = isPassword(passwordVal);

    if (emailMgs) return setError(emailMgs);
    if (passwordMgs) return setError(passwordMgs);

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          userCredential.user;

          dispatch(
            addUser({ displayName: inputName.current.value, email: emailVal })
          );

          navigate("/movies");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setError(`${errorCode} &&& ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setError(`${errorCode} &&& ${errorMessage}`);
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/12 rounded py-8 px-6 bg-gray-800/70"
    >
      <h1 className="text-3xl font-bold pt-4  pb-10 text-center text-white">
        {isSignIn ? "Sign in" : "Sign up"}
      </h1>
      <div className="flex flex-col gap-4">
        {!isSignIn && (
          <Input
            type={"name"}
            placeholder={"Your Full Name"}
            refValue={inputName}
          />
        )}

        <Input
          type={"email"}
          placeholder={"Your Email"}
          refValue={inputEmail}
        />
        <Input
          type={"password"}
          placeholder={"Your Password"}
          refValue={inputPassword}
        />

        {error && <p className="text-red-600 font-semibold text-xs">{error}</p>}

        <Button btnName={isSignIn ? "Sign in" : "Sign up"} />

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
