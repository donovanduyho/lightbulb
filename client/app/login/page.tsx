import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Login() {
  return (
    <div>
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
    </div>
  );
}
