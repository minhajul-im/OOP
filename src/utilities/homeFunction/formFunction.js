import { useState } from "react";

export default function formFunction() {
  const [error, setError] = useState("");
  const [isSignIn, setSignIn] = useState(true);

  const handleToggle = () => {
    setSignIn(!isSignIn);
  };

  return { error, isSignIn, setError, handleToggle };
}
