import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/favourites", label: "Favourites" },
    { href: "/add-destination", label: "Add Destination" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/" className={styles.logo}>TravelLite</Link>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              router.pathname === item.href
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
