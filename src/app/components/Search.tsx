'use client'
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push(`/${search}/`);
  }
  return (
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => { setSearch(e.target.value) }}
        className="w-80 text-xl text-black rounded-xl p-2 bg-white"
        placeholder="Search"
      />
      <button className="text-xl rounded-xl p-2 bg-slate-300 font-bold ml-2">
        🚀
      </button>
    </form>
  )
}
