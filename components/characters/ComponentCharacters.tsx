import styles from "../../styles/Home.module.css";
import { OneCharacter } from "./OneCharacter";

export const ComponentCharacters = ({ list }) => {
  return (
    <div className={styles.grid}>
      {list.map((element, index) => {
        return <OneCharacter key={index} character={element} />;
      })}
    </div>
  );
};
