import React from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavComponent from "@/components/nav-component";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NavComponent />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <p>Username</p>
            <Input></Input>
            <p>Password</p>
            <Input></Input>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Log in</Button>
        </CardFooter>
      </Card>
      <p className="mt-2">
        New here?{" "}
        <a
          href="/register"
          className="text-[#95c2da] hover:underline cursor-pointer"
        >
          Click here to sign up.
        </a>
      </p>
    </div>
  );
}
