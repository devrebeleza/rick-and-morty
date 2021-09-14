import Link from "next/link";
import { PersonalHead } from "../../components/generals/Head";
import NavBar from "../../components/generals/Header";
import styles from "../../styles/Home.module.css";

const Dashboard = () => {
  return (
    <>
      <PersonalHead title="Dashboard" />
      <NavBar page="dashboard" />
      <div className={styles.grid}>
        Hola soy el Dashboard
        <Link href="/">
          <a className={styles.card}>Ir al Home</a>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
