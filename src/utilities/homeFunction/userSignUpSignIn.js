import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const userSignUpSignIn = (isSignIn, emailVal, passwordVal, setError) => {
  if (!isSignIn) {
    createUserWithEmailAndPassword(auth, emailVal, passwordVal)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);
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
