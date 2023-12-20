'use client'
import { useEffect } from "react";

export default function error({ error, reset }: { error: Error, reset: () => void }) {
  useEffect(() => {
    console.log(error);
  }, [error])
  return (
    <main className=" bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
      <h2 className="my-4 text-2xl font-bold">Something went Wrong!</h2>
      <button className="mb-4 p-4 bg-red-500 text-[#ffffff] rounded-xl"
        onClick={() => { reset() }}
      >
        Error
      </button>
    </main>
  )

}