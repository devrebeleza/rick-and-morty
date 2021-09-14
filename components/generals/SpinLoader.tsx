import styles from "../../styles/Home.module.css";

export const SpinLoader = () => {
  return (
    <div id={styles.preloader}>
      <div id={styles.spinner_container}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};
