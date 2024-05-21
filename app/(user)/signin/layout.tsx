import React from "react";
import { PropsIntercepting } from "@/interface";

const LayoutSignInPage = ({ children, signin }: PropsIntercepting) => {
  return (
    <React.Fragment>
      <section className='bg-green-300'> {children}</section>
      <section className='bg-teal-300'>{signin}</section>
    </React.Fragment>
  );
};

export default LayoutSignInPage;
