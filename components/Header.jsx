"use client";
import { signInWithPopup, signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { auth, provider } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const login = async () => {
    await signInWithPopup(auth, provider);
  };
  const logout = async () => {
    await signOut(auth);
  };
  const [user, loading] = useAuthState(auth);
  return (
    <header className="body-font text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Blog</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </nav>
        {user ? (
          <button
            className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <button
            className="inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={login}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
