"use client";
import Link from "next/link";
import ClassBox from "./_components/class-box";
import { Switch } from "@/components/ui/switch";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  return (
    //check if teacher
    // if userID is in teacher table
    //return button
    // use id to check how many classes if (user.id get classes > 0)
    // if x classes display x components (classes.map())
    //else display none (only create)

    <div className="font-sans">
      <nav
        style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-10"
      >
        <div className="flex items-center ">
          <a href="/" className="cursor-pointer">
            <img
              src="assets/nobg-logo.png"
              alt="Lightbulb Logo"
              className="h-12 w-12"
            />
          </a>
          <h1 className="text-2xl -ml-2">
            <span className="text-yellow-500">Light</span>bulb
          </h1>
        </div>
        <ul className="flex space-x-3 items-center">
          <li>
            <Sheet>
              <SheetTrigger>
                <img
                  src="assets/user-cog.svg"
                  alt="Settings Logo"
                  className="h-5 w-5"
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Account Settings</SheetTitle>
                  <SheetDescription>
                    Update your account details below.
                  </SheetDescription>
                </SheetHeader>
                {/* Anonymous Mode Toggle */}

                <div className="flex items-center mb-4">
                  <Switch />

                  <label
                    htmlFor="anonymousToggle"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Enable Anonymous Mode
                  </label>
                </div>

                {/* Save Changes Button */}
                <div>
                  <button
                    type="button"
                    className="w-full bg-[#616161] text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </li>
          <li>
            <a href="/login">
              <img
                src="assets/log-out.svg"
                alt="Logout Logo"
                className="h-5 w-5"
              />
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="home"
        className="h-screen flex items-center justify-left ml-10"
      >
        <div>
          <h1 className="text-3xl mb-4 -mt-52">Classes</h1>
        </div>
      </section>
    </div>
  );
}
