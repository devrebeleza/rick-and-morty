import React from "react";
import styles from "../../styles/Home.module.css";

export const ScrollUp = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <a className={styles.back_to_top}>
      <i className="fa fa-chevron-up" onClick={scrollUp}></i>
    </a>
  );
};
