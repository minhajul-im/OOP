import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

import MovieNavbar from "./MovieNavbar";
import { auth } from "../../utilities/firebase/firebase";
import { addUser, removeUser } from "../../features/createUserSlice";

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

  return <div className="">{pathname === "/movies" && <MovieNavbar />}</div>;
}
