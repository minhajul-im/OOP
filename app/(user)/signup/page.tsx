"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/auth/Input";
import Button from "@/components/auth/Button";
import { SignUpUserData } from "@/interface/auth";
import FieldSet from "@/components/auth/FieldSet";
import { tsSignUpSchema, SignUpSchema } from "@/lib/authSchema";
import { usePasswordVisibilityToggle } from "@/hooks/useVisible";
import Spinner from "@/components/common/Spinner";

const SignInPage = () => {
  const router = useRouter();

  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<tsSignUpSchema>({ resolver: zodResolver(SignUpSchema) });

  const {
    passwordVisibility,
    confirmPasswordVisibility,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  } = usePasswordVisibilityToggle();

  const onSubmitForm = async (data: SignUpUserData) => {
    try {
     await new Promise((resolve: any) =>
        setTimeout(() => {
          resolve();
          reset();
          router.push("/signin");
          console.log(data);
        }, 2000)
      );
    } catch (err: any) {
      setError("email", {
        type: "server",
        message: err.response?.data?.error,
      });
    }
  };

  return (
    <section className='mx-4 flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold mb-6'>Create an account</h1>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className='w-full sm:w-[600px]'>
        <FieldSet error={errors.name?.message} label='Full Name'>
          <Input
            isIcon={false}
            type={true}
            error={!!errors.name}
            register={register("name")}
            placeholder='Please Give Your Full Name!'
          />
        </FieldSet>

        <FieldSet error={errors.email?.message} label='Your Email'>
          <Input
            isIcon={false}
            type={true}
            error={!!errors.email}
            register={register("email")}
            placeholder='@ Please Give Your Email!'
          />
        </FieldSet>

        <FieldSet error={errors.password?.message} label='Your Password'>
          <Input
            isIcon={true}
            error={!!errors.password}
            type={passwordVisibility.type}
            register={register("password")}
            onToggle={togglePasswordVisibility}
            isVisible={passwordVisibility.visible}
            placeholder='Please Give Your Password!'
          />
        </FieldSet>

        <FieldSet
          label='Your Confirm Password'
          error={errors.confirmPassword?.message}>
          <Input
            isIcon={true}
            error={!!errors.confirmPassword}
            type={confirmPasswordVisibility.type}
            register={register("confirmPassword")}
            onToggle={toggleConfirmPasswordVisibility}
            isVisible={confirmPasswordVisibility.visible}
            placeholder='Please Give Your Confirm Password!'
          />
        </FieldSet>

        <Button type='submit' isSubmit={isSubmitting}>
          {isSubmitting ? <Spinner/> : "Sign up"}
        </Button>
      </form>

      <h6 className='text-start mt-2'>
        You have already an account?
        <span className='text-blue-600 font-semibold ms-2'>
          <Link href='/signin' className='underline'>
            Login
          </Link>
        </span>
      </h6>
    </section>
  );
};

export default SignInPage;


