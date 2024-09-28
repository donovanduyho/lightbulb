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

export default function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    console.log(username);
    console.log(password);

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
