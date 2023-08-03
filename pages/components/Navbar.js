import React from "react";
import Link from "next/link";
import styles from "/styles/basic.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
function Navbar() {
  return (
    <main className={inter.className}>
      <nav className={styles.navbar}>
        <Link className={styles.navLinks} href="/">
          Home
        </Link>
        <Link className={styles.navLinks} href="/posts">
          Posts
        </Link>
      </nav>
    </main>
  );
}

export default Navbar;
