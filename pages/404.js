import Link from "next/link";
import { A } from "../styles/styles";
import styles from "../styles/Home.module.css";

// pages/404.js
export default function Custom404() {
  return (
    <>
      <body className={styles.container}>
        <div>
          <h1>
            <span>404 Error - </span>
            Page Not Found
          </h1>
          <p>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <p>
            Please try to{" "}
            <Link href="/" passHref>
              <A>Return Home</A>
            </Link>
          </p>
        </div>
      </body>
    </>
  );
}
