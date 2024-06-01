"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string;
  text: string;
}

export default function NavLink({ href, text }: IProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname === href ? "font-bold " : "font-normal "}
    >
      {text}
    </Link>
  );
}
