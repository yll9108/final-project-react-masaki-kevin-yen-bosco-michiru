import React from "react";
import Link from "next/link";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

import useAuth from "../hooks/useAuth";

function login() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}
function logout() {
  return signOut(auth);
}

function Header() {
  const user = useAuth();
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="recipes">Resipes</Link>
        </li>
        <li>
          <Link href="shopping-list">Shopping List</Link>
        </li>
      </ul>

      {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
    </>
  );
}

export default Header;
