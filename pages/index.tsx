import Image from "next/image";
import React from "react";
import { PersonalHead } from "../components/generals/Head";
import NavBar from "../components/generals/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <PersonalHead title="Challenge" />

      <main className={styles.mainIndex}>
        <h1 className={styles.title}>
          <a target="_blank" rel="noreferrer">
            Rick & Morty FanPage!
          </a>
        </h1>
        <NavBar page="home" />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>{" "}
          ©2021 DevReBeleza
        </a>{" "}
      </footer>
    </div>
  );
}
