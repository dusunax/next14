"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "@styles/nav.module.css";
import { useEffect } from "react";

export default function Navigation() {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(`.${styles.nav}`) as HTMLElement;

      if (window.scrollY > 100) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <nav className={styles.nav}>
      <button className={`goback ${styles.goback}`} onClick={goBack}>
        &larr;
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
        <li>
          <Link href="/profile">Profile {path === "/profile" ? "👈" : ""}</Link>
        </li>
      </ul>
    </nav>
  );
}
