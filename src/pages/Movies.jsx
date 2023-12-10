import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../utilities/firebase/firebase";
import { fetchMoviesApi } from "../features/createMoviesSlice";

export default function Browse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies } = useSelector((store) => store.movie);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    dispatch(fetchMoviesApi());
  }, [dispatch]);

  // console.log(movies?.results);

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
