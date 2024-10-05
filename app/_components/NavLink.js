"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "@/app/_styles/nav-link.module.css";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={
        pathName.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
