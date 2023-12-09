import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../utilities/firebase/firebase";

export default function Browse() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className=" text-center">
      <h1>Hey there this is minhaj!</h1>
      <button
        onClick={handleSignOut}
        className="px-4 py-2 rounded border bg-red-600 text-white font-semibold"
      >
        sign out
      </button>
    </div>
  );
}
