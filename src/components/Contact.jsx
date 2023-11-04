'use client'
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import axios from "axios";

import React, { useRef } from "react";

const Contact = () => {

  let emailRef, subRef, nameRef, msgRef= useRef();


  const handelSubmit = async (e) => {
    e.preventDefault();
    let email = emailRef.value;
    let sub = subRef.value;
    let name = nameRef.value;
    let msg = msgRef.value;

    if (IsEmpty(email)) {
      ErrorToast("Email Required!");
    } else if (IsEmail(email)) {
      ErrorToast("Email address is not valid!");
    } else if (IsEmpty(sub)) {
      ErrorToast("Subject Required!");
    } else if (IsEmpty(name)) {
      ErrorToast("Name Required!");
    }else if (IsEmpty(msg)) {
      ErrorToast("Msg Required!");
    }else {
      let res = await axios.post("api/user/mail", { email, sub, name, msg });
      if (res.data.status === "Success") {
        SuccessToast("Message Sent Success!");
      } else {
        ErrorToast("Message Sent Fail!");
      }
    }
  };

  
  return (
    <section className="py-20">
      <div className="container  mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="max-w-md mb-8 mx-auto">
            <span className="text-sm text-gray-400">Contact Us</span>
            <h2 className="mt-2 text-4xl font-bold font-heading">
              We will be glad to hear from you!
            </h2>
          </div>
          <div>
            <form onSubmit={handelSubmit}>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                  type="text"
                  placeholder="Subject"
                  ref={(input) => (subRef = input)}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                  type="text"
                  placeholder="Name"
                  ref={(input) => (nameRef = input)}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                  type="email"
                  placeholder="name@example.com"
                  ref={(input) => (emailRef = input)}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none"
                  type="text"
                  placeholder="Message..."
                  defaultValue={""}
                  ref={(input) => (msgRef = input)}
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
