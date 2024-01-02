import Link from "next/link";
import MyProfilePic from "./components/MyProfilePic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home Page</h1>
      <p>
        <Link href={'/users'}>Users</Link>
      </p>
      <div className="mx-auto px-6">
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          Hello and Welcome 👋🏾
          <span className="whitespace-nowrap">
            I am <span className="font-bold">AB</span>
          </span>
        </p>
        <MyProfilePic />
      </div>
    </main>
  )
}
