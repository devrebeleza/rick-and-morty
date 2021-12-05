import React from "react";
import styles from "../../styles/Home.module.css";
import Script from "next/script";

export const Footer = () => {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/afd6aa68df.js"
        strategy="lazyOnload"
      />
      <footer className={styles.footer}>
        <a
          href="https://github.com/devrebeleza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="i-icon fab fa-github"></i>
        </a>
        <a
          href="https://github.com/devrebeleza"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2021 Copyright devReBeleza
        </a>
        <a
          href="https://www.linkedin.com/in/renzogarcia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="i-icon fab fa-linkedin"></i>
        </a>
      </footer>
    </>
  );
};
