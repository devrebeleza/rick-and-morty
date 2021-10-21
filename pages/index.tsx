import Image from "next/image";
import React from "react";
import { PersonalHead } from "../components/generals/Head";
import NavBar from "../components/generals/Header";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/generals/Footer";

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
      <Footer />
    </div>
  );
}
