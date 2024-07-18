import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

async function Sidebar() {
  const user = await currentUser();
  const email = user.primaryEmailAddress.emailAddress;
  const href=`/${email}`
  return (
    <div className="w-40 bg-white shadow-md">
      <div className="p-4 font-bold text-xl border-b flex flex-col justify-center items-center gap-5">
        {" "}
        <h1 className="text-lg">{user.fullName}</h1>
        <UserButton />
      </div>
      <nav>
        <ul className="p-4 flex flex-col items-center justify-center gap-5">
          <li className="">
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href="/dashboard/Projects"
              className="text-gray-700 hover:text-gray-900"
            >
              Projects
            </Link>
          </li>
          <li className="">
            <Link
              href="/dashboard/Socials"
              className="text-gray-700 hover:text-gray-900"
            >
              Socials
            </Link>
          </li>

          <li className="">
            <Link
              href="/dashboard/Portfolio"
              className="text-gray-700 hover:text-gray-900"
            >
              Portfolio
            </Link>
          </li>
          <li className="">
            <Link
              href={href}
              className="text-gray-700 hover:text-gray-900"
            >
              View Result
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default async function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">{children}</main>
    </div>
  );
}
