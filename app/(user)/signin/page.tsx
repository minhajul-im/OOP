"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "@/components/auth/Input";
import Button from "@/components/auth/Button";
import FieldSet from "@/components/auth/FieldSet";
import { SignInUserData } from "@/interface/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "@/components/common/Spinner";
import { tsSignInSchema, SignInSchema } from "@/utilities/authSchema";
import { usePasswordVisibilityToggle } from "@/hooks/useVisible";

const SignInPage = () => {
  const router = useRouter();

  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<tsSignInSchema>({ resolver: zodResolver(SignInSchema) });

  const { passwordVisibility, togglePasswordVisibility } =
    usePasswordVisibilityToggle();

  const onSubmitForm = async (data: SignInUserData) => {
    try {
      await new Promise((resolve: any) =>
        setTimeout(() => {
          resolve();
          reset();
          router.push("/");
          console.log("SIGN IN:- ", data);
        }, 3000)
      );
    } catch (err: any) {
      setError("email", {
        type: "server",
        message: "Email is Wrong!",
      });
      setError("password", {
        type: "server",
        message: "Password is Wrong!",
      });
      console.log("LOGIN ERROR", err);
    }
  };

  return (
    <section className="px-4 flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Sign in</h1>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full sm:w-[600px]">
        <FieldSet error={errors.email?.message} label="Your Email">
          <Input
            type={true}
            isIcon={false}
            error={!!errors.email}
            register={register("email")}
            placeholder="@ Please Give Your Email..."
          />
        </FieldSet>

        <FieldSet error={errors.password?.message} label="Your Password">
          <Input
            isIcon={true}
            error={!!errors.password}
            type={passwordVisibility.type}
            register={register("password")}
            onToggle={togglePasswordVisibility}
            isVisible={passwordVisibility.visible}
            placeholder="Please Give Your Password..."
          />
        </FieldSet>

        <Button type="submit" isSubmit={isSubmitting}>
          {isSubmitting ? <Spinner /> : "Sign in"}
        </Button>
      </form>

      <h6 className="mt-2">
        You have already an account?
        <span className="text-blue-600 font-semibold ms-2">
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </span>
      </h6>
    </section>
  );
};

export default SignInPage;
