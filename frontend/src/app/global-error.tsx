"use client";

import { ErrorImg } from "@lib/assets/svg/Error";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
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
      </body>
    </html>
  );
}
