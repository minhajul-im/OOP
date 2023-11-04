"use client";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import { Toaster } from "react-hot-toast";

const page = () => {
  const router = useRouter();
  let firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef = useRef();


  const handelSubmit = async (e) => {
    e.preventDefault();

    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let email = emailRef.value;
    let password = passwordRef.value;

    if (IsEmpty(email)) {
      ErrorToast("Email Required!");
    } else if (IsEmail(email)) {
      ErrorToast("Email address is not valid!");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required!");
    } else if (IsEmpty(firstName)) {
      ErrorToast("FirstName Required!");
    } else if (IsEmpty(lastName)) {
      ErrorToast("LastName Required!");
    } else {
      let res = await axios.post("api/user/registration", {
        email,
        password,
        firstName,
        lastName,
      });
      if (res.data.status === "Success") {
        SuccessToast("Registration Success!");
        router.replace("/login");
      } else {
        ErrorToast("Something Went Wrong");
      }
    }
  };


  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="py-12 bg-blue-600 h-screen flex justify-center items-center">
        <div className="container  mx-auto">
          <div className="flex max-w-md mx-auto flex-col text-center">
            <a
              className="block mx-auto text-3xl text-white font-semibold leading-none"
              href="#"
            >
              <img
                className="h-10"
                src="metis-assets/logos/metis/metis-light.svg"
                alt=""
                width="auto"
              />
            </a>
            <form
              onSubmit={handelSubmit}
              className="mt-12 mb-8 p-8 bg-white rounded"
            >
              <span className="text-sm text-gray-400">Sign Up</span>
              <h4 className="mb-6 text-3xl">Create an account</h4>
              <div className="flex -mx-3">
                <div className="flex w-1/2 px-3">
                  <div className="flex w-full mb-4 px-4 bg-gray-50 rounded">
                    <input
                      className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                      type="text"
                      placeholder="First name"
                      ref={(input) => (firstNameRef = input)}
                    />
                  </div>
                </div>
                <div className="flex w-1/2 px-3">
                  <div className="flex w-full mb-4 px-4 bg-gray-50 rounded">
                    <input
                      className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                      type="text"
                      placeholder="Last name"
                      ref={(input) => (lastNameRef = input)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-4 px-4 bg-gray-50 rounded">
                <input
                  className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                  type="email"
                  placeholder="name@email.com"
                  ref={(input) => (emailRef = input)}
                />
                <svg
                  className="h-6 w-6 ml-4 my-auto text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <div className="flex mb-6 px-4 bg-gray-50 rounded">
                <input
                  className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                  type="password"
                  placeholder="Enter your password"
                  ref={(input) => (passwordRef = input)}
                />
                <button className="ml-4">
                  <svg
                    className="h-6 w-6 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
              <button className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded">
                Sign Up
              </button>
            </form>
            <div>
              <p className="text-xs text-blue-200 text-center">
                <a className="underline hover:text-blue-100" href="#">
                  Police privacy
                </a>{" "}
                and{" "}
                <a className="underline hover:text-blue-100" href="#">
                  Terms of Use
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
