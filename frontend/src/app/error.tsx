"use client"; // Error components must be Client Components

import { ErrorImg } from "@lib/assets/svg/Error";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <ErrorImg />
      <button
        className="transition laptop:w-48 w-full ease-in-out duration-300 bg-dark-blue hover:bg-dark-blue/90 rounded-md shadow-md text-sm font-medium text-white py-2 px-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
