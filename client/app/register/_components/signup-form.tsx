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
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { FormEvent } from 'react';

export default function SignupForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const first_name = formData.get('fname');
    const last_name = formData.get('lname');
    const is_admin = formData.get('admin');

    console.log(username);
    console.log(password);
    console.log(first_name);
    console.log(last_name);
    console.log(is_admin);

    // Post to endpoint -> Redirect to dashboard
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-2">
          <label>Username</label>
          <Input type="username" name="username" required></Input>
          <label>Password</label>
          <Input type="password" name="password" required></Input>
          <label>First Name</label>
          <Input type="fname" name="fname" required></Input>
          <label>Last Name</label>
          <Input type="lname" name="lname" required></Input>
          <div className="flex flex-row gap-3 items-center mt-3">
            <label>Admin</label>
            <Switch name="admin" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="rounded-full">Register</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
