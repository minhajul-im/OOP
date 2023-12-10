import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { auth } from "../../utilities/firebase/firebase";
import { MOVIE_LOGO } from "../../utilities/constant/moveRelated";

export default function MovieHeader() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <header className="bg-teal-500">
      <nav className="w-9/12 mx-auto flex justify-between items-center">
        <img className="w-10 h-10 rounded-full" src={MOVIE_LOGO} alt="log" />
        <ul>
          <FontAwesomeIcon
            onClick={handleSignOut}
            icon={faUser}
            className="w-10 h-10 cursor-pointer"
          />
        </ul>
      </nav>
    </header>
  );
}
