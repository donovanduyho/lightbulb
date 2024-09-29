"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CreateBtnProps {
  userId: string;
}

export default function CreateBtn({ userId }: CreateBtnProps) {
  // Check if userId in Teacher table
  // No return <></>
  //
  const [isTeacher, setIsTeacher] = useState<boolean | null>(null);
  const [classCode, setClassCode] = useState("");
  const handleJoinClass = () => {
    // Handle the logic to join the class with the entered class code
    console.log("Joining class with code:", classCode);
    // Add your logic here (e.g., API call to join the class)
    // After handling, you might want to reset the class code
    setClassCode("");
  };

  useEffect(() => {
    const checkIfTeacher = async () => {
      try {
        const response = await fetch(`/api/check-teacher?userId=${userId}`);
        const data = await response.json();

        if (data.isTeacher) {
          setIsTeacher(true);
        } else {
          setIsTeacher(false);
        }
      } catch (error) {
        console.error("Error checking teacher status:", error);
        setIsTeacher(false); // Fallback in case of error
      }
    };
    checkIfTeacher();
  }, [userId]);

  if (!isTeacher) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Join Class</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Join a Class</AlertDialogTitle>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleJoinClass(); // Call the join class function
              }}
            >
              <label htmlFor="classCode" className="block mb-2">
                Class Code:
              </label>
              <input
                type="text"
                id="classCode"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                className="border rounded p-2 mb-4 w-full"
                required
              />
            </form>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              type="submit" // Add type submit for the button
              form="joinClassForm" // Link it to the form
            >
              Join
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Create Class</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create Class</AlertDialogTitle>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleJoinClass(); // Call the join class function
              }}
            >
              <label htmlFor="classNam" className="block mb-2">
                Class Name:
              </label>
              <input
                type="text"
                id="classCode"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                className="border rounded p-2 mb-4 w-full"
                required
              />
            </form>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              type="submit" // Add type submit for the button
              form="createClassForm" // Link it to the form
            >
              Create Class
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
