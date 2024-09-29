import React from "react";
import SignupForm from "./_components/signup-form";
import NavComponent from "@/components/nav-component";

export default function Signup() {
  return (
    <div className="h-screen flex flex-col items-center justify-center mt-9">
      <NavComponent />
      <SignupForm />
      <p className="mt-4">
        Already have an account?{" "}
        <a href="/login">
          <span style={{ color: "#B7D9EB", cursor: "pointer" }}>
            Click here to log in.
          </span>
        </a>
      </p>
    </div>
  );
}
