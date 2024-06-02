import Image from "next/image";
import Link from "next/link";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { dummyUserPhoto, themes } from "@/lib/config";
import ThemeSelectorButton from "./ThemeSelectorButton";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/about",
    name: "About",
  },
];

export default async function NavBar() {
  const user = await currentUser();

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map(({ name, path }) => (
              <li key={name + path}>
                <NavLink href={path} text={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Next Tasks
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <Image
              src={
                "https://img.icons8.com/?size=100&id=13369&format=png&color=000000"
              }
              alt="Theme"
              width={40}
              height={40}
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {themes.map((theme) => (
              <li key={theme}>
                <ThemeSelectorButton theme={theme} />
              </li>
            ))}
          </ul>
        </div>

        <SignedIn>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="User"
                  src={user?.imageUrl ?? dummyUserPhoto}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <SignOutButton>
                  <button>Sign Out</button>
                </SignOutButton>
              </li>
            </ul>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
