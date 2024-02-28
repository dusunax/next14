"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@styles/nav.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <button className={styles.goback}>
        <Link href="..">&larr;</Link>
      </button>
      <ul>
        <li>
          <Link href="/">Home {path === "/" ? "👈" : ""}</Link>
        </li>
        <li>
          <Link href="/about-us">
            About Us {path === "/about-us" ? "👈" : ""}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
