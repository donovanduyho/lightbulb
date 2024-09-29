import React from "react";
import SignupForm from "./_components/signup-form";
import NavComponent from "@/components/nav-component";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10">
      <NavComponent />
      <SignupForm />
      <p className="mt-2">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-[#95c2da] hover:underline cursor-pointer"
        >
          Click here to log in.
        </a>
      </p>
    </div>
  );
}
