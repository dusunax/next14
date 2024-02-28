"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@styles/nav.module.css";
import { useEffect } from "react";

export default function Navigation() {
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(`.${styles.nav}`) as HTMLElement;

      if (window.scrollY > 100) {
        console.log(nav, styles.sticky);
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
