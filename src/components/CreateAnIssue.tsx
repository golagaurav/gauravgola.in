import Link from "next/link";
import React from "react";

export default function CreateAnIssue() {
  return (
    <div className="w-full px-10 sm:px-20 h-screen grid place-items-center dark:text-gray-200">
      <p>
        Something went wrong. I know you don't know what's the problem. So Let
        me know by{" "}
        <Link
          href="https://t.me/Gauravgola"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-blue-500 "
        >
          creating an issue
        </Link>{" "}
        on Telegram.
      </p>
    </div>
  );
}
