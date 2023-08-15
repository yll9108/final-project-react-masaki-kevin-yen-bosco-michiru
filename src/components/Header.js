import React from "react";
import Link from "next/link";

import useAuth from "../hooks/useAuth";
import { login, logout } from "../lib/auth";

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
