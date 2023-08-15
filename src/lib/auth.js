import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function login() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}
function logout() {
  return signOut(auth);
}

export { login, logout };
