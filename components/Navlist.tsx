"use client";
import { menulist } from "@/lib/global-var";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlist() {
    const pathName = usePathname();
  return (
    <ul className="hidden space-x-4 sm:flex">
      {menulist.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={` ${pathName === item.href ? "text-primary opacity-100" : "hover:text-primary"} font-semibold opacity-50 hover:opacity-100 transition`}
          >
            {item.name}
          </Link>

        </li>
      ))}
    </ul>
  );
}
