"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Must six characters"),
});

type formSchemaType = z.infer<typeof formSchema>;

const SignInPage = () => {
  const [isShow, setIsShow] = React.useState<"SHOW" | "HIDE">("HIDE");
  const form = useForm<formSchemaType>({ resolver: zodResolver(formSchema) });
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmitted = async (formData: any) => {
    await new Promise((resolve: any) =>
      setTimeout(() => {
        resolve();
        console.log("values", formData);
      }, 2000)
    );
  };

  const handleShow = () => {
    if (isShow === "HIDE") {
      setIsShow("SHOW");
    } else {
      setIsShow("HIDE");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-black">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmitted)}>
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email address..."
                      />
                    </FormControl>
                    <FormMessage className="tex-sx">
                      {errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        icon={isShow === "SHOW" ? <IoMdEyeOff /> : <IoMdEye />}
                        onShow={handleShow}
                        type={isShow === "SHOW" ? "text" : "password"}
                        placeholder="Enter Your Password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="tex-sx">
                      {errors.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4">
                {isSubmitting ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
          <h6 className="mt-6 text-xs text-right select-none">
            You have no account?
            <span className="text-blue-600 font-semibold ms-2">
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </span>
          </h6>
        </CardContent>
      </Card>
    </main>
  );
};
export default SignInPage;
