import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { auth } from "../firebase/firebase";
import { addUser } from "../../features/createUserSlice";

const userSignUpSignIn = ({
  isSignIn,
  nameVal,
  emailVal,
  passwordVal,
  setError,
}) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!isSignIn) {
    createUserWithEmailAndPassword(auth, emailVal, passwordVal)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
        // dispatch(addUser({ displayName: nameVal, email: emailVal }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(`${errorCode} &&& ${errorMessage}`);
      });
  } else {
    signInWithEmailAndPassword(auth, emailVal, passwordVal)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(`${errorCode} &&& ${errorMessage}`);
      });
  }
};

export default userSignUpSignIn;
