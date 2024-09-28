'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormEvent } from 'react';

export default function SignupForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-3">
          <p>Username</p>
          <Input type="username" name="username" required></Input>
          <p>Password</p>
          <Input type="password" name="password" required></Input>
          <p>First Name</p>
          <Input type="fname" name="fname" required></Input>
          <p>Last Name</p>
          <Input type="lname" name="lname" required></Input>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Register</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
