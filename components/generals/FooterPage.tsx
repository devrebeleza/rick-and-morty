import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";

let init: number;
let end: number;

export const FooterPage = ({ totalPages, numberPage, setNumberPage }) => {
  const listPages = Array.from(Array(totalPages), (_, index) => index);

  const [listPagesResume, setListPageResume] = useState([
    ...listPages.slice(0, 5),
  ]);

  const previousPage = () => {
    init--;
    end--;

    setListPageResume([...listPages.slice(init, end)]);
  };

  const nextPage = () => {
    init++;
    end++;
    setListPageResume([...listPages.slice(init, end)]);
  };

  useEffect(() => {
    init = 0;
    end = 5;
    setListPageResume([...listPages.slice(init, end)]);
  }, []);

  return (
    <footer className={styles.footer}>
      <a
        onClick={previousPage}
        className={
          init > 0 ? styles.pageButtonEnabled : styles.pageButtonDisabled
        }
      >
        &lt;&lt;
      </a>
      <ul className="pagination">
        {listPagesResume.map((element) => {
          return (
            <li key={element}>
              <a
                onClick={() => {
                  setNumberPage(element + 1);
                }}
                className={numberPage === element + 1 ? "active" : ""}
              >
                {element + 1}
              </a>
            </li>
          );
        })}
      </ul>
      <a
        onClick={nextPage}
        className={
          end < totalPages
            ? styles.pageButtonEnabled
            : styles.pageButtonDisabled
        }
      >
        &gt;&gt;
      </a>
    </footer>
  );
};
