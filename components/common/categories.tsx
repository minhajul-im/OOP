"use client";

import { useCallback } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-6 items-center">
      <Button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("type", "all"));
        }}>
        All
      </Button>
      <Button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("type", "islamic"));
        }}>
        Islamic
      </Button>

      <Button
        onClick={() => {
          router.push(
            pathname + "?" + createQueryString("type", "programming")
          );
        }}>
        Programming
      </Button>
    </div>
  );
}
