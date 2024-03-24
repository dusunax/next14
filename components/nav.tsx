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
    router.back(); // 라우터를 사용하여 이전 페이지로 이동
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.goback} onClick={goBack}>
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
      </ul>
    </nav>
  );
}
