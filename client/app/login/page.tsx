import React from "react";
import LoginForm from "./_components/login-form";
import NavComponent from "@/components/nav-component";

export default function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <NavComponent />
      <LoginForm />
      <p className="mt-4">
        New here?{" "}
        <a href="/register">
          <span style={{ color: "#B7D9EB", cursor: "pointer" }}>
            Click here to sign up.
          </span>
        </a>
      </p>
    </div>
  );
}
