import React from "react";

export default function NavComponent() {
  return (
    <>
      <nav
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-10"
      >
        <div className="flex items-center ">
          <a href="/" className="cursor-pointer">
            <img
              src="assets/nobg-logo.png"
              alt="Lightbulb Logo"
              className="h-12 w-12"
            />
          </a>
          <h1 className="text-2xl -ml-2">
            <span className="text-yellow-500">Light</span>bulb
          </h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/login"
              className="hover:text-yellow-500 transition duration-200"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="hover:text-yellow-500 transition duration-200"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
