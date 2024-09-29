'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

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
  const { push } = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const UserName = formData.get('username');
    const Password = formData.get('password');

    const input = {
      UserName,
      Password,
    };

    console.log(UserName);
    console.log(Password);

    try {
      const response = await fetch('http://localhost:8000/login/loginUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        push('/dashboard');
      } else {
        console.log('Failed to log in.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
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
