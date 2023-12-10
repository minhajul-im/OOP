import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../utilities/firebase/firebase";
import { addUser, removeUser } from "../../features/createUserSlice";
import MovieHeader from "./MovieHeader";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/movies");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return <div className="">{pathname === "/movies" && <MovieHeader />}</div>;
}
