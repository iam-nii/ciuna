"use client";
import React from "react";

import { useAuthStore } from "@/stores/userAuthStore";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

function TitleBar() {
  const user = useAuthStore((state) => state.user);
  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);
  return (
    <div
      className={`flex items-center sm:justify-between sm:pr-20 sm:p-2 bg-white border-b border-gray-200 ${
        user ? "block" : "hidden"
      }`}
    >
      <div className="flex sm:items-center gap-5 sm:pl-20">
        <Link href="/" className="text-slate-600">
          For Business
        </Link>
        <Link href="/" className="text-slate-600">
          Careers at Cuina
        </Link>
        <Link href="/" className="text-slate-600">
          Help
        </Link>
      </div>

      <div className="flex gap-2">
        <Button className="text-thin text-md button hover:bg-slate-200">
          Sign In
        </Button>
        <Button className="text-md bg-orange-500 text-white button rounded-lg">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default TitleBar;
