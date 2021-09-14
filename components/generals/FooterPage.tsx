import styles from "../../styles/Home.module.css";

export const FooterPage = ({ totalPages, numberPage, setNumberPage }) => {
  const listPages = Array.from(Array(totalPages), (_, index) => index);

  return (
    <footer className={styles.footer}>
      <ul className="pagination">
        {listPages.map((element) => {
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
    </footer>
  );
};
