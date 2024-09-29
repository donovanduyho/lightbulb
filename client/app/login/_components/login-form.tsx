"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

export default async function LoginForm() {
  const { push } = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const input = {
      username,
      password,
    };

    console.log(username);
    console.log(password);

    try {
      const response = await fetch(
        "http://localhost:8000/user/registerStudent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(input),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        push("/dashboard");
      } else {
        console.log("Failed to register.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
    // Post to endpoint -> Redirect to dashboard
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-3">
          <p>Username</p>
          <Input type="username" name="username" required></Input>
          <p>Password</p>
          <Input type="password" name="password" required></Input>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Login</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
