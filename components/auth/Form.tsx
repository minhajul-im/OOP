"use client";

import React from "react";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(5, { message: "Name is required" }).max(100),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().refine((val) => /^\d{10}$/.test(val), {
    message: "Phone is required",
  }),
});

type ValidationSchema = z.infer<typeof formSchema>;

export default function PersonalInfo() {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
  });
  const {
    control,
    formState: { errors },
    setError,
    reset,
  } = form;

  const onSubmitHandler = async (values: ValidationSchema) => {
    await new Promise((resolve: any) =>
      setTimeout(() => {
        resolve();
        reset();
        console.log("values", values);
      }, 2000)
    );
  };

  return (
    <main className=" w-full mx-4 max-w-md flex justify-center items-center h-screen bg-gray-600">
      <Form {...form}>
        <form
          className="flex flex-col gap-6 w-full"
          onSubmit={() => form.handleSubmit(onSubmitHandler)}>
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  Name
                  <FormMessage>{errors.name?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red": errors.name?.message,
                      }
                    )}
                    placeholder="e.g. Stephen King"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  Email Address
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.email?.message,
                      }
                    )}
                    placeholder="e.g. stephenking@lorem.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  Phone Number
                  <FormMessage>{errors.phone?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.phone?.message,
                      }
                    )}
                    placeholder="e.g. +1 234 567 890"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </main>
  );
}
