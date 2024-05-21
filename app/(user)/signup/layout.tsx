import React from "react";
import { PropsIntercepting } from "@/interface";

const LayoutSignUpPage = ({ children, signup }: PropsIntercepting) => {
  return (
    <React.Fragment>
      <section className='bg-green-300'> {children}</section>
      <section className='bg-teal-300'>{signup}</section>
    </React.Fragment>
  );
};

export default LayoutSignUpPage;
